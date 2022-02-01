import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import routes from "./api/routes";
import middlewares from "./api/middlewares";

dotenv.config();

const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.json()); // body-parse
app.use(helmet()); // secure with helmet
app.use(middlewares.cors); // cross-origin resources sharing policy
app.use(middlewares.rate_limit(10, 100)); // prevent brute force & ddos attack
app.use(middlewares.jwt); // secure the api with jwt token

// Route
app.use("/user", routes.user);
app.use("/task", routes.task);
app.use("/detail", routes.detail);
app.use("/news", routes.news);

app.get("/", (_, res) => {
  res.status(200).send("Ok");
});

app.listen(port, () => console.log(`Running on port ${port}`));
