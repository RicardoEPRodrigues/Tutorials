/* The Parent */

function Parent(aField) {
	"use strict";
	this.someField = aField;
}

Parent.prototype.getSomeField = function () {
	return this.someField;
}

/* The Child */

function Child() {
	"use strict";
	Parent.call(this, 1); // <----- Call the parent constructor
	this.otherField = '1';
}

Child.prototype = Object.create(Parent.prototype); // <--- Sets parent prototype as his own
Child.prototype.constructor = Child; // <--- Overwrite the constructor to call the Child constructor
									 //		 instead of the Parent constructor

Child.prototype.getOtherField = function () {
	return this.otherField;
}