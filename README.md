# turborepo-rollup-shared-lib

The goals is to have nice imports from shared and be able to bundle them into the `apps/rollup-demo` app.

```ts
// shared is from another monorepo sub package
import { bark } from "@acme/shared/animals";

// shared from module
import { CLASSIC_EXPORT } from "@acme/shared/module";

// shared index
import { TEST_FROM_ROOT } from "@acme/shared";

const main = () => {
  bark();

  console.log(CLASSIC_EXPORT);
};

main();
```
