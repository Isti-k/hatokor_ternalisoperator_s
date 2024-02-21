
import {parosParatlanSzam} from "./fugvenyek.js";

//console.log(parosParatlanSzam(5))

/* var let const - hatókör */
//console.log(szam);//szam -> hibaüzenet
//console.log(szam); // -> undefined
szam = 12;

function fv1(){
    let szam = 5;
    console.log(szam);
    let masikszam = 23;
}
//console.log(masikszam);//hibaüzenet
//console.log(szam);
//fv1();


function fv2(){
    let x=2;
    {
        let x=3;
        console.log(x)
    }
    console.log(x)
}

//fv2();

function fv3(){
    for (var index = 0; index < 3; index++){
        console.log(index);
    }
    console.log(index);
}
fv3();

function fv4(szam){
    // ternális operátorral old meg!
    // a fvény adja vissza a 3-mal való osztasi maradékát
    //szam % 3 === 0 ? szoveg="nulla" : szam % 3 === 1 ? szoveg="egy" : szoveg="kettő"
    let szoveg = "";
    if (szam % 3 === 0){
        szoveg="nulla"
    }else if (szam % 3 === 1){
        szoveg="egy"
    }else{
        szoveg="kettő"
    }


return szoveg

}

//szoveg: "nulla", "egy", kettő

