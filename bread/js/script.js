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

/* Randomize text case

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
*/

// Better randomize text case

var heading = document.querySelector('h1'); // h1 can be replaced with any .class
changeCaseRandomly(heading);

function randomCase(text) {
  var result = '';
  for (var i = 0; i < text.length; i++) {
    var random = Math.random();
    if (random < 0.5) {
      result += text[i].toUpperCase();
    } else {
      result += text[i].toLowerCase();
    }
  }
  return result;
}

function changeCaseRandomly(element) {
  var text = element.innerHTML;
  var intervalId;
  
  element.addEventListener('mouseover', function() {
    intervalId = setInterval(function() {
      element.innerHTML = randomCase(text);
    }, Math.random() * 1000 + 500); // Random delay between 0.5 and 1.5 seconds
  });
  
  element.addEventListener('mouseout', function() {
    clearInterval(intervalId);
    element.innerHTML = text;
  });
}