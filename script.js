function script(url) {
  const head = document.getElementsByTagName("head")[0];
  const script = document.createElement("script");
  script.src = url;
  script.type = "module";
  head.appendChild(script);
}

// script("./00_generate_fibonacci.js");
// script("./01_factorial_of_a_number.js");
// script("./02_prime_number.js");
// script("./03_power_of_two.js");
// script("./search/01_linear_search.js");
// script("./search/02_binary_search.js");
// script("./search/03_recursive_binary_search.js");
// script("./sort/01_bubble_sort.js");
// script("./sort/02_insertion_sort.js");
// script("./sort/03_quick_sort.js");
script("./sort/04_merge_sort.js");
// script("./a_fibonacci.js");
// script("./b_gridTraveler.js");
// script("./c_anagram.js");
// script("./d_remove_duplicate_value.js");
// script("./e_curring.js");
