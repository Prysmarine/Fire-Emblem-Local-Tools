/* 
    some notes:
    some comments will be large ascii art blocks - this is to make it easier for me
    to see where sections are in the code preview provided by VS Code. It was generated
    from https://patorjk.com/software/taag/ using the "terrace" style art form.

*/



/* 
   ░███    ░██         ░██            ░██     ░██ ░███    ░██ ░██████░██████████  ░██████         
  ░██░██   ░██         ░██            ░██     ░██ ░████   ░██   ░██      ░██     ░██   ░██        
 ░██  ░██  ░██         ░██            ░██     ░██ ░██░██  ░██   ░██      ░██    ░██               
░█████████ ░██         ░██            ░██     ░██ ░██ ░██ ░██   ░██      ░██     ░████████        
░██    ░██ ░██         ░██            ░██     ░██ ░██  ░██░██   ░██      ░██            ░██       
░██    ░██ ░██         ░██             ░██   ░██  ░██   ░████   ░██      ░██     ░██   ░██        
░██    ░██ ░██████████ ░██████████      ░██████   ░██    ░███ ░██████    ░██      ░██████         
                                                                                                  
                                                                                                  
                                                                                                  
░███     ░███   ░██████   ░███████   ░██████░██████████░██████░██████████ ░█████████    ░██████   
░████   ░████  ░██   ░██  ░██   ░██    ░██  ░██          ░██  ░██         ░██     ░██  ░██   ░██  
░██░██ ░██░██ ░██     ░██ ░██    ░██   ░██  ░██          ░██  ░██         ░██     ░██ ░██         
░██ ░████ ░██ ░██     ░██ ░██    ░██   ░██  ░█████████   ░██  ░█████████  ░█████████   ░████████  
░██  ░██  ░██ ░██     ░██ ░██    ░██   ░██  ░██          ░██  ░██         ░██   ░██           ░██ 
░██       ░██  ░██   ░██  ░██   ░██    ░██  ░██          ░██  ░██         ░██    ░██   ░██   ░██  
░██       ░██   ░██████   ░███████   ░██████░██        ░██████░██████████ ░██     ░██   ░██████   
                                                                                                  
                                                                                                                                                                                                  
    object containing all the units stats, order is
     [ STR, MAG, SKL, SPD, LCK, DEF, RES, CHILD NAME, CHARACTER NAME ]
    ROBIN is left blank for calculations later based
     on selected boon and bane
     character name is used for selecting images to display
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
    "FREDRICK"  : [ 2,  -2,	 2,	-2,	 0,	 2,	 0, "", "FREDRICK"],
    "GAIUS"     : [ 1,	-1,	 2,	 2,	-2,	-1,	 0, "", "GAIUS"],
    "GANGREL"   : [-2,	 0,	 3,	 3,	-1,	-1,	 0, "", "GANGREL"],
    "GREGOR"    : [ 2,	-1,	 2,	 0,	-1,	 1,	-2, "", "GREGOR"],
    "HENRY"     : [ 1,	 1,	 2,	 0,	-2,	 1,	-1, "", "HENRY"],
    "KELLAM"    : [ 1,	 0,	 1,	-2,	-2,	 3,	 0, "", "KELLAM"],
    "LIBRA"     : [ 0,	 1,	 1,	 0,	-1,	 0,	 1, "", "LIBRA"],
    "LISSA"     : [-2,	 2,	-1,	 0,	 2,	-1,	 1, "Owain", "LISSA"],
    "LON'QU"    : [ 0,	 0,	 3,	 3,	 0,	-2,	-2, "", "Lon'qu"],
    "MARIBELLE" : [-3,	 2,	 1,	 0,	 3,	-3,	 2, "Brady", "MARIBELLE"],
    "MIRIEL"    : [-2,	 3,	 1,	 1,	 0,	-2,	 0, "Laurent", "MIRIEL"],
    "NOWI"      : [ 1,	 1,	-1,	-2,	 1,	 3,	 2, "Nah", "NOWI"],
    "OLIVIA"    : [ 0,	 0,	 1,	 1,	 0,	-1,	-1, "Inigo", "OLIVIA"],
    "PANNE"     : [ 2,	-1,	 2,	 3,	-1,	 1,	-1, "Yarne", "PANNE"],
    "PRIAM"     : [ 3,	-2,	 1,	 0,	 0,	 2,	-2, "", "PRIAM"],
    "RICKEN"    : [-1,	 2,	 0,	 0,	 1,	-1,	 0, "", "RICKEN"],
    "SAY'RI"    : [ 1,	-1,	 1,	 1,	-1,	 0,	 1, "", "SAY'RI"],
    "STAHL"     : [ 2,	-1,	 1,	 0,	-2,	 2,	-1, "", "STAHL"],
    "SULLY"     : [-1,	-1,	 2,	 2,	 0,	-1,	 0, "Kjelle", "SULLY"],
    "SUMIA"     : [-2,	 0,	 2,	 3,	 0,	-2,	 1, "Cynthia", "SUMIA"],
    "THARJA"    : [ 0,	 3,	-1,	 1,	-3,	 1,	 0, "Noire", "THARJA"],
    "TIKI"      : [ 0,	-1,	 0,	 1,	 2,	 1,	 2, "", "TIKI"],
    "VAIKE"     : [ 3,	-2,	 1,	 1,	-1,	 0,	-2, "", "VAIKE"],
    "VIRION"    : [ 0,	 0,	 2,	 2,	-1,	-2,	 0, "", "VIRION"],
    "WALHART"   : [ 4,	-2,	 0,	-1,	-1,	 4,	-2, "", "WALHART"],
    "YEN'FAY"   : [ 1,	-2,	 2,	 4,	 0,	-1,	-2, "", "YEN'FAY"],
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

  ░██████  ░██     ░██ ░██████░██         ░███████                                
 ░██   ░██ ░██     ░██   ░██  ░██         ░██   ░██                               
░██        ░██     ░██   ░██  ░██         ░██    ░██                              
░██        ░██████████   ░██  ░██         ░██    ░██                              
░██        ░██     ░██   ░██  ░██         ░██    ░██                              
 ░██   ░██ ░██     ░██   ░██  ░██         ░██   ░██                               
  ░██████  ░██     ░██ ░██████░██████████ ░███████                                
                                                                                  
                                                                                  
                                                                                  
░█████████     ░███    ░█████████  ░██████████ ░███    ░██ ░██████████  ░██████   
░██     ░██   ░██░██   ░██     ░██ ░██         ░████   ░██     ░██     ░██   ░██  
░██     ░██  ░██  ░██  ░██     ░██ ░██         ░██░██  ░██     ░██    ░██         
░█████████  ░█████████ ░█████████  ░█████████  ░██ ░██ ░██     ░██     ░████████  
░██         ░██    ░██ ░██   ░██   ░██         ░██  ░██░██     ░██            ░██ 
░██         ░██    ░██ ░██    ░██  ░██         ░██   ░████     ░██     ░██   ░██  
░██         ░██    ░██ ░██     ░██ ░██████████ ░██    ░███     ░██      ░██████   
                                                                                  
                                                                                  
                                                                                  
    object containing the available parents for each child unit
    the first two options are which seleect element to disable,
    and which value to set the element as. 

    [ DROP DOWN SELECT, ASSOCIATED PARENT, POSSIBLE PARENTS --> ]
*/
let childParentList = {
    "Lucina"  : ["unitSelectFather", "CHROM", "Robin F", "Sumia", "Maribelle", "Sully", "Olivia"],
    "Owain"   : ["unitSelectMother", "LISSA", "Robin M", "Frederick", "Virion", "Stahl", "Vaike", "Kellam", "Lon'qu", "Ricken", "Gaius", "Donnel", "Gregor", "Libra", "Henry"],
    "Inigo"   : ["unitSelectMother", "OLIVIA", "Robin M", "Chrom", "Frederick", "Virion", "Stahl", "Vaike", "Kellam", "Lon'que", "rocken", "Gaius", "Donnel", "Gregor", "Libra", "Henry"],
    "Brady"   : ["unitSelectMother", "MARIBELLE", "Robin M", "Chrom", "Frederick", "Virion", "Stahl", "Vaike", "Kellam", "Lon'que", "rocken", "Gaius", "Donnel", "Gregor", "Libra", "Henry"],
    "Kjelle"  : ["unitSelectMother", "SULLY", "Robin M", "Chrom", "Frederick", "Virion", "Stahl", "Vaike", "Kellam", "Lon'que", "rocken", "Gaius", "Donnel", "Gregor", "Libra", "Henry"],
    "Cynthia" : ["unitSelectMother", "SUMIA", "Robin M", "Chrom", "Frederick", "Gaius", "Henry"],
    "Severa"  : ["unitSelectMother", "CORDELIA", "Robin M", "Frederick", "Virion", "Stahl", "Vaike", "Kellam", "Lon'qu", "Ricken", "Gaius", "Donnel", "Gregor", "Libra", "Henry"],
    "Gerome"  : ["unitSelectMother", "CHERCHE", "Robin M", "Frederick", "Virion", "Stahl", "Vaike", "Kellam", "Lon'qu", "Ricken", "Gaius", "Donnel", "Gregor", "Libra", "Henry"],
    "Yarne"   : ["unitSelectMother", "PANNE", "Robin M", "Frederick", "Virion", "Stahl", "Vaike", "Kellam", "Lon'qu", "Ricken", "Gaius", "Donnel", "Gregor", "Libra", "Henry"],
    "Laurent" : ["unitSelectMother", "MIRIEL", "Robin M", "Frederick", "Virion", "Stahl", "Vaike", "Kellam", "Lon'qu", "Ricken", "Gaius", "Donnel", "Gregor", "Libra", "Henry"],
    "Noire"   : ["unitSelectMother", "THARJA", "Robin M", "Frederick", "Virion", "Stahl", "Vaike", "Kellam", "Lon'qu", "Ricken", "Gaius", "Donnel", "Gregor", "Libra", "Henry"],
    "Nah"     : ["unitSelectMother", "NOWI", "Robin M", "Frederick", "Virion", "Stahl", "Vaike", "Kellam", "Lon'qu", "Ricken", "Gaius", "Donnel", "Gregor", "Libra", "Henry"],
    "MorganF" : ["unitSelectFather", "ROBIN M"],
    "MorganM" : ["unitSelectMother", "ROBIN F"]

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

const childUnitList = ["Lucina", "Owain", "Inigo", 
                        "Brady", "Kjelle", "Cynthia", 
                        "Severa", "Gerome", "MorganF", 
                        "MorganM", "Yarne", "Laurent", 
                        "Noire", "Nah"];

var lastClicked = "";

/* combines the stat lines for mother and father to show childs base stats */

function statResult(){

    var father = document.getElementById("unitSelectFather").value;
    var mother = document.getElementById("unitSelectMother").value;
    

    var str = document.getElementById("STR_result");
    var mag = document.getElementById("MAG_result");
    var skl = document.getElementById("SKL_result");
    var spd = document.getElementById("SPD_result");
    var lck = document.getElementById("LCK_result");
    var def = document.getElementById("DEF_result");
    var res = document.getElementById("RES_result");

    const stats = [str, mag, skl, spd, lck, def, res];

    if ((mother.startsWith('--') && mother.endsWith('--'))
        && (father.startsWith('--') && father.endsWith('--'))
    ) {
        return;
    }

    if (father == "ROBIN M"){
        father = "ROBIN";
    }
    if (mother == "ROBIN F"){
        mother = "ROBIN";
    }

    if (mother.startsWith('--') && mother.endsWith('--'))
    {
        for (let i = 0; i < 7; i++){
            stats[i].textContent = unitList[father][i] + 1;
        }
        return;
    }
    
    if ((father.startsWith('--') && father.endsWith('--')))
    {
        for (let i = 0; i < 7; i++){
            stats[i].textContent = unitList[mother][i] + 1;
        }
        return;
    }




        /* 
            a generation 1 child will always have +1 over the state total of
            their parents, a gen 2 morgan does not get this bonus
        */
    for (let i = 0; i < 7; i++) {
        stats[i].textContent = unitList[father][i] + unitList[mother][i] + 1;

    }

}

/* modifies the unitList["Robin"] entry to be the proper stats with the selected boon and bane. */

/*
░██       ░██   ░██████   ░█████████  ░██     ░██ ░██████░███    ░██   ░██████  
░██       ░██  ░██   ░██  ░██     ░██ ░██    ░██    ░██  ░████   ░██  ░██   ░██ 
░██  ░██  ░██ ░██     ░██ ░██     ░██ ░██   ░██     ░██  ░██░██  ░██ ░██        
░██ ░████ ░██ ░██     ░██ ░█████████  ░███████      ░██  ░██ ░██ ░██ ░██  █████ 
░██░██ ░██░██ ░██     ░██ ░██   ░██   ░██   ░██     ░██  ░██  ░██░██ ░██     ██ 
░████   ░████  ░██   ░██  ░██    ░██  ░██    ░██    ░██  ░██   ░████  ░██  ░███ 
░███     ░███   ░██████   ░██     ░██ ░██     ░██ ░██████░██    ░███   ░█████░█ 
                                                                                
                                                                                
                                                                                
░██     ░██ ░██████████ ░█████████  ░██████████                                 
░██     ░██ ░██         ░██     ░██ ░██                                         
░██     ░██ ░██         ░██     ░██ ░██                                         
░██████████ ░█████████  ░█████████  ░█████████                                  
░██     ░██ ░██         ░██   ░██   ░██                                         
░██     ░██ ░██         ░██    ░██  ░██                                         
░██     ░██ ░██████████ ░██     ░██ ░██████████  

*/
function robinStats(){

    var boon = document.getElementById("boon");
    var bane = document.getElementById("bane");

    var str = document.getElementById("STR_robin");
    var mag = document.getElementById("MAG_robin");
    var skl = document.getElementById("SKL_robin");
    var spd = document.getElementById("SPD_robin");
    var lck = document.getElementById("LCK_robin");
    var def = document.getElementById("DEF_robin");
    var res = document.getElementById("RES_robin");

    const stats = [str, mag, skl, spd, lck, def, res];

/* Disabling the Bane list based on selected Boon */
    for (let option of bane.options) 
    {
        option.disabled = false;

        if (option.value == boon.value || option.value.startsWith('--')){
            option.disabled = true;
        }
    }

    for (let option of boon.options) 
    {
        option.disabled = false;

        if (option.value == bane.value || option.value.startsWith('--')){
            option.disabled = true;
        }
    }


    if ((boon.value.startsWith('--') && boon.value.endsWith('--'))
        || (bane.value.startsWith('--') && bane.value.endsWith('--'))
    ) {
        return;
    }



    for (let i = 0; i < 7; i++) {

        stats[i].textContent = boonList[boon.value][i] + baneList[bane.value][i];
        unitList["ROBIN"][i] = boonList[boon.value][i] + baneList[bane.value][i];
        
    }

    updateDisplay();

}

/* updates the selected mother and father images */

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
        motherPort.src = "icons/motherDefault.png";
    } else {
        motherPort.src = "icons/" + unitList[mother][name] + "Icon.png";
    }

    if (father == "ROBIN M")
        {
            father = "ROBIN";
            name = 9;
        }

    if (father.startsWith('--') && father.endsWith('--')) {
        fatherPort.src = "icons/fatherDefault.png";
    } else {
        fatherPort.src = "icons/" + unitList[father][name] + "Icon.png"; 
    }

}

/* on body load resets selections and icons to default values */
function defaultSelections() {
    document.getElementById("unitSelectMother").selectedIndex = 0;
    document.getElementById("unitSelectFather").selectedIndex = 0;
    document.getElementById("motherPortrait").src = "icons/motherDefault.png";
    document.getElementById("fatherPortrait").src = "icons/fatherDefault.png";
    document.getElementById("boon").selectedIndex = 0;
    document.getElementById("bane").selectedIndex = 0;

}

/* enables/disables the ability to select certain parents based on select child unit */
function parentDisable() {
    /* yet to be implemented */
}

    /* this will be a large function, broken down by original code
        will use large comments to block the sections
    */
function updateDisplay() {

        /*

        ░███     ░███   ░██████   ░██████████░██     ░██ ░██████████ ░█████████  
        ░████   ░████  ░██   ░██      ░██    ░██     ░██ ░██         ░██     ░██ 
        ░██░██ ░██░██ ░██     ░██     ░██    ░██     ░██ ░██         ░██     ░██ 
        ░██ ░████ ░██ ░██     ░██     ░██    ░██████████ ░█████████  ░█████████  
        ░██  ░██  ░██ ░██     ░██     ░██    ░██     ░██ ░██         ░██   ░██   
        ░██       ░██  ░██   ░██      ░██    ░██     ░██ ░██         ░██    ░██  
        ░██       ░██   ░██████       ░██    ░██     ░██ ░██████████ ░██     ░██ 

        */
        var mother = document.getElementById("unitSelectMother").value;
        var childDisplay = document.getElementById("childMother");

                    
        /* collecting the list of <div> to display stats */
        var strMother = document.getElementById("STR_mother");
        var magMother = document.getElementById("MAG_mother");
        var sklMother = document.getElementById("SKL_mother");
        var spdMother = document.getElementById("SPD_mother");
        var lckMother = document.getElementById("LCK_mother");
        var defMother = document.getElementById("DEF_mother");
        var resMother = document.getElementById("RES_mother");

        /* 
            putting them in an array so that they can be looped instead of 
            manually called, this is why order is important and consistent
        */
        const statsMother = [strMother, magMother, sklMother, spdMother, lckMother, defMother, resMother];

        if (!mother.startsWith('--') && !mother.endsWith('--')) {


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
                statsMother[i].textContent = unitList[mother][i];                
            }
            childDisplay.textContent = unitList[mother][7];

        } else {
            for (let i = 0; i < 7; i++) {
                statsMother[i].textContent = 0;

            }
        }


        /*

        ░██████████   ░███    ░██████████░██     ░██ ░██████████ ░█████████  
        ░██          ░██░██       ░██    ░██     ░██ ░██         ░██     ░██ 
        ░██         ░██  ░██      ░██    ░██     ░██ ░██         ░██     ░██ 
        ░█████████ ░█████████     ░██    ░██████████ ░█████████  ░█████████  
        ░██        ░██    ░██     ░██    ░██     ░██ ░██         ░██   ░██   
        ░██        ░██    ░██     ░██    ░██     ░██ ░██         ░██    ░██  
        ░██        ░██    ░██     ░██    ░██     ░██ ░██████████ ░██     ░██ 

        */
        var father = document.getElementById("unitSelectFather").value;
        var childDisplay = document.getElementById("childFather");
            
        /* collecting the list of <div> to display stats */
        var strFather = document.getElementById("STR_father");
        var magFather = document.getElementById("MAG_father");
        var sklFather = document.getElementById("SKL_father");
        var spdFather = document.getElementById("SPD_father");
        var lckFather = document.getElementById("LCK_father");
        var defFather = document.getElementById("DEF_father");
        var resFather = document.getElementById("RES_father");

        /* 
            putting them in an array so that they can be looped instead of 
            manually called, this is why order is important and consistent
        */
        const statsFather = [strFather, magFather, sklFather, spdFather, lckFather, defFather, resFather];

        if (!father.startsWith('--') && !father.endsWith('--')) {


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
                statsFather[i].textContent = unitList[father][i];                
            }
            childDisplay.textContent = unitList[father][7];
            

        } else {
            for (let i = 0; i < 7; i++) {
                statsFather[i].textContent = 0;
            }
        }

        statResult();
        parentPortrait();
        
    }

function childImageClick(id) {

/* toggle darken on the clicked icon */
    div = document.getElementById(id);
    div.classList.toggle("darken");

    if (lastClicked == id) {
        document.getElementById("unitSelectMother").removeAttribute("disabled");
        document.getElementById("unitSelectFather").removeAttribute("disabled");
        document.getElementById("unitSelectMother").selectedIndex = 0;
        document.getElementById("unitSelectFather").selectedIndex = 0;
    } else {
        lastClicked = id;
    
        var selector = document.getElementById(childParentList[id][0]);
        var parent = childParentList[id][1];

/* resets any previous disables and resets selected index before apply new parameters */
        document.getElementById("unitSelectMother").removeAttribute("disabled");
        document.getElementById("unitSelectFather").removeAttribute("disabled");
        document.getElementById("unitSelectMother").selectedIndex = 0;
        document.getElementById("unitSelectFather").selectedIndex = 0;
    
/* sets the selector to the correct parent, and disables it */
        for (let i = 0; i < selector.length; i++) 
        {
            if (selector.options[i].text == parent)
            {
                selector.selectedIndex = i;
                selector.setAttribute("disabled", "disabled");
                break;
            }
        }
/* undarkens any previously clicked icon */
        for (let i = 0; i < 14; i++)
        {
            if (childUnitList[i] != id &&
                document.getElementById(childUnitList[i]).classList.contains("darken")) 
                {
                document.getElementById(childUnitList[i]).classList.toggle("darken");            
            }
        }
    }

/* 
    sets default icons to defaults before calling updateDisplay() to have the correct
    parent icons displayed 
*/
    document.getElementById("motherPortrait").src = "icons/motherDefault.png";
    document.getElementById("fatherPortrait").src = "icons/fatherDefault.png";
    updateDisplay();
}
