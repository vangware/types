<img alt="Vangware's Types" src="./logo.svg" height="128" />

![License][license-badge] ![NPM Version][npm-version-badge]
![Open Issues][open-issues-badge]

🏷️ [Vangware][vangware] shared types.

Collection of [TypeScript][typescript] types to use as a base for developing
other libraries.

## Usage

If you're on a Node environment, install `@vangware/types` as a dependency:

```bash
# If you use npm
npm install @vangware/types
# If you use pnpm
pnpm add @vangware/types
# If you use yarn
yarn add @vangware/types
```

And then, you can import it into your code:

```typescript
import type { Unary } from "@vangware/types";
```

If you're on a Deno environment, then you can use [esm.sh][esm.sh] to install
`@vangware/types`:

```typescript
import type { Unary } from "https://esm.sh/@vangware/types";
```

## Documentation

Documentation is available [HERE][documentation]. It is auto-generated with
[typedoc][typedoc] based on the JSDocs and the types in the source. It shouldn't
be necessary to read this. Code editors like [VS Code][vscode] integrate the
documentation in the UI.

## Changelog

Changelog can be found [HERE][changelog].

<!-- Reference -->

[changelog]: https://github.com/vangware/types/blob/main/CHANGELOG.md
[documentation]: https://types.vangware.com
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@vangware/types.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/types/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/types.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/@vangware/types
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/types.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/types/issues
[typedoc]: https://typedoc.org/
[typescript]: https://www.typescriptlang.org/
[vangware]: https://vangware.com
[vscode]: https://code.visualstudio.com/
