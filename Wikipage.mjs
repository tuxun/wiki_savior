'use strict';

/**
  * The entry point.
  *
  * @module Wikipage
  */
  class Wikipage {
var Page =  {
   "created":false,
   "downloaded":false,
   "insertStarted":false,
   "insertOk":false,

//define model of wiki page data

sqlFile : sequelize.define('files', {
  name: Sequelize.STRING,
  wikipagefrom: Sequelize.STRING,
  actualpath: Sequelize.DATE,
  serverpath: Sequelize.DATE,
  description: Sequelize.DATE,

  //creation
  set: function(){ sequelize.sync().then(function() {
    return User.create({
      username: 'file',
      birthday: new Date(1980, 6, 20)
    });
  }).then(function(jane) {
    console.log(jane.get({
      plain: true
    }));
  })
}
})

};
}

module.exports = Wikipage;
module.exports.Wikipage = Wikipage;
module.exports.default = Wikipage;
