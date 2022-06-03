import * as dotenv from "dotenv";

import app from "."

dotenv.config();

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log("Connected DB", process.env.DATABASE_URL);
  console.log(`${process.env.NODE_ENV} server started at http://localhost:${port}`)
})