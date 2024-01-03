const counter = document.getElementById('counter');
const btnI = document.querySelector('.btn-increase');
const btnD = document.querySelector('.btn-decrease');
const btnR = document.querySelector('.btn-reset');

let cnt =0;


[btnI, btnD, btnR].forEach(button =>{
    button.addEventListener('click', () => {
        if(button == btnI)cnt++; 
        else if(button == btnD)cnt--;
        else cnt = 0; 

        if(cnt>0)counter.style.color = 'green'
        else if(cnt<0)counter.style.color = 'red'
        else counter.style.color = 'grey'
        counter.textContent = cnt;
    })
})
// btnI.addEventListener('click', () => {
//     cnt++;
//     counter.textContent = cnt;
// })

// btnD.addEventListener('click', () => {
//     cnt--;
//     counter.textContent = cnt;
// })
// btnR.addEventListener('click', () => {
//     cnt=0;
//     counter.textContent = cnt;
// })