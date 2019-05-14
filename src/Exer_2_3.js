//alert("Result in console");
/////////////////////Задание №2//////////////////////////
function sortingRandom(){
	var arr = []                          
	var rand;
	while (arr.length < 50) {
    	rand = Math.floor(Math.random() * 100); 
	   	if (arr.indexOf(rand) == -1) 
	   	{         
        	arr.push(rand);         	
        }
    }
	return arr.sort((a,b)=>a-b);
}
/*function sortingRandom(){
	let arr = [];
	for(var i=0; i<50; i++)//цикл заполнения массива рандомными числами
	{
		arr[i] = Math.floor(Math.random()*100);//случайные числа
		for(let j = 0; j<arr.length-1; j++)//цикл для сравнения чисел
		{
			if(arr[i]==arr[j])//сравнение
			{
				i--;//если равны, назад на одну итерацию для генерации нового числа и новой проверки
				break;
			}
		}
	}
	return arr.sort((a,b)=>a-b);
}//заполнение случайными значениями, сортировка случайных значений*/
//console.log(sortingRandom());

/////////////////////Задание №3//////////////////////////
function findMaxPairNum(arr = SortingRandom()){
	let mass = arr.filter((item)=>item%2==0);//оставляем в массиве все парные числа
			
	return mass[mass.length-1];//последнее число и будет максимальным парным т.к. массив отсортирован
}

function findMaxOddNum(arr = SortingRandom()){
	let mass = arr.filter((item)=>item%2!=0);//оставляем в массиве все не парные числа

	return mass[mass.length-1];//последнее число и будет максимальным не парным т.к. массив отсортирован
}
//alert(findMaxPairNum(SortingRandom()));
//alert(findMaxOddNum(SortingRandom()));
window.sortingRandom=sortingRandom;
window.findMaxPairNum=findMaxPairNum;
window.findMaxOddNum=findMaxOddNum;