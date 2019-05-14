function findLeapYear(){

	let start = +prompt("Enter starting year");
	let end   = +prompt("Enter goner year");

	if(!start)//Условие при не правильном вводе данных
	{
		let yearNow = new Date();
		start = yearNow.getFullYear();//Подстановка текущего года
	}
	if(!end)
	{
		let yearNow = new Date();
		end = yearNow.getFullYear();
	}

	let mass=[];
	for(let i=start; i<=end; i++)//Заполнение массива высокосными годами
	{
		if((i%4==0 && i%100!=0) || i%400==0)//Условие высокосного года
		{
			mass.push(i);
		}
	}
	return mass.length==0? "Enter the year more closely": mass;//Условие если пользователь ввел или одинаковые значения или если начальный год больше конечного года
}
//alert(FindLeapYear());

window.findLeapYear = findLeapYear;
