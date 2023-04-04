import { div, inputColor, inputNumber } from "@thi.ng/hiccup-html";
import { fromView } from "@thi.ng/rstream";
import { DITHER_MODES, THEME, type DitherMode, type ImageParam } from "../api";
import { DB } from "../state/atom";
import { setCanvasBackground } from "../state/canvas";
import {
	loadImage,
	rotateImage,
	setImageDither,
	setImageParam,
} from "../state/image";
import { button, dropdown, fileButton } from "./form";

const param = (
	id: Exclude<ImageParam, "buf" | "dither">,
	min: number,
	max: number,
	step = 0.05
) =>
	inputNumber({
		class: THEME.sideBar.imageParam,
		min,
		max,
		step,
		placeholder: id,
		value: fromView(DB, { path: ["img", id] }),
		onchange: (e) => setImageParam(id, (<HTMLInputElement>e.target).value),
	});

export const imageControls = div(
	{},
	fileButton(
		{
			accept: [
				"image/jpeg",
				"image/png",
				"image/gif",
				"image/webp",
				"image/x-portable-bitmap",
				"image/x-portable-pixmap",
				"image/x-portable-graymap",
			],
			onchange: (e) => loadImage((<HTMLInputElement>e.target).files![0]),
		},
		THEME.fileButton.large,
		"Load image"
	),
	div(
		{ class: THEME.sideBar.section },
		div(
			{ class: THEME.sideBar.control },
			button("col2", () => rotateImage(-1), "-90°"),
			button("col2", () => rotateImage(1), "+90°")
		),
		param("scale", 0.1, 2),
		param("gamma", 0.1, 4),
		param("low", -1, 1),
		param("high", 0, 2),
		dropdown(Object.keys(DITHER_MODES), ["img", "dither"], (x) =>
			setImageDither(<DitherMode>x)
		),
		inputColor({
			class: THEME.sideBar.control,
			value: fromView(DB, { path: ["canvas", "bg"] }),
			oninput: (e) =>
				setCanvasBackground((<HTMLSelectElement>e.target).value),
		})
	)
);