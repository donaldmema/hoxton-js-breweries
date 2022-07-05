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

let breweriesEx = [
  {
    id: "circle-9-brewing-san-diego",
    name: "Circle 9 Brewing",
    brewery_type: "micro",
    street: "7292 Opportunity Rd Ste C",
    address_2: null,
    address_3: null,
    city: "San Diego",
    state: "California",
    county_province: null,
    postal_code: "92111-2223",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: "8586342537",
    website_url: "http://www.circle9brewing.com",
    updated_at: "2021-10-23T02:24:55.243Z",
    created_at: "2021-10-23T02:24:55.243Z",
  },
  {
    id: "latchkey-brewing-company-san-diego",
    name: "Latchkey Brewing Company",
    brewery_type: "micro",
    street: "1795 Hancock St Mission Brewery Plaza",
    address_2: null,
    address_3: null,
    city: "San Diego",
    state: "California",
    county_province: null,
    postal_code: "92110-2006",
    country: "United States",
    longitude: null,
    latitude: null,
    phone: "9165551212",
    website_url: "http://www.latchkeybrew.com",
    updated_at: "2021-10-23T02:24:55.243Z",
    created_at: "2021-10-23T02:24:55.243Z",
  },
  {
    id: "10-barrel-brewing-co-san-diego",
    name: "10 Barrel Brewing Co",
    brewery_type: "large",
    street: "1501 E St",
    address_2: null,
    address_3: null,
    city: "San Diego",
    state: "California",
    county_province: null,
    postal_code: "92101-6618",
    country: "United States",
    longitude: "-117.129593",
    latitude: "32.714813",
    phone: "6195782311",
    website_url: "http://10barrel.com",
    updated_at: "2021-10-23T02:24:55.243Z",
    created_at: "2021-10-23T02:24:55.243Z",
  },
  {
    id: "2kids-brewing-company-san-diego",
    name: "2Kids Brewing Company",
    brewery_type: "micro",
    street: "8680 Miralani Dr Ste 123",
    address_2: null,
    address_3: null,
    city: "San Diego",
    state: "California",
    county_province: null,
    postal_code: "92126-6391",
    country: "United States",
    longitude: "-117.137429",
    latitude: "32.896584",
    phone: "8584805437",
    website_url: "http://www.2kidsBrewing.com",
    updated_at: "2021-10-23T02:24:55.243Z",
    created_at: "2021-10-23T02:24:55.243Z",
  },
  {
    id: "32-north-brewing-co-san-diego",
    name: "32 North Brewing Co",
    brewery_type: "closed",
    street: "8655 Production Ave Ste A",
    address_2: null,
    address_3: null,
    city: "San Diego",
    state: "California",
    county_province: null,
    postal_code: "92121-2258",
    country: "United States",
    longitude: "-117.1649841601659",
    latitude: "32.88313236843027",
    phone: null,
    website_url: null,
    updated_at: "2021-10-23T02:24:55.243Z",
    created_at: "2021-10-23T02:24:55.243Z",
  },
  {
    id: "abnormal-beer-company-san-diego",
    name: "Abnormal Beer Company",
    brewery_type: "micro",
    street: "16990 Via Tazon Ste 123",
    address_2: null,
    address_3: null,
    city: "San Diego",
    state: "California",
    county_province: null,
    postal_code: "92127-1649",
    country: "United States",
    longitude: "-117.08575",
    latitude: "33.02391",
    phone: "8586182463",
    website_url: "http://abnormalbeer.co",
    updated_at: "2021-10-23T02:24:55.243Z",
    created_at: "2021-10-23T02:24:55.243Z",
  },
  {
    id: "acoustic-ales-brewing-experiment-san-diego",
    name: "Acoustic Ales Brewing Experiment",
    brewery_type: "closed",
    street: "1795 Hancock St Ste P1",
    address_2: null,
    address_3: null,
    city: "San Diego",
    state: "California",
    county_province: null,
    postal_code: "92110-2006",
    country: "United States",
    longitude: "-117.18404653688354",
    latitude: "32.74219078528572",
    phone: "6192992537",
    website_url: "http://www.acousticales.com",
    updated_at: "2021-10-23T02:24:55.243Z",
    created_at: "2021-10-23T02:24:55.243Z",
  },
  {
    id: "alesmith-brewing-co-san-diego",
    name: "AleSmith Brewing Co",
    brewery_type: "regional",
    street: "9990 Alesmith Ct",
    address_2: null,
    address_3: null,
    city: "San Diego",
    state: "California",
    county_province: null,
    postal_code: "92126-4200",
    country: "United States",
    longitude: "-117.14954959509429",
    latitude: "32.888584581888374",
    phone: "8585499888",
    website_url: "http://www.alesmith.com",
    updated_at: "2021-10-23T02:24:55.243Z",
    created_at: "2021-10-23T02:24:55.243Z",
  },
  {
    id: "align-brewing-co-san-diego",
    name: "Align Brewing Co",
    brewery_type: "micro",
    street: "8680 Miralani Dr",
    address_2: null,
    address_3: null,
    city: "San Diego",
    state: "California",
    county_province: null,
    postal_code: "92126-6300",
    country: "United States",
    longitude: "-117.137429",
    latitude: "32.896584",
    phone: null,
    website_url: "http://www.facebook.com/alignbrewing",
    updated_at: "2021-10-23T02:24:55.243Z",
    created_at: "2021-10-23T02:24:55.243Z",
  },
  {
    id: "alpine-beer-company-san-diego",
    name: "Alpine Beer Company",
    brewery_type: "brewpub",
    street: "6550 Mira Mesa Blvd",
    address_2: null,
    address_3: null,
    city: "San Diego",
    state: "California",
    county_province: null,
    postal_code: "92121-4100",
    country: "United States",
    longitude: "-117.113975",
    latitude: "32.9167796",
    phone: "6194452337",
    website_url: "http://www.alpinebrewing.com",
    updated_at: "2021-10-23T02:24:55.243Z",
    created_at: "2021-10-23T02:24:55.243Z",
  },
];

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

function renderBreweries() {
  let mainSection = document.querySelector("main");
  if (mainSection === null) return;

  let breweriesArticle = document.createElement("article");

  let breweriesList = document.createElement("ul");
  breweriesList.className = "breweries-list";

  for (let brewery of breweriesEx) {
    renderBrewery(brewery);
  }

  breweriesArticle.append(breweriesList);
  mainSection.append(breweriesArticle);
}

function render() {
  renderHeader();
  renderBrewery(breweriesEx[0]);
  renderBreweries();
}

render();
