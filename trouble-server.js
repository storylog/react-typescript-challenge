module.exports = (req, res, next) => {
  const randomNum = Math.floor(1 + Math.random() * 3);
  if (randomNum % 2 === 0) {
    return next();
  }
  return res.status(500).jsonp({
    error: 'this is error message',
  });
}