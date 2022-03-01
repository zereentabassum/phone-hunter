const searchPhone = () => {
  const searchInput = document.getElementById('search-input');
  const searchText = searchInput.value;
  
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  console.log(url);

  fetch(url)
  .then (res => res.json())
  .then (data => console.log(data));
}