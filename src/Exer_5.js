/*let people = {name: "Andew", age: 26};
let empt = {};
let str = '12';
let num = 12;
let empStr = '';
let mass = [1];
let bool = true;*/
function isEmpty(obj = {}){
	if(Object.keys(obj).length || typeof obj!='object')
		return false;
	else
		return true;
}

/*console.log(isEmpty(people));
console.log(isEmpty(empt));
console.log(isEmpty(str));
console.log(isEmpty(num));
console.log(isEmpty(empStr));
console.log(isEmpty(mass));
console.log(isEmpty(true));*/
window.isEmpty=isEmpty;
