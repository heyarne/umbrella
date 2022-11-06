/**
 * Generated by @thi.ng/wasm-api at 2022-10-30T21:19:20.649Z - DO NOT EDIT!
 */

// @ts-ignore possibly includes unused imports
import { MemorySlice, Pointer, WasmStringSlice, WasmTypeBase, WasmTypeConstructor } from "@thi.ng/wasm-api";

export enum TimerType {
	/**
	 * One-off execution in the future
	 */
	ONCE,
	/**
	 * Recurring execution at fixed interval
	 */
	INTERVAL,
	/**
	 * As soon as possible execution
	 */
	IMMEDIATE,
}