const fn = Deno.args[0];
if (!fn) {
  console.log("dump15 [fn]");
  Deno.exit(1);
}
const bin = await Deno.readFile(fn);
const adr = 0x700;
const line = 100;
for (let idx = 0; idx < bin.length; idx += 16) {
  const hex = [];
  const ch = [];
  for (let i = 0; i < 16; i++) {
    const n = bin[idx + i];
    if (n !== undefined) {
      hex.push((n < 16 ? "#0" : "#") + n.toString(16));
      ch.push(n >= 32 && n < 128 ? String.fromCharCode(n) : ".");
    }
  }
  console.log(`${line + idx / 16 * 10} POKE#${(adr + idx).toString(16).toUpperCase()},${hex.join(",").toUpperCase()}`);
}
