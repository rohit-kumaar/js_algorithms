function script(url) {
  const head = document.getElementsByTagName("head")[0];
  const script = document.createElement("script");
  script.src = url;
  script.type = "module";
  head.appendChild(script);
}

// script("./01_fibonacci.js");
// script("./02_anagram.js");
script("./03_gridTraveler.js");
