import type {Hooks} from "../core/constants/consts.ts";

export type DataHook = typeof Hooks[keyof typeof Hooks];