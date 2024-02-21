import type { Keys } from "@thi.ng/api";
import type {
	AvifOptions,
	Blend,
	Exif,
	ExtendWith,
	FitEnum,
	GifOptions,
	Jp2Options,
	JpegOptions,
	JxlOptions,
	KernelEnum,
	PngOptions,
	TiffOptions,
	TileOptions,
	WebpOptions,
} from "sharp";

export type Gravity = "c" | "e" | "n" | "ne" | "nw" | "s" | "se" | "sw" | "w";

export type DitherMode =
	| "atkinson"
	| "burkes"
	| "column"
	| "diffusion"
	| "floyd"
	| "jarvis"
	| "row"
	| "sierra"
	| "stucki"
	| "bayer";

export type Dim = [number, number];

export type Size = number | Dim;

export type Sides = [number, number, number, number];

export type SizeRef = "min" | "max" | "w" | "h";

export type SizeUnit = "px" | "%";

export type Color =
	| string
	| number[]
	| { r: number; g: number; b: number; alpha?: number };

export interface Position {
	l?: number;
	r?: number;
	t?: number;
	b?: number;
}

export interface ProcSpec {
	type: string;
}

export interface BlurSpec extends ProcSpec {
	type: "blur";
	radius: number;
}

export interface CompSpec extends ProcSpec {
	type: "composite";
	layers: CompLayer[];
}

export type CompLayer = ImgLayer | SVGLayer;

export interface CompLayerBase {
	type: string;
	blend?: Blend;
	gravity?: Gravity;
	pos?: Position;
	tile?: boolean;
	unit?: SizeUnit;
}

export interface ImgLayer extends CompLayerBase {
	path: string;
	size?: Size;
	unit?: SizeUnit;
}

export interface SVGLayer extends CompLayerBase {
	type: "svg";
	body: string;
	path: string;
}

export interface CropSpec extends ProcSpec {
	type: "crop";
	border?: Size | Sides;
	gravity?: Gravity;
	pos?: Position;
	ref?: SizeRef;
	size?: Size;
	unit?: SizeUnit;
}

export interface DitherSpec extends ProcSpec {
	type: "dither";
	mode: DitherMode;
	num: number;
	rgb?: boolean;
	size: 2 | 4 | 8;
}

export interface EXIFSpec extends ProcSpec {
	type: "exif";
	tags: Exif;
}

export interface ExtendSpec extends ProcSpec {
	type: "extend";
	bg?: Color;
	border: Size | Sides;
	mode?: ExtendWith;
	ref?: SizeRef;
	unit?: SizeUnit;
}

export interface GammaSpec extends ProcSpec {
	type: "gamma";
	gamma: number;
}

export interface GrayscaleSpec extends ProcSpec {
	type: "gray";
	gamma?: number | boolean;
}

export interface HSBLSpec extends ProcSpec {
	type: "hsbl";
	h?: number;
	s?: number;
	b?: number;
	l?: number;
}

export interface NestSpec extends ProcSpec {
	type: "nest";
	procs: ProcSpec[];
}

export interface OutputSpec extends ProcSpec {
	type: "output";
	path: string;
	avif?: AvifOptions;
	gif?: GifOptions;
	jp2?: Jp2Options;
	jpeg?: JpegOptions;
	jxl?: JxlOptions;
	png?: PngOptions;
	raw?:
		| boolean
		| {
				/**
				 * If true, ensures the buffer has an alpha channel
				 */
				alpha?: boolean;
				/**
				 * If true, writes a secondary file with this buffer's metadata (in
				 * the same dir, using `.meta.json` as suffix)
				 */
				meta?: boolean;
		  };
	tile?: TileOptions;
	tiff?: TiffOptions;
	webp?: WebpOptions;
}

export interface ResizeSpec extends ProcSpec {
	type: "resize";
	bg?: Color;
	filter?: Keys<KernelEnum>;
	fit?: Keys<FitEnum>;
	gravity?: Gravity;
	size: Size;
	unit?: SizeUnit;
}

export interface RotateSpec extends ProcSpec {
	type: "rotate";
	angle?: number;
	bg: Color;
	flipX?: boolean;
	flipY?: boolean;
}