import app from "./app.js";

const PORT = 4500;

async function main() {
  try {
    console.log("Database initialized");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

main();
