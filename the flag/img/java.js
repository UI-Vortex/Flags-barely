class Countries {
    fOpen = async (url) => {
        let response = await fetch(url);

        if (response.ok) return response.json()
        else throw new Error(`you are not able to connect this website for a while ${url}`)
    }

    getCountryAll = () => this.fOpen("https://restcountries.com/v3.1/all");
 
}
const countryData = new Countries();
function renderCountry() {
    // console.log(countryCard)
    countryData.getCountryAll().then((data, i) => {
        console.log(data)
        // console.log(data[0].capital[0])
        data.forEach(item => {
            const countryCards = document.querySelector('.flag-background');
            const countryCard = document.createElement('a');
            countryCard.classList.add('country-card')
            countryCard.setAttribute('href', 'country-inner.html')
            console.log(item)
            countryCard.innerHTML = `

            <a href="" class="flag-item">
            <img src="${item.flags.png}" alt="">
            <br> <br>
            <div class="flag-texts">
                <h3 class="the-title">${item.altSpellings[1]}</h3>
                <br>
                <p class="population after1">Population: ${item.capitalInfo['latlng']}</p>
                <p class="region after2">Region: ${item.region}</p>
                <p class="capital after3">Capital: ${item.capital}</p>
            </div>
           </a>

       `
            countryCards.append(countryCard)
        });
    })
}
renderCountry()