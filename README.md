# @thi.ng/umbrella

Mono-repository for thi.ng TypeScript/ES6 projects.

## Projects

| Projects | Version | |
|----|----|----|
| [`@thi.ng/api`](./packages/api) | [![npm (scoped)](https://img.shields.io/npm/v/@thi.ng/api.svg)](https://www.npmjs.com/package/@thi.ng/api) | [changelog](./packages/api/CHANGELOG.md) |
| [`@thi.ng/atom`](./packages/atom) | [![npm (scoped)](https://img.shields.io/npm/v/@thi.ng/atom.svg)](https://www.npmjs.com/package/@thi.ng/atom) | [changelog](./packages/atom/CHANGELOG.md) |
| [`@thi.ng/bitstream`](./packages/bitstream) | [![npm (scoped)](https://img.shields.io/npm/v/@thi.ng/bitstream.svg)](https://www.npmjs.com/package/@thi.ng/bitstream) | [changelog](./packages/bitstream/CHANGELOG.md) |
| [`@thi.ng/checks`](./packages/checks) | [![npm (scoped)](https://img.shields.io/npm/v/@thi.ng/checks.svg)](https://www.npmjs.com/package/@thi.ng/checks) | [changelog](./packages/checks/CHANGELOG.md) |
| [`@thi.ng/csp`](./packages/csp) | [![npm (scoped)](https://img.shields.io/npm/v/@thi.ng/csp.svg)](https://www.npmjs.com/package/@thi.ng/csp) | [changelog](./packages/csp/CHANGELOG.md) |
| [`@thi.ng/dcons`](./packages/dcons) | [![npm (scoped)](https://img.shields.io/npm/v/@thi.ng/dcons.svg)](https://www.npmjs.com/package/@thi.ng/dcons) | [changelog](./packages/dcons/CHANGELOG.md) |
| [`@thi.ng/hiccup`](./packages/hiccup) | [![npm (scoped)](https://img.shields.io/npm/v/@thi.ng/hiccup.svg)](https://www.npmjs.com/package/@thi.ng/hiccup) | [changelog](./packages/hiccup/CHANGELOG.md) |
| [`@thi.ng/iterators`](./packages/iterators) | [![npm (scoped)](https://img.shields.io/npm/v/@thi.ng/iterators.svg)](https://www.npmjs.com/package/@thi.ng/iterators) | [changelog](./packages/iterators/CHANGELOG.md) |
| [`@thi.ng/rle-pack`](./packages/rle-pack) | [![npm (scoped)](https://img.shields.io/npm/v/@thi.ng/rle-pack.svg)](https://www.npmjs.com/package/@thi.ng/rle-pack) | [changelog](./packages/rle-pack/CHANGELOG.md) |
| [`@thi.ng/rstream`](./packages/rstream) | [![npm (scoped)](https://img.shields.io/npm/v/@thi.ng/rstream.svg)](https://www.npmjs.com/package/@thi.ng/rstream) | [changelog](./packages/rstream/CHANGELOG.md) |
| [`@thi.ng/rstream-csp`](./packages/rstream-csp) | [![npm (scoped)](https://img.shields.io/npm/v/@thi.ng/rstream-csp.svg)](https://www.npmjs.com/package/@thi.ng/rstream-csp) | [changelog](./packages/rstream-csp/CHANGELOG.md) |
| [`@thi.ng/rstream-log`](./packages/rstream-log) | [![npm (scoped)](https://img.shields.io/npm/v/@thi.ng/rstream-log.svg)](https://www.npmjs.com/package/@thi.ng/rstream-log) | [changelog](./packages/rstream-log/CHANGELOG.md) |
| [`@thi.ng/transducers`](./packages/transducers) | [![npm (scoped)](https://img.shields.io/npm/v/@thi.ng/transducers.svg)](https://www.npmjs.com/package/@thi.ng/transducers) | [changelog](./packages/transducers/CHANGELOG.md) |
| [`@thi.ng/unionstruct`](./packages/unionstruct) | [![npm (scoped)](https://img.shields.io/npm/v/@thi.ng/unionstruct.svg)](https://www.npmjs.com/package/@thi.ng/unionstruct) | [changelog](./packages/unionstruct/CHANGELOG.md) |

## Dependency graph

![internal dependencies](./assets/deps.png)

## Building

```
git clone https://github.com/thi-ng/umbrella.git
cd umbrella
yarn install
lerna bootstrap
lerna exec yarn build --sort
```

### Testing

(not all packages have tests yet)

```
lerna exec yarn test
# or individually
lerna exec yarn test --scope @thi.ng/checks
```
