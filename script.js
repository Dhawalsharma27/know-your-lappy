// for suggestion in search bar
let names =[
"alye",
"jake",
"Asus tuf f15",
"Hp pavilion",
"Dell",
"MSI",
"lucy",
];
// Sorted names in ascending order
let sortedNames = names.sort();


//reference
let input = document.getElementById("input");

//Execute function on keyup
input.addEventListener("keyup", (e) => {

    // loop through above array
    //Initiallyremove all the elements (So if user raises a letter or adds new letter then clean previous output)
    removeElements();
    for(let i of sortedNames){
        //convert input to lowercase and compare with each string
        
        if(i.toLowerCase().startsWith().startsWith(input.value.toLowerCase()) && input.value !="")
            {
            //create li element
            let listItem = document.createElement("li");
            //One common class name
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("oneclick","displayNames('" + i + "')");
            //display matched ppart in bold
            let word = "<b>" + i.substring(0,input.value.length) +
            "</b>";
            word+= i.substring(input.value.length);
            //display hte value in array
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem)
            ;
         }
    }
});
function displayNames(value) {
    input.value = value;
}
function removeElements(){
    //clear all the item 
    let itemss = document.querySelectorAll(".list-items");
    itemss.forEach(item) => {
        item.remove()
    });
}