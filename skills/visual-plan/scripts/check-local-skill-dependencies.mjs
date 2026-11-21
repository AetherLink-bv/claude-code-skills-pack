import { access, readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const skillDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = dirname(skillDir);
const skill = await readFile(join(skillDir, "SKILL.md"), "utf8");
const slashSkillPattern = /(?:^|[\s("'`])\/([a-z][a-z0-9-]*)(?=[\s,;:.)"'`]|$)/gm;
const requiredSkills = [...new Set([...skill.matchAll(slashSkillPattern)].map((match) => match[1]))];
const missing = [];

for (const name of requiredSkills) {
  try {
    await access(join(skillsDir, name, "SKILL.md"));
  } catch {
    missing.push(name);
  }
}

if (missing.length > 0) {
  throw new Error(`Unbundled required slash skill reference(s): ${missing.map((name) => `/${name}`).join(", ")}`);
}

console.log(`PASS visual-plan: ${requiredSkills.length} required slash skill reference(s) resolve locally.`);
