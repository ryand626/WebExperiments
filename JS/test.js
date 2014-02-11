//Example JS
instructionList = Array();
NumArray = Array();
myActualList = Array();
main();

function main (){
    document.write("<p>" + new Date() + "</p>");
    list = start(50,20);
    document.write("<h1>Original</h1>");
    print(list);
    
    insertionSort(getNums("Numbers"),instructionList);

    document.write("<h1>Order of Swaps!</h1>")
    print(instructionList);

    myActualList = document.getElementsByClassName("Numbers");
    setInterval(replace,50);
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
    }
    NumArray = getNums("Numbers");
}

function getNums (identifier) {
    myList = document.getElementsByClassName(identifier);
    for (var i = 0; i < myList.length; i++) {
        NumArray[i] = Number(myList[i].innerHTML);
    }
    return NumArray;
}

function replace(){
    //stop if done
    if (instructionList.length == 0){
        return;
    }

    //grey out previously selected

    old = document.getElementsByClassName("selected");
    for (var i = 0; i < old.length; i++) {
        old[i].className = "prev";
    }

    //find swap indexes from instruction list
    var indx1 = instructionList.shift();
    var indx2 = instructionList.shift();


    //make swap visible
    myActualList[indx1].innerHTML = "<li class = prev >" + NumArray[indx2] + "</li>";
    myActualList[indx2].innerHTML = "<li class = selected >" + NumArray[indx1] + "</li>";
 
    //swap num array elements
    var temp = NumArray[indx1];
    NumArray[indx1] = NumArray[indx2];
    NumArray[indx2] = temp;
}
