const searchPhone = () => {
  const searchInput = document.getElementById('search-input');
  const searchText = searchInput.value;
  // clear data
  searchInput.value = '';
  const searchResult = document.getElementById('phone-details');
  searchResult.textContent = '';
  // load data
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  

  fetch(url)
  .then (res => res.json())
  .then (data => displayResult(data.data))
}
  // display result 
const displayResult = data => {
  const searchResult = document.getElementById('search-result');
    searchResult.textContent = '' ;
  data.forEach(data => {

  const div = document.createElement('div');
  div.classList.add('col');
  div.innerHTML = `
      <div class="card">
      <img src="${data.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${data.brand}</h5>
        <h5 class="card-title">${data.phone_name}</h5>
        <a  onclick="loadPhoneInfo('${data.slug}')" class="btn btn-danger px-4 py-2" href="#" role="button">Explore</a>
      </div>
      </div>
  `;
     searchResult.appendChild(div);
});
}
  // load phone details 
  const loadPhoneInfo = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;

     fetch(url)
       .then(res => res.json())
       .then(data => displayPhoneInfo(data.data));
  }
      //  display phone details 
  const displayPhoneInfo = phone => {
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body text-dark">
      <h3 class="card-title text-primary">${phone.name}</h3>
      <h4 class="card-title text-primary">${phone.releaseDate ? phone.releaseDate:'No release date found'}</h4>
      <h4 class="card-title text-success">Main Features :</h4>
      
      <h5 class="card-title">Chipset: ${phone.mainFeatures.chipSet}</h5>
      <h5 class="card-title">Display Size: ${phone.mainFeatures.displaySize}</h5>
      <h5 class="card-title">Memory: ${phone.mainFeatures.memory}</h5>
      <h5 class="card-title">Storage: ${phone.mainFeatures.storage}</h5>
      
      <h4 class="card-title text-success ">Others :</h4>
      <h5 class="card-title">Bluetooth: ${phone.others.Bluetooth}</h5>
      <h5 class="card-title">GPS: ${phone.others.GPS}</h5>
      <h5 class="card-title">NFC: ${phone.others.NFC}</h5>
      <h5 class="card-title">Radio: ${phone.others.Radio}</h5>
      <h5 class="card-title">USB: ${phone.others.USB}</h5>
      <h5 class="card-title">WLAN: ${phone.others.WLAN}</h5>

      <h4 class="card-title text-success">Sensors : </h4>
      <h5 class="">${phone.mainFeatures.sensors}</h5>
    </div>
    </div>
    `;
    phoneDetails.appendChild(div);
  }
