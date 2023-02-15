const bin = await Deno.readFile(Deno.args[0]);
const binary = [];
for (let idx = 0; idx < bin.length; idx++) {
  const n = bin[idx];
  const b0 = n.toString(2);
  const b = "0".repeat(8 - b0.length) + b0;
  binary.push(b);
}
console.log(binary.join(""));
