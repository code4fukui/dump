const bin = new Uint8Array(256);
for (let i = 0; i < bin.length; i++) {
  bin[i] = i;
}
await Deno.writeFile("test.bin", bin);
