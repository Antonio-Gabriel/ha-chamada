import { redirectTo } from './utils.js'
import { onboardingEverLoadedEvent } from './context.js'

let currentProgress = 0
const btnSteps = document.querySelectorAll('.next-button')

function showProgressTab(n) {
  let progress = document.getElementsByClassName('progress-tab')
  progress[n].style.display = 'flex'

  fixStepIndicators(n)
}

function nextPrev(n) {
  let progress = document.getElementsByClassName('progress-tab')
  progress[currentProgress].style.display = 'none'

  currentProgress = currentProgress + n

  if (currentProgress >= progress.length) {
    onboardingEverLoadedEvent()
    redirectTo('/signIn')
  }

  showProgressTab(currentProgress)
}

function fixStepIndicators(n) {
  let i,
    x = document.getElementsByClassName('step')

  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(' active', '')
  }

  x[n].className += ' active'
}

window.addEventListener('load', () => {
  showProgressTab(currentProgress)

  btnSteps.forEach((el) => {
    el.addEventListener('click', (event) => {
      nextPrev(1)
    })
  })
})
