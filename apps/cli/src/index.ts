import { select } from "@inquirer/prompts";
import { seedDatabase } from "./seed-database";

enum Action {
  SEED_DATABASE = "Seed Database",
  RESET_DATABASE = "Reset Database",
}

async function main() {
  const action = await select({
    message: "Select action",
    choices: Object.values(Action).map((action) => ({
      name: action,
      value: action,
    })),
  });

  switch (action) {
    case Action.SEED_DATABASE:
      await seedDatabase();
      break;
    case Action.RESET_DATABASE:
      console.log("This action is a no-op");
      break;
  }
}

main()
  .then(() => console.log("Program complete"))
  .catch((err) => {
    console.error(err);
  });
