addEventListener('DOMContentLoaded', _ => {
  async function addButtons() {
    const collection = document.getElementsByClassName('button-container')
    let i = 0

    for (let buttonContainer of collection) {
      let block = document.createElement('button')
      block.classList.add('big-font-button')
      block.innerHTML = `Button ${++i}`

      buttonContainer.appendChild(block)
    }
  }

  addButtons()
})
