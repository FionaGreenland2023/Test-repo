// const objA = {
//     aa:"Apple",
//     bb:"Borin"
// }
// console.log(objA);

// class yangon {
//     a = "Arizona";
//     b = "Maldive"
//     c ="Columbia";
//     x(){
//         return "x"
//     }
//     y(){
//         return "y"
//     }
// }
// // console.log(yangon);
// const instYgn = new yangon ();
// console.log(instYgn);

// class student {
//     Name;Gender;Age;Major;
// }
// const st1 = new student();
// st1.Name ="Shwe Yupar" ;
// st1.Gender="F";
// st1.Age =23;
// st1.Major = "Zoo"
// console.log(st1);
// const st2 = new student();
// st2.Name ="Magthrew";
// st2.Age = 23;
// st2.Major ="Philo";
// st2.Gender ="M"
// console.log(st2);

class CT {
    x(){
        console.log("X");
    }
    y(){
        console.log("Y");
    }
    constructor(a,b,c,d){
        console.log("Hello ",a,b,c,d);
    }
}
const ctObj = new CT("from","the","other","side");
ctObj.x()
ctObj.y();