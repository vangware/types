<img id="logo" alt="Types by Vangware" src="./logo.svg" height="128" />

![License][license-badge] ![NPM Version][npm-version-badge]
![Open Issues][open-issues-badge]

🏷️ Collection of [TypeScript][typescript] types shared across
[Vangware][vangware] projects.

## Usage

### 📦 Node

Install `@vangware/types` as a dependency:

```bash
pnpm add @vangware/types
# or
npm install @vangware/types
# or
yarn add @vangware/types
```

Import as type and use it:

```typescript
import type { Unary } from "@vangware/types";
```

### 🦕 Deno

Import `@vangware/types` using the `npm:` prefix, and use it directly:

```typescript
import type { Unary } from "npm:@vangware/types";
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.

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
