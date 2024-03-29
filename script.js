const formatedlist = logininfo.map((datenew) => {
  const date = new Date(datenew.last_login);
  const newformat = date.getTime() / 1000;

  return newformat;
});

const filteredformatedList = formatedlist.filter((element) => !isNaN(element));

const finallist = filteredformatedList.sort(function (a, b) {
  return b - a;
});

console.log(finallist);
console.log(`останній: ` + finallist[0]);
console.log("найдавніше: " + finallist[finallist.length - 1]);

const sortedAge = generalinfo.sort(function (a, b) {
  return a.age - b.age;
});
console.log(`молодший: ` + sortedAge[0].age);
console.log("старший: " + sortedAge[sortedAge.length - 1].age);

const totalAge = generalinfo.reduce((sum, age) => (sum += age.age), 0);

const averageAge = Math.round(totalAge / generalinfo.length);
console.log("середній вік: " + averageAge);

const sortedDifferences = sortedAge.reduce(function (acc, age) {
  const difference = Math.abs(age.age - averageAge);
  acc.push({ difference, age });
  acc.sort(function (a, b) {
    return a.difference - b.difference;
  });

  return acc;
}, []);

const slicedDifference = sortedDifferences.slice(0, 16);
console.log(slicedDifference);

const username = document.getElementsByClassName(`username`);
const avatar = document.getElementsByClassName(`avatar`);
const description = document.getElementsByClassName(`description`);
const card = document.getElementsByClassName(`card`);
const main = document.getElementsByClassName(`main`);

slicedDifference.forEach((onecard) => {
  const card = document.createElement(`div`);
  const avatar = document.createElement(`div`);
  const description = document.createElement(`div`);
  avatar.classList.add(`avatar`);
  description.classList.add(`description`);
  card.classList.add(`card`);

  avatar.innerHTML = `<div class="imagecontainer">
  <img
    src="${onecard.age.image}"
    alt=""
    class="avatar"
  />
  </div>`;

  description.innerHTML = `
  <h2 class="fullname">${onecard.age.firstName} ${onecard.age.lastName}</h2>
  <p class="phone">${onecard.age.phone}</p>
  <p class="gmail">${onecard.age.email}</p>`;

  $(main).append(card);
  $(card).append(avatar);
  $(card).append(description);
});
