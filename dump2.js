const fn = Deno.args[0];
if (!fn) {
  console.log("dump2 [fn]");
  Deno.exit(1);
}
const bin = await Deno.readFile(fn);
for (let idx = 0; idx < bin.length; idx += 8) {
  const binary = [];
  for (let i = 0; i < 8; i++) {
    const n = bin[idx + i];
    if (n !== undefined) {
      const b0 = n.toString(2);
      const b = "0".repeat(8 - b0.length) + b0;
      binary.push(b);
    }
  }
  console.log(binary.join(" "));
}
