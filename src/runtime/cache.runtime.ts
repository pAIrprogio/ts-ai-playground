import { fsCache } from "@synstack/fs-cache";
import { cacheDir } from "./dirs.runtime.ts";

export const cache = fsCache(cacheDir);
