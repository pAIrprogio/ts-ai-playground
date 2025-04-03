import { t } from "@synstack/text";
import remarkParse from "remark-parse";
import { unified } from "unified";

const processor = unified().use(remarkParse);

const unendedCodeBlock = t`
  \`\`\`typescript
  const a = 1;
`;

// Works
console.dir(processor.parse(unendedCodeBlock), { depth: null });

const xmlTag = t`
  # xmlTag
  <div>xmlTag</div>
`;

// Outputs as "html" type
console.dir(processor.parse(xmlTag), { depth: null });

const unendedXmlTag = t`
  # unendedXmlTag
  <div>unendedXmlTag
`;

// Outputs as "html" type
console.dir(processor.parse(unendedXmlTag), { depth: null });

const unclosedXmlTag = t`
  # partialAttribute
  <div class="partialAttribute"
`;

// Outputs as "html" type
console.dir(processor.parse(unclosedXmlTag), { depth: null });

const unfinishedXmlTag = t`
  # unfinishedXmlTag
  <di
`;

// Outputs as "paragraph" type
console.dir(processor.parse(unfinishedXmlTag), { depth: null });

const xmlBracket = "<";

// Outputs as "paragraph" type
console.dir(processor.parse(xmlBracket), { depth: null });
