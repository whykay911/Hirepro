const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user");
const Pro = require("./models/pro");

const app = express();

app.use(cors());
app.use(express.json());

const db = 'mongodb+srv://admin1:password1234@cluster0.5fkzixe.mongodb.net/HandyCleaners2';

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log('O boy ',err));

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  try {
    await user.save();
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
});

app.post("/prosignup", async (req, res) => {
  const { name, email, password, profession, description, hourly } = req.body;
  const pro = new Pro({ name, email, password, profession, description, hourly });
  try {
    await pro.save();
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
});

app.get('/professionals', async (req, res) => {
  try {
    const professionals = await Pro.find();
    res.json(professionals);
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
});


app.listen(3000, () => console.log("Server started"));
