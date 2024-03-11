const smoke = confirm(`Are you smoke?`);

let age = Number(prompt(`Enter your age`));

console.log(isNaN(age));

while (age >= 100 || age <= 1 || isNaN(age) === true || age === 0) {
  age = Number(prompt(`Enter your age`));
}

console.log(age);

let named = prompt(`Enter your name`);
while (named === null || named.trim() === ``) {
  named = prompt(`Enter your name`);
}

if (age >= 18) {
  if (!smoke) {
    alert("Супер " + named + "! Мабуть ще й спортом займаєшся!");
  } else {
    alert("Що ж " + named + " ,це твій вібір. Але я не радив би курити");
  }
}

if (age <= 17) {
  if (!smoke) {
    alert("Молодець " + named + "! Гарний приклад для своїх однолітків");
  } else {
    alert(named + ", а твої батьки знають про це?");
  }
}

console.log(smoke);
console.log(age);
