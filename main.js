function Calculate_Area() 
{
let s1 = parseInt(document.getElementById("firstInput").value);
let s2 = parseInt(document.getElementById("SecondInput").value);
const area=0.5*s1*s2;
document.getElementById("result").innerHTML = "The area of Triangle is "+area;

}























//const mult = (i, j) => { return 0.5*i*j }

// const updateWithAdd = async (event) => {
//   document.querySelector('#result').innerHTML = ''
  
    // const i = parseInt(document.querySelector('#firstInput').value)
    // const j = parseInt(document.querySelector('#SecondInput').value)
    // const ans = `Total space required is ${mult(i, j)}.`
    // document.querySelector('#result').innerHTML = ans


//   document.addEventListener('click', event => {
//   if (event.target && event.target.id === 'button') { updateWithAdd(event) }
// })


// function Calculate_Area() {
//     const s1 = parseInt(document.getElementById("length").value);
//     const s2 = parseInt(document.getElementById("breadth").value);
//     const area=(s1*s2);
//     document.getElementById("solution").innerHTML = area;
