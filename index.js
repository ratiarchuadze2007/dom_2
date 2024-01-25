const buttons = document.querySelectorAll(".button")
const sumbit = document.getElementById("submit_button");
const card = document.getElementById("card")
const card_2 = document.getElementById("card_2")

const yourNumber = document.getElementById("selectedNumber")


sumbit.addEventListener("click", () => {
    sumbit.style.backgroundColor = "#FFF"
    sumbit.style.color = "#FC7614";
    setInterval(() => {
        card.style.display = "none";
    card_2.style.display = "block";
    },100);
    
  
})

buttons.forEach((item) => {  

    item.addEventListener("focusin", () => {
        item.style.backgroundColor = "#FC7614"
        item.style.color = "#fff";
        selectedNumber.innerHTML = item.textContent;
    })
    item.addEventListener("focusout", () => {
        item.style.backgroundColor = "#262E38"
        item.style.color = "#7C8798"
    })
    

})
