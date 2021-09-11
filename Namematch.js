var fsentence = window.prompt("Enter First Name"); //input words to sort through
var ssentence = window.prompt("Enter Second Name");

sentence= (fsentence+" matches "+ ssentence).replace(/ /g, "").toLowerCase(); //convert the string to lowercase

var noOfCountsOfEachCharacter = [];//empty array to store each letter count

var total = [];

var getCharacter, counter, actualLength, noOfCount;

for (counter = 0, actualLength = sentence.length; counter <  //run for loop to loop through each character
actualLength; counter++) {
getCharacter = sentence.charAt(counter);
noOfCount = noOfCountsOfEachCharacter[getCharacter];
noOfCountsOfEachCharacter[getCharacter] = noOfCount ? noOfCount + 1: 1;
}


for (getCharacter in noOfCountsOfEachCharacter) {  //Here we say that if the array is not empty, then we print the outcome
if(getCharacter!=' ')
document.write("<br>" + "Character="+getCharacter + " Occurrences=" +
noOfCountsOfEachCharacter[getCharacter]); 
total.push(noOfCountsOfEachCharacter[getCharacter]); //Pushing the Occurrences into a new Array
}

console.log(total);


function reduceNumber(sumarray)
{
    var runvalue = sumarray.length/2; //Divide the length in half so first and last meet in the middle
    debugger
    var w = sumarray;
    debugger
    var sum = 0;
    var result = "";
    var first = 0;
    var last = 0;

    for( let i = 0; i < runvalue; i++) //loop through the array
    {
        first += w[i]; 
        //debugger
        last +=(w[w.length - i -1]);
        //debugger
    }

    sum = first +""+ last;
    debugger

    result += sum ;
    debugger
    
    if(sumarray.length % 2 != 0)
    {
        result = result +""+w[runvalue];
        debugger
    }

    if(sumarray.length > 2)
    {
        if(result >= 80)
        {
            return result = fsentence +" matches "+ ssentence + " " + sum + "%" + ",good match";
        }
        else
        {
            return result = fsentence +" matches "+ ssentence + " " + sum + "%";
        }

    }
    else
    {
        return result;
    }
}

document.write("<br> <br>" + reduceNumber(total));













