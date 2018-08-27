/* 
 * Luke Draper
 * Algorithm App Book - Chapters 0 & 1
 * Assignment Pages 16, 20, 22
 * https://s3.amazonaws.com/General_V88/boomyeah2015/codingdojo/curriculum/content/chapter/Algorithm_Book_CD_30_pages.pdf
 */

console.log("Page 16");

console.log("Setting and Swapping");

var myNumber = 42;
var myName = "Luke";

var temp = myName;
myName = myNumber;
myNumber = temp;

console.log("Print -52 to 1066");

for (var i=-52; i<=1066; i++) {
    console.log(i);
}

console.log("Don't Worry, Be Happy");

function beCheerful() {
    console.log("good morning!");
}

for (var j = 0; j<98; j++) {
    beCheerful();
}

console.log("Multiples of Three - but Not All");

for (var k = -300; k<=0; k+=3) {
    if (k!=-3 && k!=-6) {
        console.log(k);
    }
}

console.log("Printing Integers with While");

var whileIterator = 2000;

while (whileIterator <= 5280) {
    console.log(whileIterator);
    whileIterator++;
}

console.log("You Say It's Your Birthday");

function sayBirthday(num1, num2) {
    if ((num1 == 1 && num2 == 9) || (num2 == 1 && num1 == 9)) {
        console.log("How did you know?");
    } else {
        console.log("Just another day...");
    }
}

sayBirthday(2,9);
sayBirthday(9,1);

console.log("Leap Year");

function isLeapYear(year) {
    var output = true;
    if (year % 4 != 0) {
        output = false;
    } else if (year % 400 != 0 && year % 100 == 0) {
        output = false;
    }
    return output;
}

console.log(isLeapYear(3)); //false
console.log(isLeapYear(4)); //true
console.log(isLeapYear(100)); //false
console.log(isLeapYear(400)); //true

console.log("Print and Count");

var accumulator = 0;
for (var l=512; l<=4096; l++) {
    if (l%5 == 0) {
        console.log(l);
        accumulator++;
    }
}
console.log(accumulator);

console.log("Multiples of Six");

var sixCounter = 0;
while (sixCounter<=60000) {
    console.log(sixCounter);
    sixCounter += 6;
}

console.log("Counting, the Dojo Way");

for (var m=1; m<=100; m++) {
    if (m%5 == 0) {
        var logText = "Coding";
        if (m%10 == 0) {
            logText += " Dojo";
        }
        console.log(logText);
    } else {
        console.log(m);
    }
}

console.log("What Do You Know?");

function logInput(input) {
    console.log(input);
}

logInput("input");

console.log("Whoa, That Sucker’s Huge…");

/*
//This sums to 0 and thus the calculation does not need to be done.
//Here is the code to perform the calculation to show how it would be done if necessary

var accumulator = 0;
for (var h=-299999; h<=300000; h+=2) {
    accumulator+=h;
}
console.log(accumulator);
*/

console.log(0);

console.log("Countdown by Fours");

var fourCounter = 2016;
while (fourCounter>0) {
    console.log(fourCounter);
    fourCounter-=4;
}

console.log("Flexible Countdown");

function flexCountdown(lowNum, highNum, mult) {
    for (highNum; highNum>=lowNum; highNum-=mult) {
        console.log(highNum);
    }
}

flexCountdown(2, 9, 3);

console.log("The Final Countdown");

function finalCountdown(param1, param2, param3, param4) { //multiples of, from, to, except
    var start = param2;
    var end = param3;
    while (start <= end) {
        if (start % param1 == 0 && start != param4) {
            console.log(start);
        }
        start++;
    }
}

finalCountdown(3,5,17,9);

console.log("Page 20");

console.log("Countdown");

function countdown(number) {
    var arr = [number];
    for (var o=number-1; o>=0; o--) {
        arr.push(o);
    }
    return arr;
}

console.log(countdown(6));
console.log(countdown(6).length);

console.log("Print and Return");

function printReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}

console.log(printReturn([2,3]));

console.log("First Plus Length");

function firstLength(arr) {
    return arr[0]+arr.length;
}

console.log(firstLength([6,2,3,4,5])); //11
console.log(firstLength(["first",2,3,4,5])); //first5
console.log(firstLength([true,2,3,4,5])); //6
console.log(firstLength([false,2,3,4,5])); //5

console.log("Values Greater than Second");

var valueGreatrCounter = 0;
var valueGreaterArray = [1,3,5,7,9,13];
for (var p=0; p<valueGreaterArray.length; p++) {
    if (valueGreaterArray[p]>valueGreaterArray[1]) {
        console.log(valueGreaterArray[p]);
        valueGreatrCounter++;
    }
}
console.log(valueGreatrCounter);

console.log("Values Greater than Second, Generalized");

function greaterSecond(arr) {
    if (arr.length<2) {
        console.log("array too short");
        return [];
    } else {
        var counter = 0;
        var arrnew = [];
        for (var q=0; q<arr.length; q++) {
            if (arr[q]>arr[1]) {
                arrnew.push(arr[q]);
            }
        }
        console.log(arrnew.length);
        return arrnew;
    }
}

console.log(greaterSecond([1,3,5,7,9,13]));

console.log("This Length, That Value");

function lengthValue(num1, num2) {
    if (num1==num2) {
        console.log("Jinx!");
    }
    var out = [];
    for (var r=0; r<num1; r++) {
        out.push(num2);
    }
    return out;
}

console.log(lengthValue(3,4));
console.log(lengthValue(4,4));

console.log("Fit the First Value");

function fitFirst(arr) {
    if (arr[0] > arr.length) {
        console.log("Too big!");
    } else if (arr[0] < arr.length) {
        console.log("Too small!");
    } else {
        console.log("Just right!");
    }
}

fitFirst([0]);
fitFirst([1]);
fitFirst([2]);

console.log("Fahrenheit to Celsius");

function fahrenheitToCelsius(fDegrees) {
    return ((fDegrees - 32) * 5 / 9);
}

console.log(fahrenheitToCelsius(45));

console.log("Celsius to Fahrenheit");

function celsiusToFahrenheit(cDegrees) {
    return ((cDegrees * 1.8) + 32);
}

console.log(celsiusToFahrenheit(45));

console.log("(Optional) Celsius and Fahrenheit are equivalent at -40 degrees");

console.log("Page 22");

console.log("Biggie Size");

function makeItBig(arr) {
    for (var u=0; u<arr.length; u++) {
        if (arr[u] >= 0) {
            arr[u] = "big";
        }
    }
    return arr;
}

console.log(makeItBig([-1,3,5,-5]));

console.log("Print Low, Return High");

function helperMax(arr) {
    var max = arr[0];
    if (arr.length>1) {
        for (var s=1; s<arr.length; s++) {
            if (arr[s] > max) {
                max = arr[s];
            }
        }
    }
    return max;
}

function helperMin(arr) {
    var min = arr[0];
    if (arr.length>1) {
        for (var t=1; t<arr.length; t++) {
            if (arr[t] < min) {
                min = arr[t];
            }
        }
    }
    return min;
}

function printLowReturnHigh(arr) {
    console.log(helperMin(arr));
    return helperMax(arr);
}

console.log(printLowReturnHigh([-1,3,5,-5]));

console.log("Print One, Return Another");

function printOneReturnAnother(arr) {
    console.log(arr[arr.length-2]);
    var out = 0;
    for (var v=0; v<arr.length; v++) {
        if (arr[v]%2 == 1) {
            out = arr[v];
            break;
        }
    }
    return out;
}

console.log(printOneReturnAnother([2,3,4,5]));

console.log("Double Vision");

function double(arr) {
    var arrnew = [];
    for (var w=0; w<arr.length; w++) {
        arrnew.push(arr[w]*2);
    }
    return arrnew;
}

console.log(double([2,3,4,5]));

console.log("Count Positives");

function countPositive(arr) {
    var counter = 0;
    for (var x=0; x<arr.length; x++) {
        if (arr[x] >= 0) {
            counter++;
        }
    }
    arr[arr.length-1] = counter;
    return arr;
}

console.log(countPositive([-1,1,1,1]));

console.log("Evens and Odds");

function evensAndOdds(arr) {
    var oddCounter = 0;
    var evenCounter = 0;
    for (var y=0; y<arr.length; y++) {
        if (arr[y]%2 == 0) {
            oddCounter = 0;
            evenCounter++;
            
        } else {
            evenCounter = 0;
            oddCounter++;
        }
        if (oddCounter>=3) {
            console.log("That's odd!");
        } else if (evenCounter>=3) {
            console.log("Even more so!");
       }
    }
}

evensAndOdds([1,1,1,1,2,2,2,1,1,1,2,2,2]);

console.log("Increment the Seconds");

function incrementSeconds(arr) {
    for (var z=0; z<arr.length; z++) {
        if (arr[z]%2 == 1) {
            arr[z] = arr[z]+1;
        }
        console.log(arr[z]);
    }
    return arr;
}

console.log(incrementSeconds([1,2,3,4,5,6,7,8,9]));

console.log("Previous Lengths");

function previousLengths(arr) {
    var tempA = arr[1];
    var tempB = arr[0];
    arr[0] = 0;
    for (var ab=1; ab<arr.length; ab++) {
        tempA = arr[ab];
        arr[ab] = tempB.length;
        tempB = tempA;
    }
    return arr;
}

console.log(previousLengths(["Hi","Jim!","How're","You?"]))

console.log("Add Seven to Most");

function addSeven(arr) {
    var arrnew = [];
    for (var aa=1; aa<arr.length; aa++) {
        arrnew.push(arr[aa]+7);
    }
    return arrnew;
}

console.log(addSeven([-1,3,5,-5]));

console.log("Reverse Array");

function reverse(arr) {
    var arrnew = []
    for (var ac=arr.length-1; ac>=0; ac--) {
        arrnew.push(arr[ac]);
    }
    arr = arrnew;
    return arr;
}

console.log(reverse([3,1,6,4,2]));

console.log("Outlook: Negative");

function negate(arr) {
    var arrnew = [];
    for (var ad=0; ad<arr.length; ad++) {
        if (arr[ad] < 0) {
            arrnew.push(arr[ad]*-1);
        } else {
            arrnew.push(arr[ad]);
        }
    }
    return arrnew;
}

console.log(negate([-1,3,5,-5]));

console.log("Always Hungry");

function alwaysHungry(arr) {
    var full = false;
    for (var ae=0; ae<arr.length; ae++) {
        if (arr[ae] == "food") {
            full = true;
            console.log("yummy");
        }
    }
    if (!full) {
        console.log("I'm hungry");
    }
}

alwaysHungry([1,2,3,4,5]);
alwaysHungry([1,"food",3,"food",5]);

console.log("Swap Toward the Center");

function swapCenter(arr) {
    var half = Math.floor(arr.length/2);
    var temp;
    for (var g=0; g<half; g+=2) {
        temp = arr[g];
        arr[g] = arr[arr.length-(g+1)];
        arr[arr.length-(g+1)] = temp;
    }
    return arr;
}

console.log(swapCenter([1,2,3,4,5,6,7,8,9,10,11,12]));
console.log(swapCenter([12,2,10,4,8,6,7,5,9,3,11,1]));

console.log("Scale the Array");

function scaleArray(arr, num) {
    for (var af=0; af<arr.length; af++) {
        arr[af] = arr[af]*num;
    }
    return arr;
}

console.log(scaleArray([1,2,3,4,5], 2));




