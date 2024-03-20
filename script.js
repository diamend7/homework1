const freshlist = movies.sort(function (a, b) {
  return b.year - a.year;
});

const filmname = document.getElementsByClassName(`namefilm`);
const imagefilm = document.getElementsByClassName(`image`);
const description = document.getElementsByClassName(`description`);

const fresh = freshlist.slice(0, 17);

for (let i = 0; i < filmname.length; i++) {
  filmname[i].innerHTML = fresh[i].title;
}
for (let i = 0; i < imagefilm.length; i++) {
  imagefilm[i].src = fresh[i].thumbnail;
}
for (let i = 0; i < description.length; i++) {
  description[i].innerHTML = fresh[i].extract;
}
const actionfilms = movies.filter(function (movie) {
  return movie.genres.includes(`Action`);
});
console.log(actionfilms);

const allgenres = movies.reduce(function (acc, movie) {
  movie.genres.forEach((genre) => {
    if (!acc.includes(genre)) {
      acc.push(genre);
    }
  });
  return acc;
}, []);

console.log(allgenres);
