function Child(number, multiplier) {
    "use strict";
    Parent.call(this, number); // <----- Call the parent constructor
    this.multiplier = multiplier;
}

Child.prototype = Object.create(Parent.prototype); // <--- Sets parent prototype as his own
Child.prototype.constructor = Child; // <--- Overwrite the constructor to call the Child constructor
//		 instead of the Parent constructor

Child.prototype.multiply = function() {
    return this.number * this.multiplier;
};

Child.prototype.add = function() {
    return Parent.prototype.add.call(this) * this.multiplier;
};
