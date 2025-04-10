# Typescript AI Playground

## Environment

- Check that you have node > 22 installed
- Run `corepack enable` if you haven't done so yet
- VSCode is recommended along recommended extensions

## Setup

```bash
git clone git@github.com:pAIrprogio/ts-ai-playground.git
cd ts-ai-playground
yarn install
touch .env
code .
```

## Running

- Make sure to add the following keys to the `.env` file:
  - `ANTHROPIC_API_KEY`
  - `OPENAI_API_KEY`
  - `GOOGLE_GENERATIVE_AI_API_KEY`
- The VSCode debugger is pre-configured to run the active file

## Local Data

- Local data is stored in the `.data` directory
- Local output is stored in the `.output` directory
- Access them easily with exports from the `src/dirs.runtime.ts` module

## Libraries

- [ai](https://github.com/vercel/ai): Vercel AI SDK
- [@ai-sdk/\*](https://sdk.vercel.ai/providers/ai-sdk-providers): Vercel AI SDK Providers
- [evalite](https://www.evalite.dev/): Evals as unit tests
- [@synstack/\*](https://github.com/pairprogio/synscript): LLM scripting utilities
- [ts-pattern](https://github.com/gvergnaud/ts-pattern): TypeScript pattern matching
- [zod](https://github.com/colinhacks/zod): TypeScript schema declaration and validation
