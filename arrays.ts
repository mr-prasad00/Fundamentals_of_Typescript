//array declaration and intilzation
var num: number[] = [22, 33, 44, 55];
//or by using type as well we can declare array
var num2: Array<number> = [12, 13, 14, 15, 16];
console.log(num);
console.log(num2);
//storing multiple vales :-in single array we can store multiple data types 
let difdt: (String | Number)[] = ["prasad", 100, "lakshmi"]
console.log(difdt)
or
let arr: Array<string | number> = ["prasad", 100, "lakshmi"];

//reading values from array
for (var nums of arr) {
    console.log(nums)
}

