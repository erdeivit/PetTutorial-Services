'use strict';

module.exports = function (app, cb) {

  app.models.Pet.create([{
    name: "Lazy",
    image: "http://static.consumer.es/www/imgs/2018/07/perros-gatos-aspirinas-peligros-articulo.jpg",
    studentId: 10000
  }], function (err) {
    if (err) throw err;
    process.nextTick(cb);
  });
};
