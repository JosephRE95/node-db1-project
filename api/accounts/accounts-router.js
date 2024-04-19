const router = require("express").Router();
const md = require("./accounts-middleware");
const Account = require("./accounts-model");

router.get("/", async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accounts = await Account.getAll()
    res.json(accounts);
  } catch (err) {
    next({ status: 422, message: "this is bad" });
  }
});

router.get(
  "/:id",
  md.checkAccountId, async (req, res, next) => {
    // DO YOUR MAGIC
    res.json(req.account)
    // try {
    //   const data = await Account.getById(req.params.id)
    //   res.json(data)
    // } catch (err) {
    //   next(err);
    // }
  }
);

router.post(
  "/",
  md.checkAccountNameUnique,
  md.checkAccountPayload,
  async (req, res, next) => {
    // DO YOUR MAGIC
    try {
      // const account = await Account.create(req.body)
      // res.json(account);
    } catch (err) {
      next(err);
    }
  }
);

// router.post('/', checkPayload, async (req, res, next) => {
//   try {
//     const data = await Shipper.create(req.body)
//     res.json(data)
//   } catch (err) {
//     next(err)
//   }
// })

router.put("/:id", 
md.checkAccountId, 
md.checkAccountNameUnique,
md.checkAccountPayload, 
(req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("update account");
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", md.checkAccountPayload, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json("delete account");
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
