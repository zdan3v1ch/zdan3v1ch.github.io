const body = document.querySelector('body');

const myListOfMedicines = [
  {
    name: 'Аскорбиновая кислота',
    expireTime: '01-04-2027',
  },
  {
    name: 'Витавирин',
    expireTime: '01-11-2025',
  },
  {
    name: 'Фенкарол',
    expireTime: '01-03-2026',
  },
  {
    name: 'Шприц инъекционный(2 шт.)',
    expireTime: '01-07-2027',
  },
  {
    name: 'Флоксал',
    expireTime: '01-12-2024',
  },
  {
    name: 'Лазолван сироп',
    expireTime: '01-10-2024',
  },
  {
    name: 'Наклофен',
    expireTime: '01-11-2026',
  },
  {
    name: 'Гевиран',
    expireTime: '01-12-2024',
  },
  {
    name: 'Артелак ночной',
    expireTime: '01-03-2025',
  },
  {
    name: 'Мидокалм',
    expireTime: '01-09-2026',
  },
  {
    name: 'Мелбек',
    expireTime: '01-07-2027',
  },
  {
    name: 'Ультрафастин',
    expireTime: '01-11-2025',
  },
  {
    name: 'Миконазол',
    expireTime: '01-05-2026',
  },
  {
    name: 'Гепарин',
    expireTime: '01-04-2025',
  },
  {
    name: 'Нимесил',
    expireTime: '01-08-2026',
  },
  {
    name: 'Парлазин Нео',
    expireTime: '01-06-2026',
  },
  {
    name: 'Ринодекса',
    expireTime: '01-03-2027',
  },
  {
    name: 'Лиотон',
    expireTime: '01-01-2025',
  },
  {
    name: 'Никсар',
    expireTime: '01-11-2026',
  },
  {
    name: 'Нафазолин',
    expireTime: '01-05-2025',
  },
  {
    name: 'Нозакар гель мята',
    expireTime: '01-07-2025',
  },
  {
    name: 'Тест',
    expireTime: '01-07-2024',
  },

]

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
  if(checkDate(el.expireTime)) {
    expire.classList.add('red');
  }
  medicineBlock.append(name, expire);
  mainBlock.append(medicineBlock);
})

body.append(mainBlock)
