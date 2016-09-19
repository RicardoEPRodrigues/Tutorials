function Parent(number) {
	"use strict";
	this.number = number;
}

Parent.prototype.add = function () {
	return this.number + 1;
};
