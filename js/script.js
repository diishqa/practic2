const data = [
    { 
        name: 'Школа программирования', 
        cat: 'Программирование', 
        age: '12–17 лет', 
        price: 'Бесплатно', 
        schedule: 'Вт, Чт 15:00–17:00',
        desc: 'Изучаем Python и создаем игры',
        org: 'IT Kids',
        orgDesc: 'Центр дополнительного образования для детей и подростков. Опытные преподаватели, современные методики.',
        contacts: '+7 (999) 123-45-67, info@itkids.ru'
    },
    { 
        name: 'Футбольная секция', 
        cat: 'Спорт', 
        age: '8–15 лет', 
        price: '1000 руб./мес.', 
        schedule: 'Пн, Ср, Пт 16:00–18:00',
        desc: 'Тренировки по футболу в команде. Развитие навыков и командного духа.',
        org: 'СпортАкадемия',
        orgDesc: 'Спортивный центр с более чем 10-летним опытом работы с детьми.',
        contacts: '+7 (999) 987-65-43, sport@academy.ru'
    },
    { 
        name: 'Музыкальная школа', 
        cat: 'Музыка', 
        age: '6–18 лет', 
        price: '1500 руб./мес.', 
        schedule: 'Вт, Чт, Сб 10:00–14:00',
        desc: 'Обучение игре на фортепиано, гитаре и вокалу.',
        org: 'Музыкальный мир',
        orgDesc: 'Школа искусств с индивидуальным подходом к каждому ученику.',
        contacts: '+7 (999) 555-12-34, music@world.ru'
    },
    { 
        name: 'Английский язык', 
        cat: 'Иностранные языки', 
        age: '7–14 лет', 
        price: '1200 руб./мес.', 
        schedule: 'Пн, Ср 17:00–19:00',
        desc: 'Разговорный английский для детей. Подготовка к школе и экзаменам.',
        org: 'Lingua Centre',
        orgDesc: 'Центр иностранных языков с носителями языка.',
        contacts: '+7 (999) 333-22-11, info@lingua.ru'
    },
    { 
        name: 'Художественная студия', 
        cat: 'Творчество', 
        age: '5–16 лет', 
        price: '800 руб./мес.', 
        schedule: 'Ср, Пт 15:00–17:00',
        desc: 'Рисование, лепка, живопись и декоративно-прикладное искусство.',
        org: 'Арт-Мир',
        orgDesc: 'Творческая студия с профессиональными художниками-педагогами.',
        contacts: '+7 (999) 777-88-99, art@mir.ru'
    }
];
const list = document.getElementById('list');
const s = document.getElementById('search');
const c = document.getElementById('category');
function render() {
    if (!list) return;
    list.innerHTML = '';
    const filtered = data.filter(x => 
        (!c.value || x.cat === c.value) && 
        x.name.toLowerCase().includes(s.value.toLowerCase())
    );
    filtered.forEach((x, index) => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <h3>${x.name}</h3>
            <p>${x.cat}</p>
            <p><strong>${x.price}</strong></p>
            <button class="btn" onclick="openModal(${index})">Подробнее</button>
        `;
        list.appendChild(div);
    });
}
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
function openModal(index) {
    if (!modal) return;
    const item = data[index];
    document.getElementById('modal-title').textContent = item.name;
    document.getElementById('modal-body').innerHTML = `
        <p><strong>Категория:</strong> ${item.cat}</p>
        <p><strong>Возраст:</strong> ${item.age}</p>
        <p><strong>Стоимость:</strong> ${item.price}</p>
        <p><strong>Расписание:</strong> ${item.schedule}</p>
        <p><strong>Описание:</strong> ${item.desc}</p>
        <hr>
        <h4>Об организации</h4>
        <p><strong>Название:</strong> ${item.org}</p>
        <p><strong>О нас:</strong> ${item.orgDesc}</p>
        <p><strong>Контакты:</strong> ${item.contacts}</p>
    `;
    document.getElementById('modal-message').textContent = '';
    document.getElementById('signup-btn').onclick = function() {
        document.getElementById('modal-message').textContent = 'Заявка на запись успешно отправлена!';
    };
    modal.style.display = 'block';
}
if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };
}
window.onclick = function(event) {
    if (modal && event.target === modal) {
        modal.style.display = 'none';
    }
};
if (s) s.oninput = render;
if (c) c.onchange = render;
if (render) render();