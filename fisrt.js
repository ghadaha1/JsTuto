class Car{

    constructor(color,comp,mod) {
        this.color= color;
        this.comp = comp;
        this.mod = mod;
    }
    print(){
        console.log(this.color+' '+this.mod+' '+this.comp)
}
}
var c1 = new Car("red","ford","mustung")
console.log(c1.color)
console.log(c1.print())
