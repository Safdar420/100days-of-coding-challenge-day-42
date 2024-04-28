

//  Q no 124

const person ={
    name: "Alice",
    getName:function(){
        return this.name;
    }
}
console.log(person.getName());

//  Q no 125

const rectangle ={
    length:4,
    width:5,
    calculateArea:function(){
        return this.length * this.width
    },
};
console.log(rectangle.calculateArea());

//  Q no 126

const myObject ={
    property: "Value",
    outerMethod:function(){
        console.log(this.property);
     const innerMethod = () => {
        console.log(this.innerMethod);
     };
     innerMethod();
    },
    
};
myObject.outerMethod();