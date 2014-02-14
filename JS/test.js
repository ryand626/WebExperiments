//Example JS

//Insertion Sort Globals
ISinstructionList = Array();
NumArray = Array();
myActualList = Array();

//Merge Sort Globals
MSinstructionList = Array();
MSNumArray = Array();
MSmyActualList = Array();

//Main Function
main();

function main (){
    document.write("<h1>Sorting Algorithms</h1>");

    document.write("<div>");
        // INSERTION SORT
        document.write("<div class = sep>");
            list = start(32,20,"InsertionSort");
            document.write("<h2>Original Unsorted List</h2>");            
            print(list);
            insertionSort(list);
            document.write("<h2>Sorted List</h2>");
            print(list);

            document.write("<h2>Order of Swaps!</h2>");
            ISIL = Array();
            for (var i = 0; i < ISinstructionList.length; i+=2) {
                ISIL.push("element " + ISinstructionList[i] + " is swapped with  element " + ISinstructionList[i + 1]);
            }
            print(ISIL);

            myActualList = document.getElementsByClassName("InsertionSort");
            colorize("InsertionSort");
            setInterval(ISreplace,50);
        document.write("</div>");

        // MERGE SORT
        document.write("<div class = sep>");
            MS = start(32,20,"MergeSort");
            document.write("<h2>Original Unsorted List</h2>");
            print(MS);
            MergeSort(MS, 0, MS.length-1);
            document.write("<h2>Sorted List</h2>");
            print(MS);

            document.write("<h2>Instruction List</h2>");
            MSIL = Array();
            for (var i = 0; i < MSinstructionList.length; i+=2) {
                MSIL.push("element " + MSinstructionList[i] + " is given the value " + MSinstructionList[i + 1]);
            }
            print(MSIL);

            MSNumArray = getNums("MergeSort");
            MSmyActualList = document.getElementsByClassName("MergeSort")
            colorize("MergeSort");
            setInterval(MSreplace,50);
        document.write("</div>");
        
    document.write("</div>");

}

// initializes a sort by making a random list of numbers with a specific 
// class ID, size, and maximum value
function start (size,max,ID) {
    myList = Array();
    for (var i = 0; i < size; i++) {
        myList[i] = Math.floor(Math.random()*max);
    }
    document.write("<h2>" + ID + "</h2>");
    document.write("<ul>");
    for (var i = 0; i < myList.length; i++) {
        document.write("<li class = " + ID + ">" + myList[i] + "</li>");
    }
    document.write("</ul>");
    return myList;
}

function colorize (ID) {
    // ARE YOU NOT PLEASED JB?
    colorMeList = document.getElementsByClassName(ID);
    console.log("INNER HTML " + colorMeList[0].innerHTML.toString());
    for (var i = 0; i < colorMeList.length; i++) {
        

       // colorMeList[i].style.color = "transparent";// = "transparent";
        //colorMeList[i].style.background = "blue";
        colorMeList[i].style.width = colorMeList[i].textContent * 5 + "%";
        colorMeList[i].className = ID;

    }
}

// prints out an unordered list of the elements of myList
function print (myList) {
    document.write("<ul>");
    for (var i = 0; i < myList.length; i++) {
        document.write("<li>" + myList[i] + "</li>");
    }
    document.write("</ul>");
}


//Insertion Sort
function insertionSort (myList) {
    var temp;
    var iter;
    for (var i = 0; i < myList.length; i++) {
        temp = myList[i];
        
        for(iter = i; iter > 0 && myList[iter-1] > temp; iter--){
            myList[iter] = myList[iter-1];
            
            ISinstructionList[ISinstructionList.length] = iter;
            ISinstructionList[ISinstructionList.length] = iter -1;
        }
        myList[iter] = temp;
    }
    NumArray = getNums("InsertionSort");
}

// returns the numerical values of the elements in the
// unordered list of class name identifier
function getNums (identifier) {
    myList = document.getElementsByClassName(identifier);
    myNumArray = Array();
    for (var i = 0; i < myList.length; i++) {
        myNumArray[i] = Number(myList[i].innerHTML);
    }
    return myNumArray;
}

function ISreplace(){
    // stop if done
    if (ISinstructionList.length == 0){
        return;
    }

    // grey out previously selected

    old = document.getElementsByClassName("selected");
    for (var i = 0; i < old.length; i++) {
        old[i].className = "prev";
    }

    // find swap indexes from instruction list
    var indx1 = ISinstructionList.shift();
    var indx2 = ISinstructionList.shift();


    // make swap visible
    myActualList[indx1].innerHTML = "<li class = prev >" + NumArray[indx2] + "</li>";
    myActualList[indx2].innerHTML = "<li class = selected >" + NumArray[indx1] + "</li>";
    myActualList[indx1].style.width = NumArray[indx2] * 5 + "%";
    myActualList[indx2].style.width = NumArray[indx1] * 5 + "%";
    myActualList[indx1].style.color = "transparent";
    myActualList[indx2].style.color = "transparent";
 
    // swap num array elements
    var temp = NumArray[indx1];
    NumArray[indx1] = NumArray[indx2];
    NumArray[indx2] = temp;
}


// Merge Sort
function MergeSort(mSortList,start,end){
    if(start < end){
        var mid = Math.floor(((start + end) / 2));

        MergeSort(mSortList, start, mid);   
        MergeSort(mSortList, mid + 1, end);
        Merge(mSortList, start, mid, end);
    }
}

// Start:   Zero indexed starting point
// mid:     last element of A1
// mid + 1: start of A2
// end:     last element of A2
function Merge(myList, start, mid, end){
    var len1 = mid - start + 1;
    var len2 = end - mid;
    var A1 = Array();
    var A2 = Array();

    // cut array into two smaller, sorted arrays
    for (var i = 0; i < len1; i++) {
        A1[i] = myList[i + start]; 
    }
    for (var i = 0; i < len2; i++) {
        A2[i] = myList[i + mid + 1]; 
    }
    // add sentinels
    A1.push(Infinity);
    A2.push(Infinity);

    var iter1 = 0;
    var iter2 = 0;

    // merge the two sorted lists
    for (var i = start; i <= end; i++) {
        if (A1[iter1] < A2[iter2]) {
            myList[i] = A1[iter1];
            iter1++;
            MSinstructionList.push(i);
            MSinstructionList.push(A1[iter1 - 1]);
        }  
        else {
            myList[i] = A2[iter2];
            iter2++;
            MSinstructionList.push(i);
            MSinstructionList.push(A2[iter2 - 1]);
        }
    }
}

function MSreplace(){
    // stop if done
    if (MSinstructionList.length == 0){
        return;
    }

    // change color of previously selected
    old = document.getElementsByClassName("MSselected");
    for (var i = 0; i < old.length; i++) {
        old[i].className = "MSprev";
    }
    old = document.getElementsByClassName("MSselected2");
    for (var i = 0; i < old.length; i++) {
        old[i].className = "MSprev";
    }

    // find swap index from instruction list
    var index = MSinstructionList.shift();
    // find element to put in at that index
    var elem = MSinstructionList.shift();

    // make swap visible
    MSmyActualList[index].innerHTML = "<li class = MSselected2>" + elem + "</li>";
    MSmyActualList[index].style.width = elem * 5 + "%";
    MSmyActualList[index].style.color = "transparent";

    // swap data
    MSNumArray[index] = MSNumArray[elem];
}
