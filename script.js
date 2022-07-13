function script(url) {
  const head = document.getElementsByTagName("head")[0];
  const script = document.createElement("script");
  script.src = url;
  script.type = "module";
  head.appendChild(script);
}

// script("./01_by_codevolution/generate_fibonacci/01_generate_fibonacci.js");
// script("./01_by_codevolution/factorial/01_factorial_of_a_number.js");
// script("./01_by_codevolution/prime_number/01_prime_number.js");
// script("./01_by_codevolution/power_of_two/01_power_of_two.js");
// script("./01_by_codevolution/search/01_linear_search.js");
// script("./01_by_codevolution/search/02_binary_search.js");
// script("./01_by_codevolution/search/03_recursive_binary_search.js");
// script("./01_by_codevolution/sort/01_bubble_sort.js");
// script("./01_by_codevolution/sort/02_insertion_sort.js");
// script("./01_by_codevolution/sort/03_quick_sort.js");
// script("./01_by_codevolution/sort/04_merge_sort.js");
// script("./01_by_codevolution/cartesian_product/01_cartesian_product.js");
// script("./01_by_codevolution/climbing_staircase/01_climbing_staircase.js");
script("./01_by_codevolution/tower_of_hanoi/01_tower_of_hanoi.js");
// script("./a_fibonacci.js");
// script("./b_gridTraveler.js");
// script("./c_anagram.js");
// script("./d_remove_duplicate_value.js");
// script("./e_curring.js");
