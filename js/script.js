const searchPhone = () => {
  const searchInput = document.getElementById('search-input');
  const searchText = searchInput.value;
  
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

  fetch(url)
  .then (res => res.json())
  .then (data => displayResult(data.data));
}

const displayResult = data => {
  const searchResult = document.getElementById('search-result');
  data.forEach(data => {
 
  const div = document.createElement('div');
  div.classList.add('col');
  div.innerHTML = `
      <div onclick="loadPhoneInfo('${data.slug}')" class="card">
      <img src="${data.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${data.brand}</h5>
        <h5 class="card-title">${data.phone_name}</h5>
        <button class="btn-danger px-3 py-1 rounded">Explore</button>
      </div>
      </div>
  `;
     searchResult.appendChild(div);
});
}

  const loadPhoneInfo = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;

     fetch(url)
       .then(res => res.json())
       .then(data => displayPhoneInfo(data.data));
  }

  const displayPhoneInfo = phone => {
    console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body text-primary">
      <h3 class="card-title">${phone.name}</h3>
      <h5 class="card-title">Chipset: ${phone.mainFeatures.chipSet}</h5>
      <h5 class="card-title">Display Size: ${phone.mainFeatures.displaySize}</h5>
      <h5 class="card-title">Memory: ${phone.mainFeatures.memory}</h5>
      <h5 class="card-title">Storage: ${phone.mainFeatures.storage}</h5>
      <h5 class="card-title">Bluetooth: ${phone.others.Bluetooth}</h5>
      <h5 class="card-title">GPS: ${phone.others.GPS}</h5>
      <h5 class="card-title">NFC: ${phone.others.NFC}</h5>
      <h5 class="card-title">Radio: ${phone.others.Radio}</h5>
      <h5 class="card-title">USB: ${phone.others.USB}</h5>
      <h5 class="card-title">WLN: ${phone.others.WLN}</h5>
    </div>
    </div>
    `;
    phoneDetails.appendChild(div);
  }