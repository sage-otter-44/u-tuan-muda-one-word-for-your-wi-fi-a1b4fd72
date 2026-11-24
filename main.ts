import * as fs from "fs";
import * as path from "path";

const word = "Ghosting";
const entry = word.trim();

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, entry);
console.log("Wrote entry:", entry);
