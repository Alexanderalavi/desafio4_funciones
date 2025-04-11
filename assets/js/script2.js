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

//q = morado 
//w = gris
//e = cafe
  document.addEventListener('keydown', function (event) {
    const key = document.querySelector('#key')
    if (event.key === 'a') {
    key.style.backgroundColor = 'pink'
    } else if (event.key === 's') {
    key.style.backgroundColor = 'orange'
    } else if (event.key === 'd'){
      key.style.backgroundColor = 'lightblue'
    } else if (event.key === 'q' ) {
      createNewDiv('purple')
    } else if (event.key === 'w' ) {
      createNewDiv('grey')
    } else if (event.key === 'e' ) {
      createNewDiv('brown')
    }
    })
    