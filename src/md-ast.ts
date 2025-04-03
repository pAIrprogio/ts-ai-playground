import { t } from "@synstack/text";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";

const processor = unified().use(remarkParse).use(remarkGfm);

/* Unfinished code blocks */

const unendedCodeBlock = t`
  \`\`\`typescript
  const a = 1;
`;

// Works
console.log("unendedCodeBlock");
console.dir(processor.parse(unendedCodeBlock), { depth: null });

/* XML Tag */

const xmlTag = t`
  # xmlTag
  <div>xmlTag</div>
`;

// Outputs as "html" type
console.log("xmlTag");
console.dir(processor.parse(xmlTag), { depth: null });

/* Unended XML Tag */

const unendedXmlTag = t`
  # unendedXmlTag
  <div>unendedXmlTag
`;

// Outputs as "html" type
console.log("unendedXmlTag");
console.dir(processor.parse(unendedXmlTag), { depth: null });

/* Unclosed XML Tag */
const unclosedXmlTag = t`
  # partialAttribute
  <div class="partialAttribute"
`;

// Outputs as "html" type
console.log("unclosedXmlTag");
console.dir(processor.parse(unclosedXmlTag), { depth: null });

/* Unfinished XML Tag */

const unfinishedXmlTag = t`
  # unfinishedXmlTag
  <di
`;

// Outputs as "paragraph" type
console.log("unfinishedXmlTag");
console.dir(processor.parse(unfinishedXmlTag), { depth: null });

/* XML Bracket */
const xmlBracket = "<";

// Outputs as "paragraph" type
console.log("xmlBracket");
console.dir(processor.parse(xmlBracket), { depth: null });

/* Unfinished Table */
const unfinishedTable = t`
  # unfinishedTable

  | Column 1 | Column 2 |
  |---------|----------|
  | Row 1   | Row 2  
`;

// Outputs as "table" type
console.log("unfinishedTable");
console.dir(processor.parse(unfinishedTable), { depth: null });

console.dir(processor.parse("My <element/> is cool"));
