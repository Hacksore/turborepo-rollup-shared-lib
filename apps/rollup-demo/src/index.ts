// shared is from another monorepo sub package
import { bark, meow } from "shared/animals";
import { CLASSIC_EXPORT } from "shared/module/classic";

// this is trying to remain as an import in dist'd build 🤔
import { TEST_FROM_ROOT, lmao } from "shared";

// this is in the same project
import { quickMaths } from "./utils/math";

const main = () => {
  // these deps will get expanded into the final bundle
  bark();
  meow();
  lmao();
  
  console.log(TEST_FROM_ROOT);
  console.log(CLASSIC_EXPORT);

  // code in the main file
  console.log("Hello!");

  // importing something from the same module
  console.log(quickMaths());
};

main();
