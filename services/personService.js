'use strict'

module.exports = function (app) {

    console.log('path:'+app.virtualDirPath);

    app.get(app.virtualDirPath + '/people', function (req, res) {

        let db = app.persistencia.connectionFactory();
        let mapEntidade = app.persistencia.configEntidade('person');
        let genericDao = new app.persistencia.genericDao(db, mapEntidade);

        genericDao.lista(function (people) {
            var result = people.map(item => ({ 'name': item.FirstName + ' ' + item.LastName }));
            res.status(200).json(result);
        });


        //  console.log('Recebida requisicao de teste na porta 3000.')
        // res.send('OK.');

    });

   app.get(app.virtualDirPath + '/teste', function (req, res) {

       console.log('teste');
       

/*
        let db = app.persistencia.connectionFactory();
        let mapEntidade = app.persistencia.configEntidade('person');
        let genericDao = new app.persistencia.genericDao(db, mapEntidade);

        genericDao.lista(function (people) {
            var result = people.map(item => ({ 'name': item.FirstName + ' ' + item.LastName }));
            res.status(200).json(result);
        });
*/




        //  console.log('Recebida requisicao de teste na porta 3000.')
        // res.send('OK.');

    });



}