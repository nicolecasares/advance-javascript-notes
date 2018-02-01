///////////////////////////////////
//Advance Javascript and Functions 

	//ALMOST EVERYTHING IS A OBJECT

	//two types of values PRIMATIVES and OBJECTS

	//primatives are
		//numbers, strings,booleans, undifined, null

	//Objects are
		//arrays, functions, objects, dates,
		//wrappers for numbers, strings, booleans

	//Object-Oriented Programming
		//Objects interacting with one another throgh methods and properties
		//Used to store data, structure applications into modules and keeping clean.
	
	//Constructor/Prototype
		//aka class in other lang
		//using this we can creat as many instances as we want
		//acts like a blueprint 

	//Inheritance 
		//when one object is based on another object
		//the object gets acces to another objects peroperties and methods

	//Javascript is a prototype-based language 
		//which means inheritance works by using prototypes
		//every object has a prototype property. 

	//SUMMARY from Instructor

		//Every Javascript objects has a PROTOTYPE PROPERTY, which makes inheritace possible in JavaScript
		// The prototype of an object is where we put methods and properties that we want OTHER OJECTS TO INHERIT
		//The Constructorr's prototype is NOT the prototype of the Constructor itself, it's the prototype of ALL instances that are created through it;
		//When a certain method (or property) is called, the search starts in the object's prototype.This continues until the method is found: prototype chain.
		

/////////////////////////////////////////
// Function Constructor 


	// function Person(name, yearOfBirth, job){
	// 	this.name = name;
	// 	this. yearOfBirth = yearOfBirth;
	// 	this.job = job;

	// };

	// Person.prototype.calculateAge = function(){
	// 	console.log(2018 - this.yearOfBirth);
	// }

	// var nicole = new Person('Nicole', 1989, 'Developer');

	// nicole.calculateAge();


	//the new operator
		//the new operator creates a new empty object 
		//after that the constructor function in this case Person is called with its arguments 
		//calling a new function creates a new execution context that also has a this variable 
		// the new operator makes it so that the this variable points to the empty function that is created 

	//We need to add all methods and properties we want inherited into the constructors prototype property 



	// function Cat(name, yearOfBirth, color, size){
	// 	this.name = name
	// 	this.yearOfBirth = yearOfBirth;
	// 	this.color = color;
	// 	this.size = size;

	// }

	// var d = new Date();

	// Cat.prototype.calculateAge = function(){
	// 	console.log(calculateAge = d.getFullYear() - this.yearOfBirth)
	// }


	// var cocoa = new Cat('Cocoa', 2010, 'brown', 'small');
	// var cloud = new Cat('Cloud', 2013, 'white and black', 'big');
	// var zues = new Cat('Zues', 2015, 'white and black', 'medium');
	// var rain = new Cat('Rain', 2016, 'black', 'medium');

	// cocoa.calculateAge();
	// cloud.calculateAge();
	// zues.calculateAge();
	// rain.calculateAge();

///////////////////////////////////////////////////
//Prototype Chain in the Console 
	

	//We can use the console to inspect ojects
	//we can also see the proto in the objects
	//in our case we can see prototype property of the Cat constructor 
	//cocoa.__proto__ === Cat.prototype
	//true
	//each object is also an instance of the object object 
	//in the conslole you can visulalize the whole prototype chain.
	// you can also see the methods that you can use off the object object 

	// ex.
	//cocoa.hasOwnProperty('size');

	//to prove everything is an obect add this to the console
	// var x = [1,2,3,4];
	// console.log(x);
	//you see the length property 
	//a __proto__ option is reviled
	//all the methods available in an array object are also shown  


////////////////////////////////////////////
//Create Objects: Object.Create

	//this lecture will show another way to create a object that inherit from a prototype 
	//that is the object.create method
	
	//this is case we will first define an object that will act as a prototype and then create a new object based on that very prototype 

	//First we have write the prototype as a simple object
	
	var d = new Date();

	var catProto = {
		calculateAge: function(){
		console.log( calculateAge = d.getFullYear - this.yearOfBirth);
		}
	}	

	var cocoa = Object.create(catProto);

















































