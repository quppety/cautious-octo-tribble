exports.corsMiddleware = (req, res, next) => {
  const accessList = ['http://localhost:5173', 'http://localhost:3000'];
  // console.log(req.get('origin'));
  const origin = req.get('origin');
  console.log('request origin =======>', origin);
  // Доступ для всех сайтов открыт
  // res.header('Access-Control-Allow-Origin', '*');
  if (accessList.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type');
  }
  next();
};
