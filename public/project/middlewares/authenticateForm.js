module.exports = (req, res, next) => {
  if (!req.session.form) {
    res.send("You're not allowed to view this content! please register now first!");
    return;
  }
  //else continue
  next();
};