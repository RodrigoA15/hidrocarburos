import app from "./app.js";

const PORT = 4500;

async function main() {
  try {
    console.log("Database initialized");
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

main();
