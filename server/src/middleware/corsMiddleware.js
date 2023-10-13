exports.corsMiddleware = (req, res, next) => {
  const accessList = ['http://localhost:5173', 'http://localhost:3000'];

  const origin = req.get('origin');

  if (accessList.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type');
  }
  next();
};
