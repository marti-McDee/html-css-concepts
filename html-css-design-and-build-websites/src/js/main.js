function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight * 0.3)
}

history.scrollRestoration = 'manual'
window.onload = scrollToBottom
