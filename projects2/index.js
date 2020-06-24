

function fungsi(){
    let button = document.querySelector('button');
    button.addEventListener('click', function(){
    

let charB = /[A-Z]/;


    let input = document.querySelector('input').value;
    if(charB.test(input)){
        document.querySelector('p').innerHTML = input.toLowerCase()
        console.log(input.toLowerCase())
    }
    else if(charB.test(input)){
        document.querySelector('p').innerHTML = input.toLowerCase()
        console.log(input.toLowerCase())
    }
    else{
        document.querySelector('p').innerHTML = input.toUpperCase()
        console.log(input.toUpperCase())
    }
    
})
}
export default fungsi