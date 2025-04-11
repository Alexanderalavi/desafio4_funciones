document.querySelector("#blue").addEventListener("click", function() {
    this.style.backgroundColor = "black"
  })

  document.querySelector("#red").addEventListener("click", function() {
    this.style.backgroundColor = "black"
  })

  document.querySelector("#green").addEventListener("click", function() {
    this.style.backgroundColor = "black"
  })

  document.querySelector("#yellow").addEventListener("click", function() {
    this.style.backgroundColor = "black"
  })
//a = pink
// s = orange
// d = lightblue
//q = purple
//w = grey
//e = brown
  document.addEventListener('keydown', function (event) {
    const key = document.querySelector('#key')
    if (event.key === 'a') {
    key.style.backgroundColor = 'pink'
    } else if (event.key === 's') {
    key.style.backgroundColor = 'orange'
    } else if (event.key === 'd'){
      key.style.backgroundColor = 'lightblue'
    } else if (event.key === 'q' ) {
      newDiv('purple')
    } else if (event.key === 'w' ) {
      newDiv('grey')
    } else if (event.key === 'e' ) {
      newDiv('brown')
    }
    })
    

function newDiv(color) {
  const divCreated = document.createElement('div');
  divCreated.classList.add('newBox');
  divCreated.style.backgroundColor = color;
  document.body.appendChild(divCreated);
}