import { google } from "@ai-sdk/google";
import { completion } from "@synstack/llm";
import { includeAssistantMessage } from "@synstack/llm/middleware";

export const model = google("gemini-2.0-flash-exp");

export const baseCompletion = completion
  .model(model)
  .middlewares([includeAssistantMessage])
  .maxRetries(3)
  .maxSteps(10);
