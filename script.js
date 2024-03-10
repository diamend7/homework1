const smoke = confirm(`Are you smoke?`);

let age = Number(prompt(`Enter your age`));

console.log(isNaN(age));
// if (isNaN(age) === true) {
while (isNaN(age) === true || age === 0) {
  age = Number(prompt(`Enter your age`));
  // alert(`Enter your age or i will find you F5 `);
}
// }
console.log(age);

let named = prompt(`Enter your name`);
while (named === null || named.trim() === ``) {
  // name = `Інвалід`;
  named = prompt(`Enter your name`);
}

// ,.больше
if (age > 18) {
  if (!smoke) {
    alert("Супер " + named + "! Мабуть ще й спортом займаєшся!");
  } else {
    alert("Що ж " + named + " ,це твій вібір. Але я не радив би курити");
  }
}

//менше
if (age < 18) {
  if (!smoke) {
    alert("Молодець " + named + "! Гарний приклад для своїх однолітків");
  } else {
    alert(named + ", а твої батьки знають про це?");
  }
}

console.log(smoke);
console.log(age);
