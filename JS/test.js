//Example JS
instructionList = Array();
NumArray = Array();

main();

function main (){
    document.write("<p>" + new Date() + "</p>");
    list = start(10,20);
    document.write("<h1>Original</h1>");
    print(list);
    
    insertionSort(getNums("Numbers"),instructionList);

    document.write("<h1>instructionList</h1>")
    print(instructionList);
    setInterval(replace,1000);
}

function start (size,max) {
    myList = Array();
    for (var i = 0; i < size; i++) {
        myList[i] = Math.floor(Math.random()*max);
    }
    document.write("<h1>insertionSort</h1>");
    document.write("<ul>");
    for (var i = 0; i < myList.length; i++) {
        document.write("<li class = Numbers>" + myList[i] + "</li>");
    }
    document.write("</ul>");
    return myList;
}

function print (myList) {
    document.write("<ul>");
    for (var i = 0; i < myList.length; i++) {
        document.write("<li>" + myList[i] + "</li>");
    }
    document.write("</ul>");
}

function insertionSort (myList, instructionList) {
    var temp;
    var iter;

    for (var i = 0; i < myList.length; i++) {
        temp = myList[i];
        for(iter = i; iter > 0 && myList[iter-1] > temp; iter--){
            myList[iter] = myList[iter-1];
            
            instructionList[instructionList.length] = iter;
            instructionList[instructionList.length] = iter -1;
        }
        myList[iter] = temp;
        
        //instructionList[instructionList.length] = iter;
        //instructionList[instructionList.length] = i;
        
    }
}

function getNums (identifier) {
    myList = document.getElementsByClassName(identifier);
    //NumArray = new Array(myList.length);

    for (var i = 0; i < myList.length; i++) {
        NumArray[i] = Number(myList[i].innerHTML);
    }
    return NumArray;
}

function reprint (identifier, NumArray){
    myList = document.getElementsByClassName(identifier);
    for (var i = 0; i < myList.length; i++) {
        myList[i].innerHTML = NumArray[i];
    }
}

function replace(){
    if (instructionList.length == 0){
        return;
    }

    myList = document.getElementsByClassName("Numbers");
    var indx1 = instructionList.shift();
    var indx2 = instructionList.shift();

    console.log(indx1 + " " + indx2);

    myList[indx1].innerHTML = "<b>" + NumArray[indx1] + "</b>";
    myList[indx2].innerHTML = "<u>" + NumArray[indx2] + "</u>";

}
