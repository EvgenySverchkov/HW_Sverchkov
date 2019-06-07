class FastFood{

	#price = 0;
	#kcal = 0;

	constructor(size){
		try{
			this.size = size;
			this.#price += this.size.price;
			this.#kcal += this.size.calories;
		}catch{console.error('Invalid size'); console.info('Enter valid sauce')}
	}

	static get SAUCE_MAYO(){
		return {price: 5, calories: 30}
	}
	
	static get SAUCE_MUSTARD(){
		return {price: 5, calories: 35}
	}

	addSauce(sauce){
		try{
			this.#kcal +=sauce.calories;
			this.#price += sauce.price;
		}catch{console.error('Enter valid sauce')}
		
	}
	getPrice(){
		return this.#price;
	}

	removeSauce(sauce){
		try{
			this.#price -= sauce.price;
			this.#kcal -= sauce.calories;
		}catch{console.error('Enter valid sauce')}

	}

	getCalories(){
		return this.#kcal;
	}
}




class Hamburger extends FastFood{
	static get SIZE_SMALL(){
		return {price: 30, calories: 200};
	}
	static get SIZE_BIG(){
		return {price: 50, calories: 320};
	}
}

class Cheeseburger extends FastFood{
	static get SIZE_SMALL(){
		return {price: 40, calories: 250};
	}
	static get SIZE_BIG(){
		return {price: 70, calories: 400};
	}
	static get SAUCE_TARTAR(){
		return {price: 7, calories: 37};
	}
}