 /*let a=20;
 let kartik=7;
 kartik=10;
 document.write("kartik age is ",kartik);
 const aps=20;
 aps=20;
 document.write("aps weight is ",aps)
 const kailash_singh=20;
 const weight=54;*/
                    // let is update ,const is not update
                    // arithmatic operator
/*let a=15.25;
let b=25.30;
document.write("sum of a and b is ",a+b,"<br>");
document.write("diff of a and b is ",a-b,"<br>");
document.write("multiply of a and b is ",a*b,"<br>");
document.write("divide of a and b is ",a/b,"<br>");
document.write("exponent of a and b is ",a%b,"<br>");
document.write("exponent of a and b is ",a**b,"<br>");
document.write(a>b,"<br>");
document.write(a<b,"<br>");
document.write(a<=b,"<br>");
document.write(a>=b,"<br>");
document.write(a!=b,"<br>");
document.write(a>b || a>c,"<br>");
document.write(a<b && a>c,"<br>");*/

/*let weight=54;
if (weight<30){
    document.write("jyada khaya kro");
}else if(weight>30 && weight<50){
    document.write("Bhai tu thik ha ");
}
else if(weight>50 && weight<70){
    document.write("Bhai sambhal ja");
}
else{
    document.write("kam khaya kro")
}*/
/*let weight=prompt("Enter the weight");
let height=prompt("Enter the height");
if (weight<30){
    document.write("jyada khaya kro");
}else if(weight>30 && weight<50){
    document.write("Bhai tu thik ha ");
}
else if(weight>50 && weight<70){
    document.write("Bhai sambhal ja");
}
else{
    document.write("kam khaya kro");
}*/

/*let weight=prompt("Enter the weight");
let height=prompt("Enter the height");
let bmi=weight/(height**2);
if(bmi<20){
    document.write("starvation");
}else if(bmi>20 && bmi<25){
    document.write("Normal");
}
else if(weight>25){
    document.write("overweight");
}
else{
    document.weight("please enter correct value");
}*/

// let age=prompt("Enter the age");
// age>17.5?document.write("no you can't fill the from"):document.write("you can fill the form");

// for(i=1;i<100;i++){
//     document.write(i+"kartik mahar"+"<br>");
// }

// let num=prompt("Enter the no: ");
// for(i=1;i<11;i++){
//     document.write(num,"*",i,"=",num*i+"<br>");
// }

let num=prompt("Enter the no: ");
let count=0;
for(i=1;i<=num;i++){
if(num%i==0){
    count++;
}
}
if (count==2){
    document.write("no is prime");
}else{
    document.write("no is composite");
}
