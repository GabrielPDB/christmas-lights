const lights = document.querySelectorAll('.light')
const playButton = document.querySelector('#play')
const stopButton = document.querySelector('#stop')

playButton.addEventListener('click', () => {
  lights.forEach(light => {
    light.classList.remove('inative')
  })
})
stopButton.addEventListener('click', () => {
  lights.forEach(light => {
    light.classList.add('inative')
  })
})

const setIntervalOfLights = () => {
  let animationDuration = document.querySelector('#interval').value

  lights.forEach(light => {
    light.style['animation-duration'] = animationDuration + 'ms'
  })
}
