# dump in JavaScript/Deno

- hex dump program [dump.js](dump.js) in JavaScript for [Deno](https://deno.land)
- binary dump program ([dump2.js](dump2.js) / [dump01.js](dump01.js))
- dump program for IchigoJam ([dump15.js](dump15.js))

## Usage

```sh
deno run --allow-read https://code4fukui.github.io/dump/dump.js test.bin
```
or
```sh
deno run -A https://code4fukui.github.io/dump/dump.js test.bin
```

## Install

```sh
deno install --global --allow-read https://code4fukui.github.io/dump/dump.js
```
or
```sh
git clone https://github.com/code4fukui/dump.git
cd dump
deno install --global --allow-read dump.js
```

## Uninstall

```sh
deno uninstall dump
```
