'use strict'

function GenericDao(db, mapEntidade) {
    //this._sql = sql;
    this._db = db;
    this._mapEntidade = mapEntidade;
}

GenericDao.prototype.lista = function(cb){

    let person = this._db.model({ table: this._mapEntidade.table });

    person.query(this._mapEntidade.proc_list, {ID: '1'}).then(function(entidade){   
        cb(entidade);
    });
}

module.exports = function(){
    return GenericDao;
}