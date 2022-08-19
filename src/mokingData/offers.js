export default [
    {
        id: 1,
        type: 'offer-card',
        title: 'Квартиры под аренду',
        top: 50,
        description: 'Квартиры с доходностью<br> 12% годовых в Дубаи',
        image: 'images/offers/1.jpg',
        link: '#'
    },
    {
        id: 2,
        type: 'offer-card',
        title: '100 квартир для инвестиций',
        top: 100,
        description: 'Рейтинг квартир для инвестиций в Дубаи',
        image: 'images/offers/2.jpg',
        link: '#'
    },
    {
        id: 3,
        type: 'offer-card',
        title: 'Самые престижные проекты',
        top: 30,
        description: 'Квартиры в домах где живут миллионеры',
        image: [
            { id: 1, src: 'images/offers/3.jpg' },
            { id: 2, src: 'images/offers/4.jpg' },
            { id: 3, src: 'images/offers/5.jpg' },
            { id: 4, src: 'images/offers/6.jpg' }
        ],
        link: '#'
    },
    {
        id: 4,
        type: 'category-card',
        title: 'Квартиры',
        description: 'Квартиры по ценам ниже рыночных',
        image: 'images/offers/icons/star.png',
        link: '#'
    },
    {
        id: 5,
        type: 'category-card',
        title: 'Сделки',
        description: 'История сделок<br> с недвижимостью',
        image: 'images/offers/icons/arrow.png',
        link: '#'
    },
    {
        id: 6,
        type: 'category-card',
        title: 'Обмен',
        description: 'Обмен вашей квартиры<br> на новую',
        image: 'images/offers/icons/exchange.png',
        link: '#'
    },
    {
        id: 7,
        type: 'category-card',
        title: 'Оценка',
        description: 'Оцените квартиру<br> за 10 секунд',
        image: 'images/offers/icons/cash.png',
        link: '#'
    },
    {
        id: 8,
        type: 'category-card',
        title: 'Индексы',
        description: 'Индекс цен и ликвидность районов',
        image: 'images/offers/icons/lightning.png',
        link: '#'
    }
]
