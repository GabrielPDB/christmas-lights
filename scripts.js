const lights = document.querySelectorAll('.light')

const Lights = {
  setAnimationDuration() {
    let animationDuration = document.querySelector('#duration').value

    lights.forEach((light, index) => {
      light.style['animation-duration'] = animationDuration + 'ms'
      if (index % 2 == 0) {
        light.style['animation-delay'] = animationDuration / 2 + 'ms'
      }
    })
  },
  turnOn() {
    lights.forEach(light => {
      light.classList.remove('inative')
      light.style.animationPlayState = 'running'
    })
  },
  turnOff() {
    lights.forEach(light => {
      light.style.animationPlayState = 'paused'
      light.classList.add('inative')
    })
  }
}

const playButton = document.querySelector('#play')
const stopButton = document.querySelector('#stop')

playButton.addEventListener('click', () => {
  Lights.turnOn()
})
stopButton.addEventListener('click', () => {
  Lights.turnOff()
})

/* Refatorar animação de ligar e desligar lights */
