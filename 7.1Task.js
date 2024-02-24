const person={
name:"Ira",
age:"20"
};
function printInfo(name){
console.log("Name: ${this.name} , Age: ${this.age}");
}
printInfo.call(person)
