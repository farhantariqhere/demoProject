const {
  database,
  cLog
} = require('../../helpers');

class CarHandler {

  static listAllCarsOfUser (email) {

    const sql = `SELECT * FROM tests WHERE email = ?`;

    return new Promise((resolve, reject) => {

      database.query(sql, [email], (err, results) => {

        if (err) {

          reject(err);

        } else {

          resolve(results);

        }

      });

    });

  }

  static getOneCar (id) {

    const sql = `SELECT * FROM tests WHERE id = ${id}`;

    return new Promise((resolve, reject) => {

      database.query(sql, (err, result) => {

        if (err) {

          reject(err);

        } else {

          resolve(result);

        }

      });

    });

  }

  static createCar (data) {

    const post = { email: data.email, name: data.name, color: data.color };

    const sql = 'INSERT INTO tests SET ?';

    return new Promise((resolve, reject) => {

      database.query(sql, post, (err, result) => {

        if (err) {

          reject(err);

        } else {

          resolve(result);

        }

      });

    });

  }

  static updateCar (id, data) {

    const sql = `UPDATE tests SET name = '${data.name}' , color = '${data.color}' WHERE id = ${id}`;

    cLog.warn('Update car query:: ', sql);

    return new Promise((resolve, reject) => {

      database.query(sql, (err, result) => {

        if (err) {

          reject(err);

        } else {

          resolve(result);

        }

      });

    });

  }

  static deleteCar (id) {

    const sql = `DELETE FROM tests WHERE id = ${id}`;

    return new Promise((resolve, reject) => {

      database.query(sql, (err, result) => {

        if (err) {

          reject(err);

        } else {

          resolve(result);

        }

      });

    });

  }

}

module.exports = CarHandler;
