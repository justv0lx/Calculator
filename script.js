let numbers = document.querySelectorAll('.number')
let operations = document.querySelectorAll('.operation')
let screen = document.querySelector('.display')
let clear = document.querySelector('.all-clear')
let lastClear = document.querySelector('.last-entity-clear')
let equals = document.querySelector('.equal')

for(button of numbers)
{
    button.addEventListener('click', (e)=>
    {
        screen.innerText += e.target.innerText
    })
}


//clear fucntion
clear.addEventListener('click' ,(e)=>
{
    screen.innerText = ''
})


for(button of operations)
{
    button.addEventListener('click', (e)=>
    {
        if(e.target.innerText == 'x')
        {
            screen.innerText += '*'
        }
        else{
        screen.innerText += e.target.innerText
        }
    })
}


equals.addEventListener('click', (e)=>
{
    screen.innerText = eval(screen.innerText)
})
