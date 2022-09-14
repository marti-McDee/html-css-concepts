function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight * 0.8)
}

history.scrollRestoration = 'manual'
window.onload = scrollToBottom
