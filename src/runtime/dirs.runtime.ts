import { dir } from "@synstack/fs";

export const srcDir = dir(import.meta.dirname);
export const rootDir = srcDir.to("../..");
export const dataDir = rootDir.to(".data");
export const outputDir = rootDir.to(".output");
export const cacheDir = rootDir.to(".cache");
