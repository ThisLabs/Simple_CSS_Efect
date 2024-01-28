function typeText(element, texts, currentIndex = 0, loopCount = 0) {
  function type() {
    let text = texts[currentIndex % texts.length];
    let charIndex = 0;

    function typeChar() {
      if (charIndex < text.length) {
        element.innerHTML += text.charAt(charIndex);
        charIndex++;
        //   untuk atur kecepatan typing
        setTimeout(typeChar, 300);
      } else {
        // delay
        setTimeout(backspace, 500);
      }
    }

    function backspace() {
      if (charIndex >= 0) {
        element.innerHTML = text.substring(0, charIndex);
        charIndex--;
        setTimeout(backspace, 20);
      } else {
        currentIndex++;
        if (loopCount === 0 || currentIndex < texts.length * loopCount) {
          setTimeout(type, 1200);
        }
      }
    }

    typeChar();
  }

  type();
}

const typedElement = document.querySelector('.typed');
const texts = ['Developer', 'Designer', 'People'];

typeText(typedElement, texts, 0, 5);
