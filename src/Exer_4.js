//alert("Result in console");	
function rollArrOfObj(obj = [{id: 1,name: 'Mihail'},{id: 2,name: 'Marina'},{id: 3,name: 'Andrew'},{id: 4,name: 'Ilya'}
]){

	return obj.reduce(function(emptyObj, current){//обход массива
		let i = current.id;//присваиваем параметр объекта по значению к перемнной (на каждой итерации новое значение)
		emptyObj[i] = current.name;//создаем новый параметр и присваеваем ему парметр данного в начале обьекта
		return emptyObj;}, {});
}
//console.log(rollArrOfObj(users));
//console.log(users);
window.rollArrOfObj=rollArrOfObj;
