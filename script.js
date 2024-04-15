class User {
  #_name;
  #_surname;
  #_year;

  constructor(name, surname, year) {
    this.#_name = name;
    this.#_surname = surname;
    this.#_year = year;
  }

  get name() {
    return this.#_name;
  }
  get surname() {
    return this.#_surname;
  }
  get year() {
    return this.#_year;
  }

  getFullName() {
    return this.#_name + " " + this.#_surname;
  }

  getAge() {
    return new Date().getFullYear() - this.#_year;
  }
}

const user = new User("BRuce", "BRown", 2001);

console.log(user.getFullName());
console.log(user.getAge());

class Student extends User {
  #_rates = new Array(30);
  #_activity = new Array(30);

  constructor(name, surname, year) {
    super(name, surname, year);
  }
  get rates() {
    return this.#_rates;
  }
  get activity() {
    return this.#_activity;
  }

  setMark(rate) {
    if (typeof rate === "number" && rate <= 10 && rate > 0) {
      const emptyIndex = this.#_rates.findIndex((bal) => bal === undefined);
      if (emptyIndex !== -1) {
        this.#_rates[emptyIndex] = rate;
      }
    } else {
      console.log(`Rate ${rate} is not valid value. Should be from 0 to 10`);
    }
  }

  present() {
    const emptyIndex = this.#_activity.findIndex((bal) => bal === undefined);
    if (emptyIndex !== -1) {
      this.#_activity[emptyIndex] = 1;
    }
  }

  absent() {
    const emptyIndex = this.#_activity.findIndex((bal) => bal === undefined);
    if (emptyIndex !== -1) {
      this.#_activity[emptyIndex] = 0;
    }
  }

  mediumMark() {
    const medrate = this.#_rates.filter((bal) => typeof bal === "number");
    const total = medrate.reduce((acc, el) => (acc += el), 0);
    const tryone = total / medrate.length;
    console.log(tryone);

    return tryone;
  }

  mediumVisit() {
    const filtered = this.#_activity.filter((val) => val !== undefined);
    const total = filtered.reduce((acc, cur) => acc + cur, 0);
    return total / filtered.length;
  }

  summary() {
    if (this.mediumMark() > 9 && this.mediumVisit() > 0.9) {
      return `Середня оцінка: ${this.mediumMark().toFixed(
        2
      )} Середнє відвідування: ${this.mediumVisit().toFixed(
        2
      )} Молодець! Так тримати!`;
    } else if (this.mediumMark() > 9 || this.mediumVisit() > 0.9) {
      return `Середня оцінка: ${this.mediumMark().toFixed(
        2
      )} Середнє відвідування: ${this.mediumVisit().toFixed(
        2
      )} Норм. Але можна постаратись і краще.`;
    } else {
      return `Середня оцінка: ${this.mediumMark().toFixed(
        2
      )} Середнє відвідування: ${this.mediumVisit().toFixed(
        2
      )} Погано! Так ти нічому не навчишся.`;
    }
  }
}

const student = new Student("pitya", "gagarin", 17);

student.setMark(8);
student.setMark(10);
student.setMark(10);
student.setMark("A");

// student.present(false);
student.present();
student.absent();
student.absent();
student.present();
student.absent();
student.present();
student.present();

console.log(student.summary());
// console.log(student.mediumVisit());
// console.log(student.mediumMark());

class Teacher extends User {
  constructor(name, surname, year) {
    super(name, surname, year);
    this._groups = [];
  }

  _addGroup(group) {
    this._groups.push(group);
  }

  _changeStatus(group) {
    const foundGroup = this._groups.find((onegr) => onegr.name === group.name);
    if (foundGroup) {
      foundGroup.active = !foundGroup.active;
    } else {
      console.log("Group not found.");
    }
  }

  get groups() {
    return this._groups;
  }

  get activeGroups() {
    return this._groups.filter((group) => group.active);
  }
}

const group = new Teacher("John", `Gigir`, 35);

group._addGroup({ name: "Math", active: true });
group._addGroup({ name: "English", active: true });

group._changeStatus({ name: "Math", active: false });
console.log(group.groups);
console.log(group.activeGroups);
