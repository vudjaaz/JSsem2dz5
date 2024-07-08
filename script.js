
// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).




const parseData = JSON.parse(api);
console.log(parseData);

const bodyEl = document.querySelector('body');
parseData.forEach(item => {
    bodyEl.insertAdjacentHTML('beforeend', `
        <img src="${item.image}"></img>
        <h1>${item.type}</h1>
        <p>${item.species}</p>
        `)
});

bodyEl.style.textAlign = 'center';