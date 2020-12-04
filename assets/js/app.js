// alert("Connected");

let selection = document.querySelector("#myImage");
let imgChange = document.querySelector("#image-size");

selection.addEventListener("change", e => {
    e.preventDefault()
    const selectChoice = selection.value;
    console.log(selectChoice);
    if(selectChoice === "opt1"){
        imgChange.src = "assets/images/myHeadshot.jpg";
    } else if (selectChoice === "opt2") {
        imgChange.src = "assets/images/myBeard.jpg";
    } else if (selectChoice === "opt3") {
        imgChange.src = "assets/images/myMemoji.jpg";
    } else if (selectChoice === "opt4") {
        imgChange.src = "assets/images/myCynide.jpg";
    } else if (selectChoice === "opt5") {
        imgChange.src = "assets/images/myBitmoji.JPG";
    } else if (selectChoice === "opt6") {
        imgChange.src = "assets/images/mySouthpark.jpg";
    } else {
        imgChange.src = "assets/images/myHeadshot.jpg"
    }
})
