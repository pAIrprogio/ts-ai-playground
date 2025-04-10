import { outputDir } from "./runtime/dirs.runtime.ts";
import { baseCompletion } from "./runtime/llm.runtime.ts";
import { logObjectDump } from "./utils/debug.utils.ts";
import { teardownPrompt } from "./workflows/project-teardown/project-teardown.prompt.ts";

const prompt = teardownPrompt();
await logObjectDump("Prompt ", "teardown-prompt", prompt);
console.log("Running teardown...");
const result = await baseCompletion.messages(prompt).generateText();
await logObjectDump("Result ", "teardown-result", result.text);
await outputDir.file("teardown.md").write.text(result.text);
