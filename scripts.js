/* 
    as a note to myself and to whoever looks,
    I have written this in a way to make it (hopefully)
    easier to manage with less code. unless necessary 
    I don't want to have several indivudal calls to 
    specific items. this is also why stats are shorthanded
    everywhere to make it easier to match things and
    make sure the order is correct. 

*/



/* 
    object containing all the units stats, order is
     [ STR, MAG, SKL, SPD, LCK, DEF, RES, child name ]
    ROBIN is left blank for calculations later based
     on selected boon and bane
*/
let unitList = {
    "ANNA"      : [-1,   0,  1,  0,  3, -1,  0, "", "ANNA"],
    "AVERSA"    : [-1,	 3,	 1,	 1,	-2,	 0,	 0, "", "AVERSA"],
    "BASILIO"   : [ 3,	-2,	 1,	 1,	-1,	 1,	-1, "", "BASILIO"],
    "CHERCHE"   : [ 3,	 0,	-1,	-1,	 0,	 2,	-2, "Gerome", "CHERCHE"],
    "CHROM"     : [ 1,	 0,	 1,	 1,	 1,	-1,	-1, "Lucina", "CHROM"],
    "CORDELIA"  : [ 1,	-1,	 2,	 2,	-1,	 0,	-1, "Severa", "CORDELIA"],
    "DONNEL"    : [ 1,	-1,	-1,	-1,	 3,	 1,	-1, "", "DONNEL"],
    "EMMERYN"   : [-2,	 4,	 0,	 1,	 0,	-2,	 1, "", "EMMERYN"],
    "FLAVIA"    : [ 1,	-1,	 2,	 1,	 0,	-1,	 0, "", "FLAVIA"],
    "FREDRICK" : [ 2,	-2,	 2,	-2,	 0,	 2,	 0, "", "FREDRICK"],
    "GAIUS"     : [ 1,	-1,	 2,	 2,	-2,	-1,	 0, "", "GAIUS"],
    "GANGREL"   : [-2,	 0,	 3,	 3,	-1,	-1,	 0, "", "GANGREL"],
    "GREGOR"    : [ 2,	-1,	 2,	 0,	-1,	 1,	-2, "", "GREGOR"],
    "HENRY"     : [ 1,	 1,	 2,	 0,	-2,	 1,	-1, "", "HENRY"],
    "KELLAM"    : [ 1,	 0,	 1,	-2,	-2,	 3,	 0, "", "KELLAM"],
    "LIBRA"     : [ 0,	 1,	 1,	 0,	-1,	 0,	 1, "", "LIBRA"],
    "LISSA"     : [-2,	 2,	-1,	 0,	 2,	-1,	 1, "Owain", "LISSA"],
    "LON’QU"    : [ 0,	 0,	 3,	 3,	 0,	-2,	-2, "", "Lon'qu"],
    "MARIBELLE" : [-3,	 2,	 1,	 0,	 3,	-3,	 2, "Brady", "MARIBELLE"],
    "MIRIEL"    : [-2,	 3,	 1,	 1,	 0,	-2,	 0, "Laurent", "MIRIEL"],
    "NOWI"      : [ 1,	 1,	-1,	-2,	 1,	 3,	 2, "Nah", "NOWI"],
    "OLIVIA"    : [ 0,	 0,	 1,	 1,	 0,	-1,	-1, "Inigo", "OLIVIA"],
    "PANNE"     : [ 2,	-1,	 2,	 3,	-1,	 1,	-1, "Yarne", "PANNE"],
    "PRIAM"     : [ 3,	-2,	 1,	 0,	 0,	 2,	-2, "", "PRIAM"],
    "RICKEN"    : [-1,	 2,	 0,	 0,	 1,	-1,	 0, "", "RICKEN"],
    "SAY’RI"    : [ 1,	-1,	 1,	 1,	-1,	 0,	 1, "", "SAY’RI"],
    "STAHL"     : [ 2,	-1,	 1,	 0,	-2,	 2,	-1, "", "STAHL"],
    "SULLY"     : [-1,	-1,	 2,	 2,	 0,	-1,	 0, "Kjelle", "SULLY"],
    "SUMIA"     : [-2,	 0,	 2,	 3,	 0,	-2,	 1, "Cynthia", "SUMIA"],
    "THARJA"    : [ 0,	 3,	-1,	 1,	-3,	 1,	 0, "Noire", "THARJA"],
    "TIKI"      : [ 0,	-1,	 0,	 1,	 2,	 1,	 2, "", "TIKI"],
    "VAIKE"     : [ 3,	-2,	 1,	 1,	-1,	 0,	-2, "", "VAIKE"],
    "VIRION"    : [ 0,	 0,	 2,	 2,	-1,	-2,	 0, "", "VIRION"],
    "WALHART"   : [ 4,	-2,	 0,	-1,	-1,	 4,	-2, "", "WALHART"],
    "YEN’FAY"   : [ 1,	-2,	 2,	 4,	 0,	-1,	-2, "", "YEN’FAY"],
    "OWAIN"     : [-1,	 3,	 0,	 1,	 3,	 0,	 2, "", "OWAIN"],
    "INIGO"     : [ 1,	 1,	 2,	 2,	 1,	 0,	 0, "", "INIGO"],
    "BRADY"     : [-2,	 3,	 2,	 1,	 4,	-2,	 3, "", "BRADY"],
    "KJELLE"    : [ 0,	 0,	 3,	 3,	 1,	 0,	 1, "", "KJELLE"],
    "CYNTHIA"   : [-1,	 1,	 3,	 4,	 1,	-1,	 2, "", "CYNTHIA"],
    "SEVERA"    : [ 2,	 0,	 3,	 3,	 0,	 1,	 0, "", "SEVERA"],
    "GEROME"    : [ 4,	 1,	 0,	 0,	 1,	 3,	-1, "", "GEROME"],
    "YARNE"     : [ 3,	 0,	 3,	 4,	 0,	 2,	 0, "", "YARNE"],
    "LAURENT"   : [-1,	 4,	 2,	 2,	 1,	-1,	 1, "", "LAURENT"],
    "NOIRE"     : [ 1,	 4,	 0,	 2,	-2,	 2,	 1, "", "NOIRE"],
    "NAH"       : [ 2,	 2,	 0,	-1,	 2,	 4,	 3, "", "NAH"],
    "LUCINA"    : [ 2,	 1,	 2,	 2,	 2,	 0,	 0, "", "LUCINA"],
    "ROBIN"     : [ 0,   0,  0,  0,  0,  0,  0, "Morgan", "ROBIN_F", "ROBIN_M"]
}

/*
    Robin's stat lines for boon and bane calculations
    [ STR, MAG, SKL, SPD, LCK, DEF, RES]
*/
let boonList = {
    "HP"  : [ 1,  1,  0,  0,  2,  2,  2],
    "STR" : [ 4,  0,  2,  0,  0,  2,  0],
    "MAG" : [ 0,  4,  0,  2,  0,  0,  2],
    "SKL" : [ 2,  0,  4,  0,  0,  2,  0],
    "SPD" : [ 0,  0,  2,  4,  2,  0,  0],
    "LCK" : [ 2,  2,  0,  0,  4,  0,  0],
    "DEF" : [ 0,  0,  0,  0,  2,  4,  2],
    "RES" : [ 0,  2,  0,  2,  0,  0,  4]
}

let baneList = {
    "HP"  : [-1, -1,  0,  0, -1, -1, -1],
    "STR" : [-3,  0, -1,  0,  0, -1,  0],
    "MAG" : [ 0, -3,  0, -1,  0,  0, -1],
    "SKL" : [-1,  0, -3,  0,  0, -1,  0],
    "SPD" : [ 0,  0, -1, -3, -1,  0,  0],
    "LCK" : [-1, -1,  0,  0, -3,  0,  0],
    "DEF" : [ 0,  0,  0,  0, -1, -3, -1],
    "RES" : [ 0, -1,  0, -1,  0,  0, -3]    
}

/*
    function for when the <select> for mothers gets changed
    both changeMother() and changeFather() will be commented 
    the same as they do the same thing
*/

function changeMother(){
    var mother = document.getElementById("unitSelectMother").value;
    var childDisplay = document.getElementById("childMother");

    if (mother.startsWith('--') && mother.endsWith('--')) {
        return;
    }

    /* collecting the list of <div> to display stats */
    var str = document.getElementById("STR_mother");
    var mag = document.getElementById("MAG_mother");
    var skl = document.getElementById("SKL_mother");
    var spd = document.getElementById("SPD_mother");
    var lck = document.getElementById("LCK_mother");
    var def = document.getElementById("DEF_mother");
    var res = document.getElementById("RES_mother");

    /* 
        putting them in an array so that they can be looped instead of 
        manually called, this is why order is important and consistent
    */
    const stats = [str, mag, skl, spd, lck, def, res];

    /* 
        convers the ROBIN F name so that one array can be shared
        between both M and F versions as there is no difference
        aside from marriage candidates
    */
        if (mother == "ROBIN F")
        {
            mother = "ROBIN";
        }
        
        for (let i = 0; i < 7; i++) {
            stats[i].textContent = unitList[mother][i];                
        }
        childDisplay.textContent = unitList[mother][7];
    

        statResult();
        parentPortrait();
}

/*
    function for when the <select> for fathers gets changed
    both changeMother() and changeFather() will be commented 
    the same as they do the same thing
*/

function changeFather(){
    var father = document.getElementById("unitSelectFather").value;
    var childDisplay = document.getElementById("childFather");

    if (father.startsWith('--') && father.endsWith('--')) {
        return;
    }

    /* collecting the list of <div> to display stats */
    var str = document.getElementById("STR_father");
    var mag = document.getElementById("MAG_father");
    var skl = document.getElementById("SKL_father");
    var spd = document.getElementById("SPD_father");
    var lck = document.getElementById("LCK_father");
    var def = document.getElementById("DEF_father");
    var res = document.getElementById("RES_father");

    /* 
        putting them in an array so that they can be looped instead of 
        manually called, this is why order is important and consistent
    */
    const stats = [str, mag, skl, spd, lck, def, res];

    /* 
        convers the ROBIN F name so that one array can be shared
        between both M and F versions as there is no difference
        aside from marriage candidates
    */
        if (father == "ROBIN M")
        {
            father = "ROBIN";
        }
        
        for (let i = 0; i < 7; i++) {
            stats[i].textContent = unitList[father][i];                
        }
        childDisplay.textContent = unitList[father][7];
    
        statResult();
        parentPortrait();
}

/* 
    combines the stat lines for mother and father to show childs
    base stats.  
*/

function statResult(){
    var father = document.getElementById("unitSelectFather").value;
    var mother = document.getElementById("unitSelectMother").value;

    if ((father.startsWith('--') && father.endsWith('--'))
        || (mother.startsWith('--') && mother.endsWith('--'))
    ) {
        return;
    }

    var str = document.getElementById("STR_result");
    var mag = document.getElementById("MAG_result");
    var skl = document.getElementById("SKL_result");
    var spd = document.getElementById("SPD_result");
    var lck = document.getElementById("LCK_result");
    var def = document.getElementById("DEF_result");
    var res = document.getElementById("RES_result");

    const stats = [str, mag, skl, spd, lck, def, res];

    if (father == "ROBIN M"){
        father = "ROBIN";
    }
    if (mother == "ROBIN F"){
        mother = "ROBIN";
    }

        /* 
            a generation 1 child will always have +1 over the state total of
            their parents, a gen 2 morgan does not get this bonus
        */
    for (let i = 0; i < 7; i++) {
        stats[i].textContent = unitList[father][i] + unitList[mother][i] + 1;

    }

}

/*
    modifies the unitList["Robin"] entry to be the proper stats with 
    the selected boon and bane.
*/
function robinStats(){
    var boon = document.getElementById("boon").value;
    var bane = document.getElementById("bane").value;
    var str = document.getElementById("STR_robin");
    var mag = document.getElementById("MAG_robin");
    var skl = document.getElementById("SKL_robin");
    var spd = document.getElementById("SPD_robin");
    var lck = document.getElementById("LCK_robin");
    var def = document.getElementById("DEF_robin");
    var res = document.getElementById("RES_robin");


    if ((boon.startsWith('--') && boon.endsWith('--'))
        || (bane.startsWith('--') && bane.endsWith('--'))
    ) {
        return;
    }

    
    const stats = [str, mag, skl, spd, lck, def, res];

    for (let i = 0; i < 7; i++) {

        
        
        
        stats[i].textContent = boonList[boon][i] + baneList[bane][i];
        unitList["ROBIN"][i] = boonList[boon][i] + baneList[bane][i];
        
    }

}

/*
    A function for updating the selected mother and father images
*/

function parentPortrait(){

    var motherPort = document.getElementById("motherPortrait");
    var fatherPort = document.getElementById("fatherPortrait");
    var mother = document.getElementById("unitSelectMother").value;
    var father = document.getElementById("unitSelectFather").value;
    var name = 8;


    if (mother == "ROBIN F")
        {
            mother = "ROBIN";
        }

    if (mother.startsWith('--') && mother.endsWith('--')) {
        motherPort.src = null;
    } else {
        motherPort.src = "full/" + unitList[mother][name] + "Icon.png";
    }

    if (father == "ROBIN M")
        {
            father = "ROBIN";
            name = 9;
        }

    if (father.startsWith('--') && father.endsWith('--')) {
        fatherPort.src = null;
    } else {
        fatherPort.src = "icons/" + unitList[father][name] + "Icon.png";
    }

}

