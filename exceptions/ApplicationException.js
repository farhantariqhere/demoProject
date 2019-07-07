const GenericException = require('./GenericException');

class ApplicationException extends GenericException {

  constructor (message, code = 400, meta = {}) {

    super(message, code, meta);

  }

}

module.exports = ApplicationException;
