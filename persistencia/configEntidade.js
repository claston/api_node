var mapEntidade = {
    'person' : { 'table' : 'Person.Person' , 'proc_list' : 'dbo.sp_sistema_get_people @ID' } 
};

function getMapEntidade(entidade){
    return mapEntidade[entidade];
}

module.exports = function(entidade){
    return getMapEntidade;
}