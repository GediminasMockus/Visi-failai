// let a= 10;
// let b= 15;
// let suma= a+b;
// console.log(suma);

// /*2 uzduotis*/

// let pirmas=90;
// let antras=40;
// let viso=180;
// let x = viso - pirmas - antras;
// console.log(x);
// /*3 uzduotis*/




// /* 7 uzduotis*/
// let n=7;
// let m=23;
// let s= m/n;
// let sGavo=Math.floor(s);
// let k=m-(sGavo*n);

// console.log("gavo:"+ sGavo + ",liko:"+ k);
// /*9 uzduotis*/

// let h = 1;
// let min = 30;
// let trukme = 40;
// let trukmeMin = h * 60 + min + trukme;



// let h1 = Math.floor(trukmeMin / 60);
// let min1 = trukmeMin % 60;


// /*pirma*/

// let sk= +prompt("iveskite skaiciu");
// if (sk>0){
//     let a = Math.sqrt(sk);
//     console.log(a);   
// }
// else if(sk<0)
// {
//     console.log("saknies istraukti negalima, nes ivestas neigiamas");
// }
// /*antras*/
//  let deg = +prompt("iveskite degtuku skaiciu");
// ats = deg/4;
//  console.log(ats)


//  /*sestas*/
//  let a= +prompt("iveskite skaiciu");
//  if (a<=0){
//      console.log("neigiamas");
//  }else{
//      console.log("teigiamas");
//  }

 /*septintas*/
//  let a= prompt("iveskite laipsnius");
//  if(a<=90){
//      console.log("statusis");
//  }else if(a>90 && a<=180){
//      console.log("istiestinis");
//  }else if(a>180 && a<=360) {
//      console.log("pilnutinis");
//  }

//  /*dvyliktas*/
//  let sk = +prompt("iveskite skiaciu");
//  switch(sk){
//      case 1:
//          console.log("sauleta");
//          break;
//      case 2:
//          console.log("lietinga");
//          break;
//      case 3:
//          console.log("vejuota");
//          break;
//      case 4:
//          console.log("sniegas");
//          break;
//      default:
//          console.log("klaida");
//          break;             
//  }

 /*keturioliktas*/

//  let sk1= +prompt("iveskite pirma skaiciu");
//  let sk2= +prompt("iveskite antra skaiciu");
//  let veiksmas=+prompt("iveskite veiksmo simboli");
//  if(veiksmas=="+"){
//      console.log(sk1 + sk2);
//  } else if(veiksmas=="-"){
//      console.log(sk1 - sk2);
//  }else if(veiksmas=="*"){
//      console.log(sk1 * sk2);
//  }else if(veiksmas=="/"){
//      console.log(sk1 / sk2);
//  }else{
//      console.log("klaida");
//  }


/*pirma*/
// let a = +prompt("Saldainiu skaiciu");

// let sum = 0

// let diena = 0;

// while (a > 0) {

// sum = sum + 1

// a = a - sum

// diena++;

// }

// console.log("Viska suvalge " + diena + "diena");

/*antra*/

// let t = +prompt("Kiek litru isipyle");
// let n = +prompt("Kiek naudoja litru");
// let dienos = 1
// while (t > 0) {
// if (dienos % 2 > 0) {
//     t = t - n
//     dienos++;
// } else {
//     t = t - 2 * n
//     dienos++;
//     }
// } 
// dienos = dienos - 1

// console.log("dienos " + dienos);



/*ketvirta*/

// let veiksmas= prompt("iveskite veiksmo simboli");
// let skaicius;
// let suma=0;
// switch(veiksmas){
//     case"+":
//         while(true){
//             skaicius = +prompt("iveskite skaiciu");
//             console.log(skaicius);
//             suma = suma + skaicius;
//             if(skaicius == 0){
//                 break;
//             }
//         }
//         break;
//     case"-":
//         while(true){
//             skaicius = +prompt("iveskite skaiciu");
//             console.log(skaicius);
//             suma = suma + skaicius;
//             if(skaicius == 0){
//                 break;
//             }
//         }
//         break;
//     case"*":
//         while(true){
//             skaicius = +prompt("iveskite skaiciu");
//             console.log(skaicius);
//             suma = suma + skaicius;
//             if(skaicius == 0){
//                 break;
//             }
//         }
//         break;
//     case"4":
//         while(true){
//             skaicius = +prompt("iveskite skaiciu");
//             console.log(skaicius);
//             suma = Math.max(suma,skaicius);
//             if(skaicius == 0){
//                 break;
//             }
//         }
//         break;
//     case"5":
//         while(true){
//             skaicius = +prompt("iveskite skaiciu");
//             console.log(skaicius);
//             suma = Math.min(suma,skaicius);
//             if(skaicius == 0){
//                 break;
//             }
//         }
//         break;   
// }
// console.log("atsakymas: "+ suma)


/*for ciklai*/

/*pirma*/


// for(a=0; a<10; a++ ) {
//     console.log(a);
// }

/*antra*/
// for(a=0; a<10; a++){
//     console.log(a,"-",(a*a))
// }

/*trecia*/
// for(let i=10; i<99; i++){
//         if (i % 2 == 0){
//             console.log(i);
//         }
// }

/*ketvirta*/

// let a = +prompt("iveskite skaiciu");
// for( b=1; b<=a; b++ ){
//     console.log(b);
// }

/*penkta*/

// let a = +prompt("iveskite skaiciu");
// let b = +prompt("iveskite skaiciu");
// for( i=1; i<=b; i++ ){
//     console.log(i);
// }

/*septinta*/

// let suma=0
// let ivsk = +prompt("iveskite skaiciu");{
//     for(a=1; a<=10; a++){
//         console.log(ivsk,"*",a,"=",suma=a*ivsk)
//     }
// }

/*devinta*/



/*funkcijos*/


/*pirma*/

// function maziausiasSkaicius(sk1,sk2,sk3){
//     let ats=Math.min(sk1,sk2,sk3);
//     return ats;
// }
// console.log(maziausiasSkaicius(25,60,45))

/*antra*/

// function avg(sk1,sk2,sk3){
//     let ats=((sk1+sk2+sk3) /3);
//     return ats;

// }
//  console.log(avg(25,45,65));

/*trecia*/

// let skaicius = prompt("iveskite skaiciu");

// function sum(skaicius){
//     let suma =0;

//     while(skaicius){
//         suma=suma+skaicius%10;
//         skaicius = Math.floor(skaicius/10);
//     }
//     let ats= suma;
//     return ats;
// }
// console.log(sum(skaicius));

/*sesta*/

// function printText(){
//     console.log("In the beginning there were the swamp, the hoe and JavaScript.");
// } 
// printText();

/*septinta*/


// function printText(){

//     console.log("In the beginning there were the swamp, the hoe and JavaScript.");
//     } 
// let kartai = +prompt(" iveskite kiek kartu spausdinti teksta");
// for (sk = 0; sk<= kartai; sk++){
//     printText();
// }    
   

 /*astuntas*/

//  let text ="";
//  for(let i=0; i<5; i++){
//      text = text + "*";
//  }
//  console.log(text);

/* astuntas.1*/

 let text ="";
 for(let i=0; i<5; i++){
     text = text + "*";
     for(let j=0; j<i; j++){
         text= text+ "+"
     }
 }
 console.log(text);
