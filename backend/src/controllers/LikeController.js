const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    const { user } = req.headers;
    const { id } = req.params;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(id);

    if (!targetDev) {
      return res.status(400).json({ error: "Dev no exist!" });
    }

    if(targetDev.like.includes(loggedDev._id)) {
        console.log("DEU MATCH!");
    }

    loggedDev.like.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
  },
};
