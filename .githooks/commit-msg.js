const fs = require("fs");

const msgFile = process.argv[2];
if (!msgFile) {
  process.exit(0);
}

const contributorTrailer =
  /^(Co-authored-by|Signed-off-by|Reviewed-by|Thanks-to|Helped-by):/i;

let message = fs.readFileSync(msgFile, "utf8");
const lines = message.split(/\r?\n/);
const cleaned = lines.filter((line) => !contributorTrailer.test(line.trim()));

while (cleaned.length > 0 && cleaned[cleaned.length - 1] === "") {
  cleaned.pop();
}

fs.writeFileSync(
  msgFile,
  cleaned.length === 0 ? "" : `${cleaned.join("\n")}\n`,
  "utf8",
);
