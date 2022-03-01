const searchPhone = () => {
  const searchInput = document.getElementById('search-input');
  const searchText = searchInput.value;
  
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

  fetch(url)
  .then (res => res.json())
  .then (data => displayResult(data.data));
}

const displayResult = data => {
  console.log(data);
}