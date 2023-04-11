# Minimal Typescript to build native ESM example

The goal of this is to combine the modern things of node.js in single project:
ESM module system and Typescript.

Note that at this moment, the CommonJS module system is still the default target
for Typescript https://www.typescriptlang.org/tsconfig#module _'...You very
likely want "CommonJS" for node projects'_. Indeed it is reasonable to proceed
with CommonJS for libraries for better compatibility. However for applications,
ESM should be fine.

The key settings of 'tsconfig.json' is:

```json
{
  "complilerOptions": {
    "module": "NodeNext"
  }
}
```

## unit tests

The unit tests require some additional attention. The folder is excluded in
'tsconfig.json'. They also need `node --loader=ts-node/esm` to run properly.
Without this seeting it throws
`TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts"`. See
`package.json` for detailed configuration. There are bothe node-tap and mocha
tests.

## resources

https://www.typescriptlang.org/docs/handbook/esm-node.html
https://2ality.com/2021/06/typescript-esm-nodejs.html
https://stackoverflow.com/questions/71463698/why-we-need-nodenext-typescript-compiler-option-when-we-have-esnext

Typescript suggested node.js v 18 tsconfig.json uses CommonJS. Leavign here for
reference: https://github.com/tsconfig/bases/blob/main/bases/node18.json
