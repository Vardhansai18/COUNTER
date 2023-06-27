const inc_doc = document.getElementById("Increment")
const dec_doc = document.getElementById("Decrement")
const rst_doc = document.getElementById("Reset")



let counter = 0 
function inc_fun()
{
    counter++;
    const countElement = document.querySelector('.count');
    countElement.innerHTML = counter;
    countElement.style.color =  'red';
}


function dec_fun()
{
    counter--;
    const countElement = document.querySelector('.count');
    countElement.innerHTML = counter;
    countElement.style.color =  'blue';
}


function rst_fun()
{
    counter = 0;
    const countElement = document.querySelector('.count');
    countElement.innerHTML = counter;
    countElement.style.color =  'yellow';

}

inc_doc.addEventListener("click",inc_fun)
dec_doc.addEventListener("click",dec_fun)
rst_doc.addEventListener("click",rst_fun)
