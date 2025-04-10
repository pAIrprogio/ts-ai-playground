import { systemMsg, userMsg } from "@synstack/llm";
import { rootDir } from "../../runtime/dirs.runtime.ts";

export const teardownPrompt = () => [
  systemMsg`
    Explain this project in details.
    Read any file necessary to understand the project.
  `,
  userMsg`
    # Context

    ## Project Files
    ${rootDir.gitLs().then((files) => files.map((f) => "- " + f.path).join("\n"))}
  `,
];
