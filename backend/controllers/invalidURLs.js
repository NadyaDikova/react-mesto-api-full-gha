const NotFoundError = require('../utils/errors/NotFoundError');

function getInvalidURL(req, res, next) {
  next(new NotFoundError('Запрашиваемый адрес не найден. Проверьте URL и метод запроса'));
}

module.exports = { getInvalidURL };
