const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./Server/api/module/users/user.router");
const playerRouter = require("./Server/api/module/players/player.router");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config");
const authRouter = require("./Server/api/module/auth/auth.router");
const teamRouter = require("./Server/api/module/teams/team.router");

mongoose.connect(config.mongoConnectionString);

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/", express.static("front-end"));
app.use("/highlight", express.static("highlight"));
app.use("/playerInfo", express.static("playerInfo"));
app.use("/logo-image", express.static("logo-image"));
app.use("/api/player", playerRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/team", teamRouter);

app.listen(port, function() {
  console.log(`Server listening in` + port);
});
