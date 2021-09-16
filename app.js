let count = 0
const value = document.querySelector("#value");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

const decreaseCounter = () => {
    count--;
    value.textContent = count;
    setColor();
}

const increaseCounter = () => {
    count++;
    value.textContent = count;
    setColor();
}

const setColor = () => {
    if(count > 0) {
        value.style.color = "green";
    } else if(count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "#102a42";
    }
}

const resetCounter = () => {
    count = 0;
    value.textContent = count;
    setColor();
}

decrease.addEventListener("click", decreaseCounter);
reset.addEventListener("click", resetCounter);
increase.addEventListener("click", increaseCounter);