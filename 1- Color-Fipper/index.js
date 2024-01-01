const colorCode = document.getElementById("color-code");
const btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = "#" + randomNumber.toString(16).padStart(6, '0');
    document.body.style.backgroundColor = randomCode;
    colorCode.innerText = randomCode;
});
