type Brewery = {
  id: string;
  name: string;
  brewery_type: string;
  street: string;
  address_2: string | null;
  address_3: string | null;
  city: string;
  state: string;
  county_province: string | null;
  postal_code: string;
  country: string;
  longitude: string | null;
  latitude: string | null;
  phone: string | null;
  website_url: string | null;
  updated_at: string;
  created_at: string;
};

type State = {
  targetedState: string;
  breweries: Brewery[];
};

let state: State = {
  targetedState: "",
  breweries: [],
};

function updateTargetedState() {
  let formEl = document.querySelector<HTMLFormElement>("#select-state-form");
  if (!formEl) return;
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!formEl) return;
    state.targetedState = formEl["select-state"].value;
    if (state.targetedState === "") state.breweries = [];
    getBreweries();
    render();
  });
}

function searchBreweries() {
  let searchBreweriesForm = document.querySelector<HTMLFormElement>(
    "#search-breweries-form"
  );
  if (!searchBreweriesForm) return;
  let searchBreweriesInput =
    document.querySelector<HTMLInputElement>("#search-breweries");
  searchBreweriesForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!searchBreweriesInput) return;
    let searchText = searchBreweriesInput.value;

    let filteredBreweries = state.breweries.filter((brewery) => {
      return brewery.name.toLowerCase().includes(searchText.toLowerCase());
    });
    renderBreweries(filteredBreweries);
  });
}

function getBreweries() {
  if (state.targetedState === "") return;
  fetch(
    `https://api.openbrewerydb.org/breweries?by_state=${state.targetedState}&per_page=10`
  )
    .then((response) => response.json())
    .then((breweries) => {
      state.breweries = breweries;
    });
}

function renderHeader() {
  let mainSection = document.querySelector("main");
  if (mainSection === null) return;

  let titleEl = document.createElement("h1");
  titleEl.textContent = "List of Breweries";

  let headerEl = document.createElement("header");
  headerEl.className = "search-bar";

  let searchBreweriesForm = document.createElement("form");
  searchBreweriesForm.id = "search-breweries-form";
  searchBreweriesForm.autoComplete = "off";

  let searchBreweriesLabel = document.createElement("label");
  searchBreweriesLabel.htmlFor = "search-breweries";

  let labelH2El = document.createElement("h2");
  labelH2El.textContent = "Search Breweries:";

  let searchBreweriesInput = document.createElement("input");
  searchBreweriesInput.id = "search-breweries";
  searchBreweriesInput.name = "search-breweries";
  searchBreweriesInput.type = "text";

  searchBreweriesLabel.append(labelH2El);
  searchBreweriesForm.append(searchBreweriesLabel, searchBreweriesInput);
  headerEl.append(searchBreweriesForm);

  mainSection.append(titleEl, headerEl);
}

function renderBrewery(brewery: Brewery) {
  let breweriesList = document.querySelector(".breweries-list");
  if (breweriesList === null) return;

  let breweryLi = document.createElement("li");

  let breweryName = document.createElement("h2");
  breweryName.textContent = brewery.name;

  let breweryType = document.createElement("div");
  breweryType.className = "type";
  breweryType.textContent = brewery.brewery_type;

  let breweryAddressSection = document.createElement("section");
  breweryAddressSection.className = "address";

  let breweryAddressH3El = document.createElement("h3");
  breweryAddressH3El.textContent = "Address:";

  let breweryAddress = document.createElement("p");
  breweryAddress.textContent = brewery.street;

  let breweryZIPAddress = document.createElement("p");

  let addressText = document.createElement("strong");
  addressText.textContent = `${brewery.city}, ${brewery.postal_code}`;

  breweryZIPAddress.append(addressText);
  breweryAddressSection.append(
    breweryAddressH3El,
    breweryAddress,
    breweryZIPAddress
  );

  let phoneNoSection = document.createElement("section");
  phoneNoSection.className = "phone";

  let phoneNoH3El = document.createElement("h3");
  phoneNoH3El.textContent = "Phone:";

  let phoneNo = document.createElement("p");
  phoneNo.textContent = brewery.phone;

  phoneNoSection.append(phoneNoH3El, phoneNo);

  let websiteSection = document.createElement("section");
  websiteSection.className = "link";

  let websiteLinkEl = document.createElement("a");
  websiteLinkEl.href = String(brewery.website_url);
  websiteLinkEl.target = "_blank";
  websiteLinkEl.textContent = "Visit Website";

  websiteSection.append(websiteLinkEl);

  breweryLi.append(
    breweryName,
    breweryType,
    breweryAddressSection,
    phoneNoSection,
    websiteSection
  );

  breweriesList.append(breweryLi);
}

function renderBreweries(breweries: Brewery[]) {
  let mainSection = document.querySelector("main");
  if (mainSection === null) return;

  let breweriesArticle = document.createElement("article");

  let breweriesList = document.createElement("ul");
  breweriesList.className = "breweries-list";

  breweriesArticle.append(breweriesList);
  mainSection.append(breweriesArticle);

  for (let brewery of breweries) {
    renderBrewery(brewery);
  }
}

function render() {
  let mainSection = document.querySelector("main");
  if (mainSection === null) return;
  mainSection.textContent = "";

  renderHeader();
  renderBreweries(state.breweries);
}

render();
updateTargetedState();
