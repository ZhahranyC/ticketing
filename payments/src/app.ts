import { json } from "body-parser";
import cookieSession from "cookie-session";
import express from "express";
import "express-async-errors";
import { NotFoundError, currentUser, errorHandler } from "@zctickets/common";
import { createChargeRoute } from "./routes/new";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
  })
);

app.use(currentUser);
app.use(createChargeRoute);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
