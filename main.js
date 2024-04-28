//  Q no 124
var person = {
    name: "Alice",
    getName: function () {
        return this.name;
    }
};
console.log(person.getName());
//  Q no 125
var rectangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
        return this.length * this.width;
    },
};
console.log(rectangle.calculateArea());
//  Q no 126
var myObject = {
    property: "Value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property);
        var innerMethod = function () {
            console.log(_this.innerMethod);
        };
        innerMethod();
    },
};
myObject.outerMethod();
