document.addEventListener('DOMContentLoaded', function () {
  const messageLines = document.querySelectorAll('.message__line');

  messageLines.forEach((line, index) => {
    line.style.animation = `message-fade-in-out 30s linear ${index * 5}s`;
  });
});
