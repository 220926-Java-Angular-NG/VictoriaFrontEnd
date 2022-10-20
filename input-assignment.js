// Variables for the teams
let mainDiv = document.getElementById("main");
let cookieCuttersDiv = document.getElementById("cookie-cutters");
let codeCrackersDiv = document.getElementById("code-crackers");
let javaLoversDiv = document.getElementById("java-lovers");
// Add event listener for submit button
let submitButton = document.getElementById("submit-button");
submitButton.addEventListener('click', (event) =>{
    event.preventDefault();
    let text = document.getElementById("full-name");
    let name = document.getElementById("full-name").value;
    let team = document.getElementById("teams").selectedIndex;

    // Create new element to be added to the team div
    let newItem = document.createElement('p');
    newItem.innerHTML = name;
    if (team == 1){
        cookieCuttersDiv.appendChild(newItem);
    } else if (team == 2){
        codeCrackersDiv.appendChild(newItem);
    } else if (team == 3){
        javaLoversDiv.appendChild(newItem);
    } else {
        newItem.innerHTML = "You forgot to choose the team";
        mainDiv.appendChild(newItem);
    }
    text.value = "";
    document.getElementById("teams").selectedIndex = 0;

})