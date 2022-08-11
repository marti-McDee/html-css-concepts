addEventListener('DOMContentLoaded', _ => {

  async function addVideoTime() {
    const thumbnailRow = document.getElementsByClassName('thumbnail-row')

    for (let thumbnail of thumbnailRow) {
      let block = document.createElement('div')
      block.classList.add('video-time')
      let minutes = getRandInt(6, 15).toString()
      let seconds = pad2(getRandInt(0, 59))
      block.innerHTML = `${minutes}:${seconds}`

      thumbnail.appendChild(block)
    }

  }

  function getRandInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function pad2(num) {
    return (num < 10 ? '0' : '') + num
  }

  addVideoTime()


})