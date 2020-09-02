var klength;
var count;
var eNames = new Array(klength)
var i;

function Change(kor) { //korean to english
    const f = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
               'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
               'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    const s = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
               'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
               'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
    const t = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',  
               'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
               'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
               'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

    const ga = 44032;
    let uni = kor.charCodeAt(0); //seperate word

    uni = uni - ga;

    let fn = parseInt(uni / 588);
    let sn = parseInt((uni - (fn * 588)) / 28);
    let tn = parseInt(uni % 28);
    if(tn == 0 || fn == 11) { count = 2; var eTemp = new Array(count); }
    else { count = 3; var eTemp = new Array(klength); }
    var index = 0;

    switch(fn)
    { //백마[뱅마] Baengm   신문로[신문노] Sinmunno 종로[종노] Jongno
        case 0 : eTemp[index++] = "g"; break;
        case 2 : eTemp[index++] = "n"; break;
        case 3 : eTemp[index++] = "d"; break;
        case 5 : eTemp[index++] = "l"; break;
        case 6 : eTemp[index++] = "m"; break;
        case 7 : eTemp[index++] = "b"; break;
        case 9 : eTemp[index++] = "s"; break;
        case 12 : eTemp[index++] = "j"; break;
        case 14 : eTemp[index++] = "ch"; break;
        case 17 : eTemp[index++] = "p"; break;
        case 18 : eTemp[index++] = "h"; break;
    }

    switch(sn)
    {
        case 0 : eTemp[index++] = "a"; break;
        case 1 : eTemp[index++] = "ae"; break;
        case 2 : eTemp[index++] = "ya"; break;
        case 4 : eTemp[index++] = "eo"; break;
        case 5 : eTemp[index++] = "e"; break;
        case 6 : eTemp[index++] = "yeo"; break;
        case 7 : eTemp[index++] = "ye"; break;
        case 8 : eTemp[index++] = "o"; break;
        case 9 : eTemp[index++] = "wa"; break;
        case 11 : eTemp[index++] = "oe"; break;
        case 12 : eTemp[index++] = "yo"; break;
        case 13 : eTemp[index++] = "u"; break;
        case 18 : eTemp[index++] = "eu"; break;
        case 19 : eTemp[index++] = "ui"; break;
        case 20 : eTemp[index++] = "i"; break;
    }

    switch(tn)
    {
        case 1 : eTemp[index++] = "k"; break;
        case 4 : eTemp[index++] = "n"; break;
        case 7 : 
        case 22 :
        case 25 : 
            eTemp[index++] = "t"; break;
        case 8 : eTemp[index++] = "l"; break;
        case 16 : eTemp[index++] = "m"; break;
        case 21 : eTemp[index++] = "ng"; break;
    }
    console.log("!"+index)
    if(count==2) {
        if(tn == 0 && fn == 11) eNames[i] = eTemp[0];
        else eNames[i] = eTemp[0]+eTemp[1];
    }
    else eNames[i] = eTemp[0]+eTemp[1]+eTemp[2];
}

function show() //show english name
{
    var kName;
    kName = document.getElementById("input").value;
    klength = kName.length; var kNames = new Array(klength);

    for(i = 0; i < klength; i++){   
        kNames[i] = kName.charAt(i);
        Change(kNames[i]);
    }        
    if(klength == 2) eName = eNames[0]+eNames[1];
    else eName = eNames[0]+eNames[1]+eNames[2];

    document.getElementById("result").value = eName;
}

function enterkey() //enter event
{
    if (window.event.keyCode == 13) {
        show();
    }
   }