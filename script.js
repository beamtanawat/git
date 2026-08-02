const actionButton = document.querySelector('#actionButton')
const status = document.querySelector('#status')

let interactionCount = 0

actionButton.addEventListener('click', () => {
  interactionCount += 1
  status.textContent = `The button was clicked ${interactionCount} time${interactionCount === 1 ? '' : 's'}.`
})
