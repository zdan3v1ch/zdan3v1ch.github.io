const body = document.querySelector('body');

import { myListOfMedicines } from '/list.js'

const sortArray = myListOfMedicines.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
console.log(sortArray)

function checkDate(data) {
  let dateParts = data.split("-");
  let day = parseInt(dateParts[0]);
  let month = parseInt(dateParts[1]) - 1;
  let year = parseInt(dateParts[2]);
  let date = new Date(year, month, day);
  let now = Date.now();
  if (date.getTime() < now) {
    return true;
  }
  return false;
}
const mainBlock = document.createElement('main');

sortArray.forEach((el) => {
  const medicineBlock = document.createElement('div');
  medicineBlock.classList.add('medicineBlock');
  const name = document.createElement('p');
  name.classList.add('name');
  const expire = document.createElement('p');
  expire.classList.add('expire')
  name.textContent = el.name;
  expire.textContent = `до: ${el.expireTime}`;
  if (checkDate(el.expireTime)) {
    expire.classList.add('red');
  }
  medicineBlock.append(name, expire);
  mainBlock.append(medicineBlock);
})

body.append(mainBlock)
