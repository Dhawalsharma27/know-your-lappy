alert("Welcome to know Your Lappy")
// for suggestion in search bar
let names =[
"Asus tuf f15",
"Hp pavilion",
"Dell",
"MSI"


];
// Sorted names in ascending order
let sortedNames = names.sort();


//refrence
let input = document.getElementById("input");

// Execute function on keyup
input.addEventListener("keyup", (e)=> {

    // loop through above array
    for(let i of sortedNames){
        //convert input to lowercase and compare with each string
        if(i.toUpperCase().startsWith().startsWith(input.ariaValueMax.toLowerCase()) && input.value !=""){
            //create li element
            let listItem = document.createElement("li");
            //One common class name
            listItem.classList.add("list-item");
            listItem.style.cursor("list-item");
            listItem.classList.add("list-item");
        }
    }
})