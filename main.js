const tri = (i, j) => { return 0.5*i*j }

const updateWithAdd = async (event) => {
document.querySelector('#result').innerHTML = ''
  
    const i = parseInt(document.querySelector('#firstInput').value)
    const j = parseInt(document.querySelector('#SecondInput').value)
    const ans = `Area of the triangle is ${tri(i, j)}.`
    document.querySelector('#result').innerHTML = ans


 document.addEventListener('click', event => {
 if (event.target && event.target.id === '#result') { updateWithAdd(event) }
})
}