import { defmulti } from "@thi.ng/defmulti";
import { resample as _resample, SamplingOpts } from "@thi.ng/geom-resample";
import {
    IShape,
    PCLike,
    Polygon,
    Polyline,
    Type
} from "../api";
import { dispatch } from "../internal/dispatch";
import { asPolygon } from "./as-polygon";

export const resample = defmulti<IShape, number | Partial<SamplingOpts>, IShape>(dispatch);

resample.addAll({

    [Type.CIRCLE]:
        ($, opts) => asPolygon($, opts),

    [Type.POLYGON]:
        ($: PCLike, opts) =>
            new Polygon(_resample($.points, opts, true, true), { ...$.attribs }),

    [Type.POLYLINE]:
        ($: PCLike, opts) =>
            new Polyline(_resample($.points, opts, false, true), { ...$.attribs }),

});

resample.isa(Type.ELLIPSE, Type.CIRCLE);
resample.isa(Type.LINE, Type.POLYLINE);
resample.isa(Type.QUAD, Type.POLYGON);
resample.isa(Type.TRIANGLE, Type.POLYGON);
resample.isa(Type.RECT, Type.CIRCLE);
