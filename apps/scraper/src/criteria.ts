import fs from "node:fs/promises";

const items = await fs.readdir("src/criteria");

for (const item of items) {
  const content = await fs.readFile(`src/criteria/${item}`, "utf-8");
  const lines = content.split("\n");

  const title = lines[0];
  const courses = lines.slice(1).map((l) => l.split(" ")[0]);

  console.log(`title = "${title}"`);
  console.log(`courses = [${courses.map((c) => `"${c}"`).join(", ")}]\n`);
}
