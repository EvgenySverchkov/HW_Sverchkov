/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Exer_1.js":
/*!***********************!*\
  !*** ./src/Exer_1.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function findLeapYear() {
  var start = +prompt("Enter starting year");
  var end = +prompt("Enter goner year");

  if (!start) //Условие при не правильном вводе данных
    {
      var yearNow = new Date();
      start = yearNow.getFullYear(); //Подстановка текущего года
    }

  if (!end) {
    var _yearNow = new Date();

    end = _yearNow.getFullYear();
  }

  var mass = [];

  for (var i = start; i <= end; i++) //Заполнение массива высокосными годами
  {
    if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0) //Условие высокосного года
      {
        mass.push(i);
      }
  }

  return mass.length == 0 ? "Enter the year more closely" : mass; //Условие если пользователь ввел или одинаковые значения или если начальный год больше конечного года
} //alert(FindLeapYear());


window.findLeapYear = findLeapYear;

/***/ }),

/***/ "./src/Exer_2_3.js":
/*!*************************!*\
  !*** ./src/Exer_2_3.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

//alert("Result in console");
/////////////////////Задание №2//////////////////////////
function sortingRandom() {
  var arr = [];
  var rand;

  while (arr.length < 50) {
    rand = Math.floor(Math.random() * 100);

    if (arr.indexOf(rand) == -1) {
      arr.push(rand);
    }
  }

  return arr.sort(function (a, b) {
    return a - b;
  });
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


function findMaxPairNum() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SortingRandom();
  var mass = arr.filter(function (item) {
    return item % 2 == 0;
  }); //оставляем в массиве все парные числа

  return mass[mass.length - 1]; //последнее число и будет максимальным парным т.к. массив отсортирован
}

function findMaxOddNum() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SortingRandom();
  var mass = arr.filter(function (item) {
    return item % 2 != 0;
  }); //оставляем в массиве все не парные числа

  return mass[mass.length - 1]; //последнее число и будет максимальным не парным т.к. массив отсортирован
} //alert(findMaxPairNum(SortingRandom()));
//alert(findMaxOddNum(SortingRandom()));


window.sortingRandom = sortingRandom;
window.findMaxPairNum = findMaxPairNum;
window.findMaxOddNum = findMaxOddNum;

/***/ }),

/***/ "./src/Exer_4.js":
/*!***********************!*\
  !*** ./src/Exer_4.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

//alert("Result in console");	
function rollArrOfObj() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{
    id: 1,
    name: 'Mihail'
  }, {
    id: 2,
    name: 'Marina'
  }, {
    id: 3,
    name: 'Andrew'
  }, {
    id: 4,
    name: 'Ilya'
  }];
  return obj.reduce(function (emptyObj, current) {
    //обход массива
    var i = current.id; //присваиваем параметр объекта по значению к перемнной (на каждой итерации новое значение)

    emptyObj[i] = current.name; //создаем новый параметр и присваеваем ему парметр данного в начале обьекта

    return emptyObj;
  }, {});
} //console.log(rollArrOfObj(users));
//console.log(users);


window.rollArrOfObj = rollArrOfObj;

/***/ }),

/***/ "./src/Exer_5.js":
/*!***********************!*\
  !*** ./src/Exer_5.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*let people = {name: "Andew", age: 26};
let empt = {};
let str = '12';
let num = 12;
let empStr = '';
let mass = [1];
let bool = true;*/
function isEmpty() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (Object.keys(obj).length || _typeof(obj) != 'object') return false;else return true;
}
/*console.log(isEmpty(people));
console.log(isEmpty(empt));
console.log(isEmpty(str));
console.log(isEmpty(num));
console.log(isEmpty(empStr));
console.log(isEmpty(mass));
console.log(isEmpty(true));*/


window.isEmpty = isEmpty;

/***/ }),

/***/ "./src/Exer_6.js":
/*!***********************!*\
  !*** ./src/Exer_6.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

//alert("Result in console");

/*function calculationFactor(num){
	let count = 1;//переменная которая будет хранить окончательный результат

	for(let i = 1; i<=num; i++)//нужное нам количество повторений действий
	{
		count*=i;
	}

	return count;
}*/
function calculationFactor() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  return num != 1 ? num * calculationFactor(num - 1) : 1;
}
/*function calculationFactor(num){//более модульный способ
	var mass = [];
	for(i=1;i<=num; i++)
		mass[i]=i;
	return mass.reduce(function(fact,curr){return fact*=curr}, 1);
}*/
//console.log(calculationFactor(10));


window.calculationFactor = calculationFactor;

/***/ }),

/***/ "./src/HW_8_OOP.js":
/*!*************************!*\
  !*** ./src/HW_8_OOP.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: E:\\HW_Sverchkov\\src\\HW_8_OOP.js: Unexpected character '#' (3:1)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mclass\u001b[39m \u001b[33mFastFood\u001b[39m{\u001b[0m\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 | \u001b[39m\t\u001b[33m#\u001b[39mprice \u001b[33m=\u001b[39m \u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m\t\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 | \u001b[39m\t\u001b[33m#\u001b[39mkcal \u001b[33m=\u001b[39m \u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 | \u001b[39m\tconstructor(size){\u001b[0m\n    at Parser.raise (E:\\HW_Sverchkov\\node_modules\\@babel\\parser\\lib\\index.js:6322:17)\n    at Parser.readToken_numberSign (E:\\HW_Sverchkov\\node_modules\\@babel\\parser\\lib\\index.js:6650:12)\n    at Parser.getTokenFromCode (E:\\HW_Sverchkov\\node_modules\\@babel\\parser\\lib\\index.js:6996:14)\n    at Parser.nextToken (E:\\HW_Sverchkov\\node_modules\\@babel\\parser\\lib\\index.js:6520:12)\n    at Parser.next (E:\\HW_Sverchkov\\node_modules\\@babel\\parser\\lib\\index.js:6460:10)\n    at Parser.eat (E:\\HW_Sverchkov\\node_modules\\@babel\\parser\\lib\\index.js:6465:12)\n    at Parser.expect (E:\\HW_Sverchkov\\node_modules\\@babel\\parser\\lib\\index.js:7624:10)\n    at Parser.parseClassBody (E:\\HW_Sverchkov\\node_modules\\@babel\\parser\\lib\\index.js:10538:10)\n    at Parser.parseClass (E:\\HW_Sverchkov\\node_modules\\@babel\\parser\\lib\\index.js:10513:22)\n    at Parser.parseStatementContent (E:\\HW_Sverchkov\\node_modules\\@babel\\parser\\lib\\index.js:9805:21)\n    at Parser.parseStatement (E:\\HW_Sverchkov\\node_modules\\@babel\\parser\\lib\\index.js:9763:17)\n    at Parser.parseBlockOrModuleBlockBody (E:\\HW_Sverchkov\\node_modules\\@babel\\parser\\lib\\index.js:10340:25)\n    at Parser.parseBlockBody (E:\\HW_Sverchkov\\node_modules\\@babel\\parser\\lib\\index.js:10327:10)\n    at Parser.parseTopLevel (E:\\HW_Sverchkov\\node_modules\\@babel\\parser\\lib\\index.js:9692:10)\n    at Parser.parse (E:\\HW_Sverchkov\\node_modules\\@babel\\parser\\lib\\index.js:11209:17)\n    at parse (E:\\HW_Sverchkov\\node_modules\\@babel\\parser\\lib\\index.js:11245:38)\n    at parser (E:\\HW_Sverchkov\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:170:34)\n    at normalizeFile (E:\\HW_Sverchkov\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:138:11)\n    at runSync (E:\\HW_Sverchkov\\node_modules\\@babel\\core\\lib\\transformation\\index.js:44:43)\n    at runAsync (E:\\HW_Sverchkov\\node_modules\\@babel\\core\\lib\\transformation\\index.js:35:14)\n    at process.nextTick (E:\\HW_Sverchkov\\node_modules\\@babel\\core\\lib\\transform.js:34:34)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Exer_1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Exer_1.js */ "./src/Exer_1.js");
/* harmony import */ var _Exer_1_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Exer_1_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Exer_2_3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Exer_2_3.js */ "./src/Exer_2_3.js");
/* harmony import */ var _Exer_2_3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Exer_2_3_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Exer_4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Exer_4.js */ "./src/Exer_4.js");
/* harmony import */ var _Exer_4_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Exer_4_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Exer_5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Exer_5.js */ "./src/Exer_5.js");
/* harmony import */ var _Exer_5_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Exer_5_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Exer_6_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Exer_6.js */ "./src/Exer_6.js");
/* harmony import */ var _Exer_6_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Exer_6_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HW_8_OOP_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HW_8_OOP.js */ "./src/HW_8_OOP.js");
/* harmony import */ var _HW_8_OOP_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_HW_8_OOP_js__WEBPACK_IMPORTED_MODULE_5__);







/***/ })

/******/ });