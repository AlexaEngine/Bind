function handleClick(message) {
    alert(message);
    this.innerText = "Button clicked!";
}

const myButton = document.getElementById("myButton");

if (myButton) {
    const boundClickHandler = handleClick.bind(myButton, "Button clicked!");
    myButton.addEventListener("click", boundClickHandler);
}

