const router = require("express").Router();
const md = require("./accounts-middleware");
const Account = require("./accounts-model");

router.get("/", async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accounts = await Account.getAll();
    res.json(accounts);
  } catch (err) {
    next({ status: 422, message: "this is bad" });
  }
});

router.get("/:id", md.checkAccountId, async (req, res, next) => {
  res.json(req.account);
  // try {
  //   const data = await Account.getById(req.params.id)
  //   res.json(data)
  // } catch (err) {
  //   next(err);
  // }
});

router.post(
  "/",
  md.checkAccountNameUnique,
  md.checkAccountPayload,
  async (req, res, next) => {
    // DO YOUR MAGIC
    try {
      const NewAccount = await Account.create({
        name: req.body.name.trim(),
        budget: req.body.budget,
      });
      res.status(201).json(NewAccount);
    } catch (err) {
      next(err);
    }
  }
);





router.put(
  "/:id",
  md.checkAccountId,
  md.checkAccountPayload,
  async (req, res, next) => {
    try {
      const data = await Account.updateById(req.params.id, req.body)
      res.json(data)
    } catch (err) {
      next(err);
    }
  }
);



router.delete("/:id", md.checkAccountPayload, async (req, res, next) => {
  try {
    await Account.deleteById(req.params.id);
    res.json(req.account);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
