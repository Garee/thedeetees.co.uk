import fs from "fs";
import path from "path";

const audioDirectory = path.join(process.cwd(), "public/audio");

export interface Track {
  src: string;
  label: string;
}

export function getAllAudioSrc(): Track[] {
  const fileNames: string[] = fs.readdirSync(audioDirectory);
  return fileNames.map((fileName) => {
    const words = fileName.split(".")[0].split("-");
    const label = words.join(" ");
    return {
      src: `/audio/${fileName}`,
      label,
    };
  });
}
