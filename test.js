//Example JS
main();

function main (){
    wait(200);
    document.write("<p>" + new Date() + "</p>");
    list = start(20,20);
    document.write("HI THERE");
    setTimeout(insertionSort(getNums("Numbers")),5000);
    
}


function start (size,max) {
    myList = Array();
    for (var i = 0; i < size; i++) {
        myList[i] = Math.floor(Math.random()*max);
    }
    document.write("<h1>Original List</h1>");
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

function insertionSort (myList) {
    var temp;
    var iter;

    for (var i = 0; i < myList.length; i++) {
        temp = myList[i];
        for(iter = i; iter > 0 && myList[iter-1] > temp; iter--){
            myList[iter] = myList[iter-1];
            reprint("Numbers", myList);
        }
        myList[iter] = temp;
        reprint("Numbers", myList);
    }
    return myList;
}

function getNums (identifier) {
    myList = document.getElementsByClassName(identifier);
    NumArray = new Array(myList.length);

    for (var i = 0; i < myList.length; i++) {
        NumArray[i] = Number(myList[i].innerHTML);
    }
    return NumArray;
}

function reprint (identifier, NumArray){
    myList = document.getElementsByClassName(identifier);
    wait(5);
    for (var i = 0; i < myList.length; i++) {
        myList[i].innerHTML = NumArray[i];
    }
}

function wait (ms) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > ms){
            break;
        }
    }
}
