import { dir } from "@synstack/fs";
import { tmpdir } from "os";
import { match, P } from "ts-pattern";

export async function logObjectDump(
  message: string,
  key: string,
  object: unknown,
) {
  const data = await match(object)
    // If the object is an array, resolve all the promises
    .with(P.array(), (object) => Promise.all(object))
    // Otherwise, return the object
    .otherwise((object) => object);
  const tmpFile = dir(tmpdir()).file(`${key}.yml`);
  await tmpFile.write.yaml(data);
  console.log(message + tmpFile.path);
  return tmpFile;
}
