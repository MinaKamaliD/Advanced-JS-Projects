let autoCompleteWrapper = document.querySelector(".search-input");

let searchInput = document.querySelector("input");
let autoCompleteBox = document.querySelector(".autocom-box");

searchInput.addEventListener("keyup", function () {
  if (searchInput.value) {
    autoCompleteWrapper.classList.add("active");

    let filteredWords = suggestions.filter(function (word) {
      return word.toLowerCase().includes(searchInput.value.toLowerCase());
    });
    suggestionGenerator(filteredWords);
  } else {
    autoCompleteWrapper.classList.remove("active");
  }
});

function suggestionGenerator(wordArray) {
  let itemsArray = wordArray.map(function (word) {
    return "<li>" + word + "</li>";
  });
  let customList;
  if (!itemsArray.length) {
    customList = "<li>" + searchInput.value + "</li>";
  } else {
    customList = itemsArray.join("");
  }
  autoCompleteBox.innerHTML = customList;
  select();
}

function select() {
  let allItems = autoCompleteBox.querySelectorAll("li");
  allItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      searchInput.value = event.target.textContent;

      autoCompleteWrapper.classList.remove("active");
    });
  });
}
