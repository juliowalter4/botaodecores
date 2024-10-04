const button = document.getElementById('colorButton');
const resetButton = document.getElementById('resetButton');


button.addEventListener('click', function() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC300'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

resetButton.addEventListener('click',  function(){
    document.body.style.backgroundColor = "white";


});