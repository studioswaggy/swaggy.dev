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
