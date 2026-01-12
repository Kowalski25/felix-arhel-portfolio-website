# React-Starter
A simple and minimal React+Vite starter project to kick-start small projects. Should be easy enough to scale as well.

Includes QOL tooling to help speed up and add opinionated rigidity to the project structure.

This is still a work-in-progress template. I will be updating this as come across new ideas while working on projects.

## Tech Stack
- TypeScript
- React v19
- TanStack Router v1.146
- TanStack Query v5
- axios
- Vite
- Vitest
- vite-plugin-svgr
- plop
- biome
- React Compiler
- Rolldown

## Project Structure

The project structure is designed to be scalable and modular, with a focus on feature-based organization.

- `src/api`: API client and endpoints definitions.
- `src/assets`: Static assets like images and fonts.
- `src/components`: Shared UI components.
- `src/features`: Feature-specific modules containing components, hooks, types, and API logic.
- `src/libs`: Third-party library configurations and utilities.
- `src/routes`: Application routes defined using TanStack Router.
- `src/types`: Global type definitions.

## Using the included plop generators

This project includes `plop` generators to help you scaffold new components and features quickly and consistently.

### Run Plop

To start the plop generator, run:

```bash
yarn g <generator-name>
```

### Generators

#### Component

Scaffolds a reusable UI component.

- **Prompts:**
  - `Component Name`: The name of the component (e.g., `Button`, `Card`).
- **Outputs:**
  - `src/components/[Name]/[Name].tsx`: The component file.
  - `src/components/[Name]/[Name].test.tsx`: The test file.
  - `src/components/[Name]/[Name].module.css`: The CSS module file.
  - `src/components/[Name]/index.ts`: The barrel file.
  - Updates `src/components/index.ts` to export the new component.

#### Feature

Scaffolds a new feature module.

- **Prompts:**
  - `Feature Name`: The name of the feature (e.g., `auth`, `dashboard`).
  - `Has /api ?`: Whether to include an API directory.
  - `Has /components ?`: Whether to include a components directory.
  - `Has /hooks ?`: Whether to include a hooks directory.
  - `Has /types ?`: Whether to include a types directory.
- **Outputs:**
  - `src/features/[name]/index.ts`: The feature barrel file.
  - Optional subdirectories (`api`, `components`, `hooks`, `types`) with their respective barrel files.
  - Updates `src/features/index.ts` to export the new feature.

## Biome Configuration

This project uses Biome for linting and formatting. Below is a comprehensive list of enabled rules, their severity levels, and examples of code that triggers them.

### Complexity

| Rule | Level | Trigger Example |
| :--- | :--- | :--- |
| `noAdjacentSpacesInRegex` | error | `/foo  bar/` |
| `noArguments` | error | `function() { console.log(arguments); }` |
| `noBannedTypes` | error | `let a: String;` |
| `noExtraBooleanCast` | error | `if (!!true) {}` |
| `noUselessCatch` | error | `try { ... } catch (e) { throw e; }` |
| `noUselessEscapeInRegex` | error | `/\a/` |
| `noUselessThisAlias` | error | `const self = this;` |
| `noUselessTypeConstraint` | error | `interface Foo<T extends any> {}` |

### Correctness

| Rule | Level | Trigger Example |
| :--- | :--- | :--- |
| `noConstantCondition` | error | `if (true) {}` |
| `noEmptyCharacterClassInRegex` | error | `/[]/` |
| `noEmptyPattern` | error | `const {} = obj;` |
| `noNonoctalDecimalEscape` | error | `\8` |
| `noPrecisionLoss` | error | `12345678901234567890` |
| `noSelfAssign` | error | `a = a;` |
| `noSwitchDeclarations` | error | `switch (a) { case 1: let b = 2; }` |
| `noUnsafeFinally` | error | `try { return 1; } finally { return 2; }` |
| `noUnsafeOptionalChaining` | error | `(obj?.prop)()` |
| `noUnusedLabels` | error | `label: while (true) { break; }` |
| `noUnusedPrivateClassMembers` | error | `class A { #unused = 1; }` |
| `noUnusedVariables` | error | `const unused = 1;` |
| `useExhaustiveDependencies` | warn | `useEffect(() => { console.log(a); }, [])` |
| `useHookAtTopLevel` | error | `if (cond) { useEffect(...); }` |
| `useIsNan` | error | `if (a == NaN) {}` |
| `useValidForDirection` | error | `for (let i = 0; i < 10; i--) {}` |
| `useValidTypeof` | error | `typeof a === "undefned"` |
| `useYield` | error | `function* foo() { return 1; }` |

### Style

| Rule | Level | Trigger Example |
| :--- | :--- | :--- |
| `noCommonJs` | error | `module.exports = {};` |
| `noNamespace` | error | `namespace Foo {}` |
| `useArrayLiterals` | error | `const a = new Array();` |
| `useAsConstAssertion` | error | `let a = "a" as const;` |
| `useComponentExportOnlyModules` | error | `export const foo = 1;` (in component file) |
| `useConst` | error | `let a = 1; console.log(a);` |

### Suspicious

| Rule | Level | Trigger Example |
| :--- | :--- | :--- |
| `noAssignInExpressions` | error | `if (a = b) {}` |
| `noAsyncPromiseExecutor` | error | `new Promise(async (resolve) => {})` |
| `noCatchAssign` | error | `try {} catch (e) { e = 1; }` |
| `noCompareNegZero` | error | `if (x === -0) {}` |
| `noConstantBinaryExpressions` | error | `if (a + 0 === a) {}` |
| `noControlCharactersInRegex` | error | `/\x1f/` |
| `noDebugger` | error | `debugger;` |
| `noDuplicateCase` | error | `switch (a) { case 1: break; case 1: break; }` |
| `noDuplicateElseIf` | error | `if (a) {} else if (a) {}` |
| `noEmptyBlockStatements` | error | `if (true) {}` |
| `noExplicitAny` | error | `const a: any = 1;` |
| `noExtraNonNullAssertion` | error | `a!!` |
| `noFallthroughSwitchClause` | error | `switch (a) { case 1: foo(); case 2: break; }` |
| `noGlobalAssign` | error | `window = {};` |
| `noIrregularWhitespace` | error | `\u000B` |
| `noMisleadingCharacterClass` | error | `/[a-z]+/` (with combining chars) |
| `noMisleadingInstantiator` | error | `interface I { new(): I; }` |
| `noNonNullAssertedOptionalChain` | error | `obj?.prop!` |
| `noPrototypeBuiltins` | error | `obj.hasOwnProperty('prop')` |
| `noShadowRestrictedNames` | error | `function undefined() {}` |
| `noSparseArray` | error | `[1,,2]` |
| `noTsIgnore` | error | `// @ts-ignore` |
| `noUnsafeDeclarationMerging` | error | `interface A {} class A {}` |
| `noUselessRegexBackrefs` | error | `/(a)\1/` |
| `noVar` | error | `var a = 1;` |
| `useNamespaceKeyword` | error | `module Foo {}` |
