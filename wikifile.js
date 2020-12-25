
var File =  {
   "created":false,
   "downloaded":false,
   "insertStarted":false,
   "insertOk":false,

   sqlFile : sequelize.define('files', {
     name: Sequelize.STRING,
     wikipagefrom: Sequelize.STRING,
     actualpath: Sequelize.DATE,
     serverpath: Sequelize.DATE,
     description: Sequelize.DATE,

     //creation
     set: sequelize.sync().then(function() {
       return User.create({
         username: 'janedoe',
         birthday: new Date(1980, 6, 20)
       });
     }).then(function(jane) {
       console.log(jane.get({
         plain: true
       }));
     })



   })

};
