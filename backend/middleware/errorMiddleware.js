export const errorHandler = (err, req, res, next) => {
  const resStatus = req.statusCode === 200 ? 400 : res.statusCode;
  res.status(resStatus);

  res.json({
    message: err.message,
  });
  next();
};
