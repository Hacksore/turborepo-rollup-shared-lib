import { bark, meow } from "shared/src/animals";
import { quickMaths } from "./utils/math";

const main = () => {
  // these deps will get expanded into the final bundle
  bark();
  meow();  

  // code in the main file
  console.log("Hello!")

  // importing something from the same module
  console.log(quickMaths());
}

main();