const express = require("express");
const router = express.Router();
const Fund = require("../models/fund");

//gettin all funds
router.get("/", async (req, res) => {
  try {
    const funds = await Fund.find();
    res.json(funds);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// getting one
router.get("/:id", getFund, (req, res) => {
  res.json(res.fund);
});

// creating one
router.post("/", async (req, res) => {
  const fund = new Fund({
    fundName: req.body.fundName,
    amtInvested: req.body.amtInvested,
    code: req.body.code,
  });
  try {
    const newFund = await fund.save();
    res.status(201).json(newFund);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// updating one
router.patch("/:id", getFund, async (req, res) => {
  if (req.body.fundName != null) {
    res.fund.fundName = req.body.fundName;
  }
  try {
    const updatedFund = await res.fund.save();
    res.json(updatedFund);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// deleting one
router.delete("/:id", getFund, async (req, res) => {
  try {
    await res.fund.remove();
    res.json({ message: "Deleted Subsriber" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getFund(req, res, next) {
  let fund;
  try {
    fund = await Fund.findById(req.params.id);
    if (fund === null) {
      return res.status(400).json({ message: "Cannot find subcriber" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.fund = fund;
  next();
}

module.exports = router;
