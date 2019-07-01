class FastFood{
	#price = 0;
	#kcal = 0;

	constructor(size){
		if(this.constructor.name == size.class)
		{
			this.size = size;
			this.#price += this.size.price;
			this.#kcal += this.size.calories;
		}
		else{
			throw new Error('I don\'t know this size');
		}
	}

	static get SAUCE_MAYO(){
		return {class: this.name, price: 5, calories: 30}
	}
	
	static get SAUCE_MUSTARD(){
		return {class: this.name, price: 5, calories: 35}
	}

	addSauce(sauce){
		if(this.constructor.name == sauce.class){
			this.#kcal +=sauce.calories;
			this.#price += sauce.price;
		}
		else{
			throw new Error('I don\'t know this sauce');
		}
		

	}

	getPrice(){
		return this.#price;
	}

	removeSauce(sauce){
		if(this.constructor.name == sauce.class){
			this.#price -= sauce.price;
			this.#kcal -= sauce.calories;
		}
		else{
			throw new Error('I don\'t know this sauce');
		}
	}

	getCalories(){
		return this.#kcal;
	}
}




class Hamburger extends FastFood{
	static get SIZE_SMALL(){
		return {class: this.name, price: 30, calories: 200};
	}
	static get SIZE_BIG(){
		return {class: this.name, price: 50, calories: 320};
	}
}

class Cheeseburger extends FastFood{
	static get SIZE_SMALL(){
		return {class: this.name, price: 40, calories: 250};
	}
	static get SIZE_BIG(){
		return {class: this.name, price: 70, calories: 400};
	}
	static get SAUCE_TARTAR(){
		return {class: this.name, price: 7, calories: 37};
	}
}
