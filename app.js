// declaration
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

// initialization
let count = 0;

function increament()
 {
    // increamenting by 1
    // count = count + 1;
    count += 1;
    countEl.textContent = count;
}

// saving the count to previous entries
function save() 
{
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    // set the count to zero
    countEl.textContent = 0;
    count = 0;
}
