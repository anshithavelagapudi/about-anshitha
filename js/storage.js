/* global localStorage */
function tri(x,y){
    return 0.5*x*y
  }
  console.log('SCRIPT START')
  console.log('Declare testable functions......................')
  function tri(x, y) { return 0.5*x * y }
  console.log('Defined tri=' + tri)
  console.log('Declare event listeners .......................')
  window.addEventListener('load', (event) => {
    console.log('  Starting initialization ')
    
    if (localStorage.getItem('firstInput')) {
      document.querySelector('#firstInput').value = parseInt(localStorage.firstInput)
      console.log(`  Stored firstInput = ${localStorage.firstInput}`)
    }
    if (localStorage.getItem('SecondInput')) {
      document.querySelector('#SecondInput').value = parseInt(localStorage.SecondInput)
      console.log(`  Stored secondInput = ${localStorage.SecondInput}`)
    }
    console.log('  Finished initialization')
  })
  document.querySelector('#button').addEventListener('click', () => {
    console.log('  Starting clicker click handler')
    const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
    
    const i = parseInt(document.querySelector('#firstInput').value)
    console.log('i=' + i)
    const j = parseInt(document.querySelector('#SecondInput').value)
    console.log('j=' + j)
    const ct = origCount + 1
    const ans = ` Area of triangle is ${tri(i, j)} and this has been run ${ct} times.`
    document.querySelector('#result').innerHTML = ans
    localStorage.setItem('countOfClicks', ct)  // define a string key to store + its value
    localStorage.setItem('firstInput', i)
    localStorage.setItem('SecondInput', j)
    console.log('  Finished clicker click handler')
  })
  document.querySelector('#wiper').addEventListener('click', () => {
    console.log('  Starting wiper click handler')
    localStorage.removeItem('countOfClicks')
    
    localStorage.removeItem('firstInput')
    localStorage.removeItem('SecondInput')
    console.log('  Finished wiper click handler - localStorage entries removed')
  })
  console.log('SCRIPT END')
  
  
  document.addEventListener('click', event => {
    if (event.target && event.target.id === 'button') { updateWithAdd(event) }
  })