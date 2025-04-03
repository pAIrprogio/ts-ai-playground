import remarkParse from "remark-parse";
import { unified } from "unified";

const processor = unified().use(remarkParse);

const ast = processor.parse("# Hello World");

console.dir(ast, { depth: null });
