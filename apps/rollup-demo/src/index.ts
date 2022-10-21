// shared is from another monorepo sub package
import { bark, meow } from "shared/animals";

// this is in the same project
import { quickMaths } from "./utils/math";

const main = () => {
  // these deps will get expanded into the final bundle
  bark();
  meow();

  // code in the main file
  console.log("Hello!");

  // importing something from the same module
  console.log(quickMaths());
};

main();
