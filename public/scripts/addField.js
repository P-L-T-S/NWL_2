function cloneField(){
    const fieldContainer = document.querySelector(".schedule-item").cloneNode(true);
    
    const field = fieldContainer.querySelectorAll("input");

    field.forEach(element => {
        element.value = "";
    });
    
    document.querySelector("#schedule-items").appendChild(fieldContainer)
}

document.querySelector("#add-time").onclick = () => {
    cloneField();
}
