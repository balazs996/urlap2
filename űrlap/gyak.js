"use strict";

function feldolgoz() {
    let veznev = document.forms["urlap"]["veznev"].value;
    let kernev = document.forms["urlap"]["kernev"].value;
    let nev = document.forms["urlap"]["nev"].value;
    let kiir = "";
    let sokszoveg = document.forms["urlap"]["sokszoveg"].value;

    /*for (let i = 0; i <nev.length; i++)
        kiir += `A(z) ${i + 1}. név: ${nev[i]} <br/>`; */

        /* FASZOM NEM MEGY EZ A FOS */

    /*switch(nev) {
        case "laszlo":
            kiir = "László";
            break;
        case "david":
            kiir = "Dávid";
            break;
        case "balazs":
            kiir = "Balázs";
            break;
        case "adam":
            kiir = "Ádám";
            break;   
        case "viktor":
            kiir = "Viktor";
            break;   
        case "kinga":
            kiir = "Kinga";
            break;   
        case "alexandra":
            kiir = "Alexandra";
            break;   
        default:
            kiir = "Nincs ilyen állapot!";
            break;    
    }*/

    document.getElementById("rejto").style.visibility = "visible";
    
    document.getElementById("nev").innerHTML = sokszoveg;
}