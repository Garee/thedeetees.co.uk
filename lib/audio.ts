import fs from "fs";
import matter from "gray-matter";
import path from "path";

const audioDirectory = path.join(process.cwd(), "tracks");

export interface Track {
  src: string;
  label: string;
}

export function getAllAudioSrc(): Track[] {
  const fileNames: string[] = fs.readdirSync(audioDirectory);
  return fileNames.map((fileName: string) => {
    const fullPath = path.join(audioDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const { name, file } = matterResult.data;
    return {
      src: file,
      label: name,
    };
  });
}
