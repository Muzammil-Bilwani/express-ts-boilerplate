import express from "express";
import bodyParser from "body-parser";
import Routes from "./routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("json spaces", 2);
app.use(Routes);

export default app;
