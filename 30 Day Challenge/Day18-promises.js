// Exercises
// Exercises: Level 1
// const countriesAPI = "https://restcountries.com/v2/all";
// Read the countries API using fetch and print the name of country, capital, languages, population and area.
// fetch(countriesAPI)
//   .then((response) => response.json())
//   .then((data) => {
//     const infoArr = data.map(
//       ({ name, capital, languages, population, area }) => ({
//         name,
//         capital,
//         languages,
//         population,
//         area,
//       })
//     );
//     console.dir(infoArr, { depth: null });
//   })
//   .catch((error) => console.log(error));

// ASYNC AWAIT METHOD
// const getCountries = async () => {
//   try {
//     const response = await fetch(countriesAPI);
//     const countries = await response.json();
//     const countriesInfo = countries.map(
//       ({ name, capital, languages, population, area }) => ({
//         name,
//         capital,
//         languages,
//         population,
//         area,
//       })
//     );
//     console.dir(countriesInfo, { depth: null });
//   } catch (err) {
//     console.err(err);
//   }
// };

// getCountries();
// Exercises: Level 2
const catsAPI = "https://api.thecatapi.com/v1/breeds";
// Print out all the cat names in to catNames variable.
// fetch(catsAPI)
//   .then((response) => response.json())
//   .then((data) => {
//     const catNames = data.map(({ name }) => ({
//       name: name,
//     }));
//     console.log(catNames);
//   })
//   .catch((error) => console.log(error));

// Exercises: Level 3
// Read the cats api and find the average weight of cats in metric unit.
// fetch(catsAPI)
//   .then((response) => response.json())
//   .then((data) => {
//     const catWeights = data.map(({ weight }) => weight.metric.split(" - "));
//     const minAverage =
//       catWeights.reduce((acc, currVal) => Number(acc) + Number(currVal[0]), 0) /
//       catWeights.length;

//     const maxAverage =
//       catWeights.reduce((acc, currVal) => Number(acc) + Number(currVal[1]), 0) /
//       catWeights.length;
//     console.log(
//       `MinAverage:${minAverage.toFixed(2)}kg  MaxAverage:${maxAverage.toFixed(
//         2
//       )}kg`
//     );
//   })
//   .catch((error) => console.log(error));
// // Read the countries api and find out the 10 largest countries
// const getData = async (url) => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Something went wrong");
//     }

//     const countries = await response.json();
//     return countries;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const countries = await getData(countriesAPI);
// function tenLargestCountries(arr, count) {
//   return arr
//     .sort((a, b) => b.population - a.population)
//     .map(({ name, population }) => ({
//       name,
//       population: population.toLocaleString("en-GB", { timeZone: "UTC" }),
//     }))
//     .slice(0, count);
// }
// console.log(tenLargestCountries(countries, 10));
// Read the countries api and count total number of languages in the world used as officials.
const countriesAPI = "https://restcountries.com/v2/all";
// fetch(countriesAPI)
//   .then((response) => response.json())
//   .then((data) => {
//     const countryLanguage = Object.values(data)
//       .flatMap(({ languages }) => languages)
//       .map(({ name }) => name);
//     console.log(countryLanguage);
//       .reduce((acc, currVal) => {
//         acc[currVal] = (acc[currVal] || 0) + 1;
//       }, []);
//     return countryLanguage.sort((a, b) => b - a);
//   })
//   .catch((error) => console.log(error));

const getCountryInfo = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("could not get data");
    }

    const countryInfo = await response.json();
    return countryInfo;
  } catch (error) {
    console.log(error);
  }
};

const countryInfo = await getCountryInfo("https://restcountries.com/v2/all");
console.log(countryInfo);

// ASYNC+ AWAIT METHOD(CHECKEM)
// const getData = async (url) => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Fetch response was not ok");
//     }

//     const cats = await response.json();
//     return cats;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const cats = await getData("https://api.thecatapi.com/v1/breeds");

// let catWeights = cats.map(({ weight }) => weight.metric.split(" - "));
// let minWeight = (
//   catWeights.reduce((a, b) => a + +b[0], 0) / catWeights.length
// ).toFixed(2);

// let maxWeight = (
//   catWeights.reduce((a, b) => a + +b[1], 0) / catWeights.length
// ).toFixed(2);

// console.log(`Min avg: ${minWeight}kg - Max avg: ${maxWeight}kg`); // Min avg: 3.22kg - Max avg: 6.19kg

// // CHECKEM;
// const getMostPopulated = (countries, n) => {
//   return countries
//     .sort((a, b) => b.population - a.population)
//     .map(({ name, population }) => ({
//       name,
//       population: population.toLocaleString("en-GB", { timeZone: "UTC" }),
//     }))
//     .slice(0, n);
// };

// console.log(getMostPopulated(countries, 10));

// const getData = async (url) => {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Fetch response was not ok");
//     }

//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

// const countries = await getData("https://restcountries.com/v2/all");
// ONELINE CHECKEM RETURNS
// const getMostSpokenLanguages = (countries, n) => {
//   return Object.entries(
//     countries
//       .flatMap(({ languages }) => languages)
//       .map(({ name }) => name)
//       .reduce((a, b) => {
//         a[b] = (a[b] || 0) + 1;
//         return a;
//       }, [])
//   )
//     .sort((a, b) => b[1] - a[1])
//     .map((current) => ({ language: current[0], count: current[1] }))
//     .slice(0, n);
// };

// const getMostSpokenLanguages = (countries, n) => {
//   const obj = {};
//   const languages = countries.map(({ languages }) =>
//     languages.map((l) => l.name)
//   );

//   for (const lang of languages) {
//     for (const l of lang) {
//       if (obj[l]) {
//         obj[l] += 1;
//       } else {
//         obj[l] = 1;
//       }
//     }
//   }

//   const mostSpoken = Object.entries(obj)
//     .sort((a, b) => b[1] - a[1])
//     .map((current) => ({ language: current[0], count: current[1] }))
//     .slice(0, n);

//   return mostSpoken;
// };

// console.log(getMostSpokenLanguages(countries, 10));

// console.log(getMostSpokenLanguages(countries, 10));

// CHATGPT SOLUTION
// const countriesAPI = "https://restcountries.com/v2/all";
// fetch(countriesAPI)
//   .then((response) => response.json())
//   .then((data) => {
//     // Extract and flatten language names
//     const languages = data.map(({ languages }) => languages).flat(Infinity);

//     // Calculate language frequencies
//     const langFreq = languages.reduce((acc, currVal) => {
//       acc[currVal] = (acc[currVal] || 0) + 1;
//       return acc;
//     }, {}); // Initialize as an object

//     console.dir(langFreq, { depth: null });
//   })
//   .catch((error) => console.log(error));
