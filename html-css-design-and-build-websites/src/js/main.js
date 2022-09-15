function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight * 1)
}

history.scrollRestoration = 'manual'
window.onload = scrollToBottom
