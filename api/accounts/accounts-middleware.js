const Account = require("./accounts-model");

exports.checkAccountPayload = (req, res, next) => {
  const error = { status: 400 };
  const { name, budget } = req.body;
  if (name === undefined || budget === undefined) {
    error.message = "name and budget are required"; //
  } else if (typeof name !== "string") {
    error.message = "name must be letters"; //
  } else if (name.trim().length < 3 || name.trim().length > 100) { //
    error.message = "name must be letters";
  } else if (typeof budget !== "number" || isNaN(budget)) {
    error.message = "budget must be a number";
  } else if (budget < 0 || budget > 1000000) {
    error.message = "budget of account is too large or too small";
  }

  if (error.message) {
    next(error);
  } else {
    next();
  }
};

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  console.log("checkingAccountPayload middleware");
  next();
};

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const account = await Account.getById(req.params.id);
    if (!account) {
      next({ status: 404, message: "not found" });
    } else {
      req.account = account;
      next();
    }
  } catch (err) {
    next(err);
  }
};

// try {
//   const account = await Account.getById(req.params.id)
//   res.json(account)
// } catch (err) {
//   next(err);
// }
