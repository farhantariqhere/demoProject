const {
  cLog,
  config
} = require('./helpers');

const expressApp = require('./routes/index');

expressApp.listen(config.port, (err) => {

  if (err) {

    cLog.error('Could not start server at port:: ', config.port, err);

    throw err;

  } else {

    cLog.success(`Server is listening at port:: `, config.port);

  }

});

module.exports = expressApp;
