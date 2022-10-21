# turborepo-rollup-shared-lib

The goals is to have nice imports from shared and be able to bundle them into the `apps/rollup-demo` app.

```ts
// all things from the animals entrypoint
import { bark, meow } from "shared/animals";
```

```ts
// access the module entrypoint
import { CLASSIC_EXPORT } from "shared/module/classic";
```