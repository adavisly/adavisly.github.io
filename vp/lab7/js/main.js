//задание 1
console.log("Задание 1\n");
var symbols = new Array();
symbols[0] = "а";
symbols[1] = "б";
symbols[2] = "в";
symbols[3] = "г";
symbols[4] = "д";
symbols[5] = "е";
symbols[6] = "ё";
symbols[7] = "ж";
symbols[8] = "з";
symbols[9] = "и";
symbols[10] = "й";
symbols[11] = "к";
symbols[12] = "л";
symbols[13] = "м";
symbols[14] = "н";
symbols[15] = "о";
symbols[16] = "п";
symbols[17] = "р";
symbols[18] = "с";
symbols[19] = "т";
symbols[20] = "у";
symbols[21] = "ф";
symbols[22] = "х";
symbols[23] = "ц";
symbols[24] = "ч";
symbols[25] = "ш";
symbols[26] = "щ";
symbols[27] = "ъ";
symbols[28] = "ы";
symbols[29] = "ь";
symbols[30] = "э";
symbols[31] = "ю";
symbols[32] = "я";
symbols[33] = " ";
symbols[34] = ".";
symbols[35] = ",";
symbols[36] = "?";
symbols[37] = "!";

var encodedSymbols = new Array();
encodedSymbols[0] = 16;
encodedSymbols[1] = 17;
encodedSymbols[2] = 9;
encodedSymbols[3] = 2;
encodedSymbols[4] = 5;
encodedSymbols[5] = 19;
encodedSymbols[6] = 35;
encodedSymbols[7] = 33;
encodedSymbols[8] = 13;
encodedSymbols[9] = 9;
encodedSymbols[10] = 17;
encodedSymbols[11] = 37;

var result = "";

function decodeSymbols(symbols, encodedSymbols)
{
    for (let i = 0; i < encodedSymbols.length; i++)
    {
        result += symbols[encodedSymbols[i]];
    }
}

decodeSymbols(symbols, encodedSymbols);
console.log("Расшифрованное сообщение: " + result);

//Задание 2

console.log("\nЗадание 2\n");
var attempts = [4, 7, 3, 14, 9, 16, 10];
var qualificationDistance = 10;
var bestJump1 = 0, bestJump2 = 0, bestJump3 = 0;
var qualified = false;
var averageBest = 0;

function compareNumeric(a, b) 
{
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

attempts.sort(compareNumeric);

bestJump1 = attempts[attempts.length - 1];
bestJump2 = attempts[attempts.length - 2];
bestJump3 = attempts[attempts.length - 3];

averageBest = (bestJump1 + bestJump2 + bestJump3) / 3;


if (averageBest > qualificationDistance)
{
    qualified = true;
    console.log("Прошел квалификацию");
}
else
{
    console.log("Не прошел квалификацию");
}

//Задание 3

console.log("\nЗадание 3\n");

var time = 180, urgency = true;
var fixedRate = 1500;

function getPrice(time, urgency)
{
    
    if (time > 150)
    {
        fixedRate -= 250;
    }

    if (urgency)
    {
        time /= 2;
        fixedRate *= 2.5;
    }

    return time * fixedRate;
}

console.log("Стоимость проекта: " + getPrice(time, urgency) + " рублей");


//Задание 4

console.log("\nЗадание 4\n");
var coefficient = 0, percent = 0, sum = 0;

function Player(name, goals, passes)
{
    this.name = name;
    this.goals = goals;
    this.passes = passes;
}

var player1 = new Player("name1", 15, 3);
var player2 = new Player("name2", 10, 4);
var player3 = new Player("name3", 4, 0);
var player4 = new Player("name4", 17, 5);

var players = [player1, player2, player3, player4];

function getStatistics(players)
{
    for (let i = 0; i < players.length; i++)
    {
    sum += players[i].goals;
    }
    for (let i = 0; i < players.length; i++)
    {
    coefficient = players[i].goals * 2 + players[i].passes;
    percent = Math.round(players[i].goals / sum * 100);
    players[i]["coefficient"] = coefficient;
    players[i]["percent"] = percent;
    }
    return players;
}

console.log(getStatistics(players));



/*
function sayHello(userName) 
{
    //alert("Hello " + userName);
    return "Hello, " + userName + "!";
}
var s = sayHello("Вася");
console.log(s);

var sayHello1 = function(userName)
{
    return "Hello, " + userName + "!";
}

console.log(sayHello1("Петя"));


var arr = new Array();
arr[0] = "элемент 1";
arr[1] = "элемент 2";

for (let i = 2; i < 10; i++)
{
    arr[i] = "элемент " + i;
}

console.log(arr);

/*var s = "Hello world";
console.log(s + 5);

console.log('2' * 100);

for (let i = 0; i < 10; i++)
{
    console.log(i);
    if (i == 3) break;
}
*/
/*
var a = 2;

switch (a)
{
    case 2:
        alert("два");
        break;
}
*/


/*
for (let i = 1; i < attempts.length; i++)//нахождение первого максимума
{
    if (attempts[indexBestJump1] < attempts[i])
    {
        indexBestJump1 = i;
        bestJump1 = attempts[i];
    }
}
for (let i = indexBestJump1 + 1; i < attempts.length; i++)//удаление максимума
{
    attempts[i - 1] = attempts[i];
}


for (let i = 1; i < attempts.length; i++)
{
    if (attempts[indexBestJump2] < attempts[i])
    {
        indexBestJump2 = i;
        bestJump2 = attempts[i];
    }
}
for (let i = indexBestJump2 + 1; i < attempts.length; i++)//удаление максимума
{
    attempts[i - 1] = attempts[i];
}


for (let i = 1; i < attempts.length; i++)
{
    if (attempts[indexBestJump3] < attempts[i])
    {
        indexBestJump3 = i;
        bestJump3 = attempts[i];
    }
}
for (let i = indexBestJump3 + 1; i < attempts.length; i++)//удаление максимума
{
    attempts[i - 1] = attempts[i];
}
*/

