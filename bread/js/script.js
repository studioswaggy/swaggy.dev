// Make text fill whole screen width 

let headerone = document.querySelectorAll("h1");

headerone.forEach((h1) => {
  let text = h1.innerText;
  let words = Array.from(text.split(" "));
  let size;
  if (words.length == 1) {
    size = 5;
  }
  if (words.length >= 2) {
    size = 8;
  }
  if (words.length >= 5) {
    size = 15;
  }
  if (words.length >= 7) {
    size = 20;
  }
  h1.style.fontSize = `${(69 - 1) / size}` + 'vw';
});

// Randomize text case

var elements = document.querySelectorAll('h1'); // h1 can be replaced with whichever .class
for (var i = 0; i < elements.length; i++) {
  changeCaseOnHover(elements[i]);
}

function randomCase(text) {
  return text.split('').map(function(letter) {
    return Math.random() > 0.5 ? letter.toUpperCase() : letter.toLowerCase();
  }).join('');
}

function changeCaseOnHover(element) {
  element.addEventListener('mouseenter', function() {
    element.textContent = randomCase(element.textContent);
  });

  element.addEventListener('mouseleave', function() {
    element.textContent = element.textContent.toLowerCase();
  });
}

