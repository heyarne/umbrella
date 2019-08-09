import { Fn } from "@thi.ng/api";
import { circle, line } from "@thi.ng/geom";
import { pointInCircle } from "@thi.ng/geom-isec";
import {
    HALF_PI,
    norm,
    PI,
    TAU
} from "@thi.ng/math";
import { cartesian2 } from "@thi.ng/vectors";
import { KeyModifier, LayoutBox, MouseButton } from "../api";
import { dialVal } from "../behaviors/dial";
import { handleSlider1Keys } from "../behaviors/slider";
import { IMGUI } from "../gui";
import { GridLayout, isLayout } from "../layout";
import { textLabelRaw } from "./textlabel";
import { tooltipRaw } from "./tooltip";

export const dial = (
    gui: IMGUI,
    layout: GridLayout | LayoutBox,
    id: string,
    min: number,
    max: number,
    prec: number,
    val: number[],
    i: number,
    label?: string,
    fmt?: Fn<number, string>,
    info?: string
) => {
    const { x, y, w, h, ch } = isLayout(layout) ? layout.nextSquare() : layout;
    return dialRaw(
        gui,
        id,
        x,
        y,
        w,
        h,
        min,
        max,
        prec,
        val,
        i,
        gui.theme.pad,
        h + ch / 2 + gui.theme.baseLine,
        label,
        fmt,
        info
    );
};

export const dialRaw = (
    gui: IMGUI,
    id: string,
    x: number,
    y: number,
    w: number,
    h: number,
    min: number,
    max: number,
    prec: number,
    val: number[],
    i: number,
    lx: number,
    ly: number,
    label?: string,
    fmt?: Fn<number, string>,
    info?: string
) => {
    const r = Math.min(w, h) / 2;
    const pos = [x + w / 2, y + h / 2];
    const hover = pointInCircle(gui.mouse, pos, r);
    let active = false;
    const thetaGap = PI / 3;
    const startTheta = HALF_PI + thetaGap / 2;
    if (hover) {
        gui.hotID = id;
        const aid = gui.activeID;
        if ((aid === "" || aid === id) && gui.buttons == MouseButton.LEFT) {
            gui.activeID = id;
            active = true;
            val[i] = dialVal(
                gui.mouse,
                pos,
                startTheta,
                thetaGap,
                min,
                max,
                prec
            );
            if (gui.modifiers & KeyModifier.ALT) {
                val.fill(val[i]);
            }
        }
        info && tooltipRaw(gui, info);
    }
    const focused = gui.requestFocus(id);
    const v = val[i];
    const valTheta = startTheta + (TAU - thetaGap) * norm(v, min, max);
    // adaptive arc resolution
    const bgShape = circle(pos, r, {
        fill: gui.bgColor(hover || focused),
        stroke: gui.focusColor(id)
    });
    const valShape = line(cartesian2(null, [r, valTheta], pos), pos, {
        stroke: gui.fgColor(hover),
        weight: 3
    });
    gui.add(
        bgShape,
        valShape,
        textLabelRaw(
            [x + lx, y + ly],
            gui.textColor(false),
            (label ? label + " " : "") + (fmt ? fmt(v) : v)
        )
    );
    if (focused && handleSlider1Keys(gui, min, max, prec, val, i)) {
        return true;
    }
    gui.lastID = id;
    return active;
};
