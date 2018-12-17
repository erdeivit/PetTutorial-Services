'use strict';

module.exports = function (app, cb) {

  app.models.Point.create([
    {
      name: 'Questionario',
      value: '1',
      id: 100001,
      schoolId: 1,
      teacherId: 1000
    },{
    id: 100002,
    name: 'Puntualidad',
    value: '1',
    schoolId: 1,
    teacherId: 1000
  }, {
    id: 100003,
    name: 'Ejercicios',
    value: '1',
    schoolId: 1,
    teacherId: 1000
  }, {
    id: 100004,
    name: 'Ayuda a Compañero',
    value: '2',
    schoolId: 1,
    teacherId: 1001
  },
   {
	id: 100005,
    name: 'Progreso',
    value: '2',
    schoolId: 2,
    teacherId: 1003
  },{
    name: 'Retraso',
   value: '-2',
    id: 100006,
    schoolId: 1,
    teacherId: 1000
}
], function (err) {
    if (err) throw err;

	app.models.PointRelation.create([{
		id: 1,
		value: '10',
		pointId: 100001,
		groupId: 1,
		studentId: 10001,
		schoolId: 1
	  }, {
		id: 2,
		value: '20',
		pointId: 100001,
		groupId: 1,
		studentId: 10001,
		schoolId: 1
	  }, {
		id: 3,
		value: '15',
		pointId: 100001,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 4,
		value: '50',
		pointId: 100001,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 5,
		value: '30',
		pointId: 100001,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 6,
		value: '1',
		pointId: 100002,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 7,
		value: '50',
		pointId: 100002,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 8,
		value: '1',
		pointId: 100002,
		groupId: 2,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 9,
		value: '1',
		pointId: 100002,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 10,
		value: '1',
		pointId: 100002,
		groupId: 1,
		studentId: 10002,
		schoolId: 1
	  }, {
		id: 11,
		value: '1',
		pointId: 100001,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 12,
		value: '5',
		pointId: 100001,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 13,
		value: '6',
		pointId: 100001,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 14,
		value: '1',
		pointId: 100001,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 15,
		value: '1',
		pointId: 100002,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  },{
		id: 16,
		value: '1',
		pointId: 100002,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  },{
		id: 17,
		value: '1',
		pointId: 100005,
		groupId: 1,
		studentId: 10000,
		schoolId: 1
	  },{
		id: 18,
		value: '1',
		pointId: 100002,
		groupId: 2,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 19,
		value: '1',
		pointId: 100002,
		groupId: 2,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 20,
		value: '1',
		pointId: 100002,
		groupId: 2,
		studentId: 10008,
		schoolId: 1
	  }, {
		id: 21,
		value: '1',
		pointId: 100004,
		groupId: 2,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 22,
		value: '1',
		pointId: 100002,
		groupId: 2,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 23,
		value: '1',
		pointId: 100001,
		groupId: 2,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 24,
		value: '1',
		pointId: 100001,
		groupId: 3,
		studentId: 10008,
		schoolId: 1
	  }, {
		id: 25,
		value: '1',
		pointId: 100002,
		groupId: 3,
		studentId: 10008,
		schoolId: 1
	  },{
		id: 26,
		value: '1',
		pointId: 100002,
		groupId: 3,
		studentId: 10008,
		schoolId: 1
	  },{
		id: 27,
		value: '1',
		pointId: 100005,
		groupId: 3,
		studentId: 10004,
		schoolId: 1
	  }, {
		id: 28,
		value: '1',
		pointId: 100000,
		groupId: 3,
		studentId: 10008,
		schoolId: 1
	  },{
		id: 29,
		value: '1',
		pointId: 100002,
		groupId: 3,
		studentId: 10008,
		schoolId: 1
	  },{
		id: 30,
		value: '1',
		pointId: 100002,
		groupId: 3,
		studentId: 10004,
		schoolId: 1
	  },{
		id: 31,
		value: '1',
		pointId: 100003,
		groupId: 3,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 32,
		value: '1',
		pointId: 100003,
		groupId: 3,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 33,
		value: '1',
		pointId: 100001,
		groupId: 3,
		studentId: 10000,
		schoolId: 1
	  }, {
		id: 34,
		value: '1',
		pointId: 100001,
		groupId: 2,
		studentId: 10008,
		schoolId: 1
	  }, {
		id: 35,
		value: '1',
		pointId: 100002,
		groupId: 2,
		studentId: 10008,
		schoolId: 1
	  },{
		id: 36,
		value: '1',
		pointId: 100002,
		groupId: 2,
		studentId: 10008,
		schoolId: 1
	  },{
		id: 37,
		value: '1',
		pointId: 100001,
		groupId: 3,
		studentId: 10004,
		schoolId: 1
	  },{
		id: 38,
		value: '1',
		pointId: 100005,
		groupId: 1,
		studentId: 10008,
		schoolId: 1
	  },{
		id: 39,
		value: '1',
		pointId: 100001,
		groupId: 1,
		studentId: 10008,
		schoolId: 1
	  }], function (err) {

    process.nextTick(cb);
	});
  });
};

