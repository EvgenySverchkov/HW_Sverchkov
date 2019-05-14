//alert("Result in console");
/*function calculationFactor(num){
	let count = 1;//переменная которая будет хранить окончательный результат

	for(let i = 1; i<=num; i++)//нужное нам количество повторений действий
	{
		count*=i;
	}

	return count;
}*/

function calculationFactor(num = 5){
	return (num!=1) ? num * calculationFactor(num-1):1;
}

/*function calculationFactor(num){//более модульный способ
	var mass = [];
	for(i=1;i<=num; i++)
		mass[i]=i;
	return mass.reduce(function(fact,curr){return fact*=curr}, 1);
}*/
//console.log(calculationFactor(10));
window.calculationFactor=calculationFactor;
