const fn = Deno.args[0];
if (!fn) {
  console.log("dump [fn]");
  Deno.exit(1);
}
const bin = await Deno.readFile(fn);
for (let idx = 0; idx < bin.length; idx += 16) {
  const hex = [];
  const ch = [];
  for (let i = 0; i < 16; i++) {
    const n = bin[idx + i];
    if (n !== undefined) {
      hex.push((n < 16 ? "0" : "") + n.toString(16));
      ch.push(n >= 32 && n < 128 ? String.fromCharCode(n) : ".");
    } else {
      hex.push("  ");
      ch.push(" ");
    }
  }
  const ad0 = idx.toString(16);
  const ad = "0".repeat(8 - ad0.length) + ad0;
  console.log(ad + "  " + hex.join(" ") + "  " + ch.join(""));
}
