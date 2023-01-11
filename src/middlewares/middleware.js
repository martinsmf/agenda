exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da variável local'
  if (req.body.cliente) {
    req.body.cliente = req.body.cliente.replace('Martins', 'Não use Martins')
    console.log();
    console.log(`Vi que você postou ${req.body.cliente}`);
    console.log();
  }
  next();
}

exports.outroMiddleware = (req, res, next) => {
  console.log('Sou seu outro middleware');
  next();
}

exports.checkCsrfError = (err, req, res, next) => {
  if (err) {
    // return res.send('BAD csrf');
    return res.render('404');
  }
  next();
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
}