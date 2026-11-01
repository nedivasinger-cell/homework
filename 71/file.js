function Person(first){
this.first = first;
}
const p1 = new Person("Donald");
console.log(p1);

Person.protoype. talk = function(){
    console.log('${this.first} says hi')
}
Person.prototype.walk = function(){
    console.log('${this.first} is walking')
}


class Person1 {
    constructer(first){
    this.first = first}
talk(){
    console.log("talking");
}
walk(){
    console.log("walking")
}

}

const p2 = new Person1('donald');


function Vehicle(color){
    this.color = color;
}
Vehicle.prototype.go = function(speed){
    this.speed = speed;
    console.log('now going at speed' + speed);
}
Vehicle.prototype.print = function(){
    console.log(this.color + this.speed);
}

function Plane(color){
    this.color = color;
}
Plane.setObject = Vehicle;
Plane.go = function(){
    console.log('now flying at speed' + speeed);
}

v = new Vehicle(red);
v.go();
v.print();
p = new Plane(green);
p.go();
p.print();
