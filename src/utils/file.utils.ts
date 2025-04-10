import { str } from "@synstack/str";
import { type Xml, xml } from "@synstack/xml";
import { rootDir } from "../runtime/dirs.runtime.ts";

/**
 * - Used to parse the LLM response and extract the files
 *  - Extracts <file path="..." /> tags from the LLM response
 *  - Returns the extracted file formated into a JS object
 */
const extractFiles = (content: string) => {
  const parsedXml = xml.parse(content);
  return parsedXml
    .filter(
      (node): node is Xml.Node.Tag =>
        node.type === "tag" && node.tag === "file",
    )
    .map((n) => ({
      path: n.attrs!.path,
      content: str(xml.nodesToText(n.content)).dedent().trim().$,
    }));
};

/**
 * Writes the extracted files to the target folder
 */
const writeFiles = (filesData: Array<{ path: string; content: string }>) => {
  return Promise.all(
    filesData.map(async (file) => {
      const { path, content } = file;
      const outputFile = rootDir.file(path);
      await outputFile.write.text(content);
      return outputFile;
    }),
  );
};

/**
 * - Extracts the files from the LLM response using `<file>` tags
 * - Writes the files to the target folder
 * - Opens the written files in the editor
 *
 * _This method is prefered over using tool calling as a json structure
 * forces the LLM to escape every double quote, which often breaks on long
 * files and may impact the response's enthropy_
 */
export const writeResponseToFiles = async (response: string) => {
  const filesData = extractFiles(response);
  const writtenFiles = await writeFiles(filesData);
  return writtenFiles;
};
