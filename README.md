# Minimal Typescript to build native ESM example

The goal of this is to combine the modern things of node.js in single project:
ESM module system and Typescript.

The key setting of 'tsconfig.json':

```json
{
  "complilerOptions": {
    "module": "NodeNext"
  }
}
```

the 'package.json':

```json
{
  "type": "module"
}
```

## recommendations

- https://www.totaltypescript.com/typescript-and-node
- https://www.totaltypescript.com/tsconfig-cheat-sheet

## ts-node considerations

[ts-node](https://github.com/TypeStrong/ts-node) seems to be stalled without
updates and bugfixes. E.g. annoying bug
[2100](https://github.com/TypeStrong/ts-node/issues/2100) still open. There is
better way to run the code:

- use of `tsc --watch` which compiles the TypeScript code to JavaScript in
  real-time
- Node.js’s own experimental support for TypeScript via flags like
  --experimental-strip-types (introduced in Node.js 20+).
- plenty of other less recommended, but still viable options 'tsimp', 'tsx', ...

## resources

note: some of them might be partially outdated

- https://www.typescriptlang.org/docs/handbook/esm-node.html
- https://typestrong.org/ts-node/docs/imports#native-ecmascript-modules
- https://2ality.com/2021/06/typescript-esm-nodejs.html
- https://stackoverflow.com/questions/71463698/why-we-need-nodenext-typescript-compiler-option-when-we-have-esnext
