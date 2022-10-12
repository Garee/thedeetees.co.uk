import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface Show {
  venue: string;
  date: string;
  link: string;
  location: string;
}

const showsDirectory = path.join(process.cwd(), "shows");

export function getAllShows(): Show[] {
  const fileNames: string[] = fs.readdirSync(showsDirectory);
  return fileNames
    .filter((name) => name !== ".gitkeep")
    .map((fileName) => getShow(fileName));
}

export function getShow(fileName: string): Show {
  const fullPath = path.join(showsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const { venue, date, link, location } = matterResult.data;
  return {
    venue,
    date: date.toISOString(),
    link,
    location,
  };
}
