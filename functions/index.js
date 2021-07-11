const functions = require("firebase-functions");
const admin = require("firebase-admin");
// const userRoutes = require("./routes/user");

const express = require("express");
const cors = require("cors");

const app = express();

const serviceAccount = require("./permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(cors({origin: true}));

app.get("/hello-world", (req, res) => {
  return res.status(200).json({message: "Hello World!"});
});

// Routes
app.use("/api/user", require("./routes/user"));
app.use("/api/point", require("./routes/point"));

exports.app = functions.https.onRequest(app);
