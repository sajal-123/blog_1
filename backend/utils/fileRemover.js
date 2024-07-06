import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

// Getting __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileRemover = (filename) => {
  // Ensure filename is not empty
  if (!filename) {
    console.error("No filename provided");
    return;
  }

  const filePath = path.join(__dirname, "../uploads", filename);

  // Check if file exists before attempting to remove it
  if (fs.existsSync(filePath)) {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Error occurred while trying to remove file "${filename}": ${err.message}`);
      } else {
        console.log(`Removed "${filename}" successfully.`);
      }
    });
  } else {
    console.log(`File "${filename}" doesn't exist.`);
  }
};

export { fileRemover };
