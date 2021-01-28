const state = () => ({
    services: {
        'elektromontazhnye-raboty': {
            icon: 'power-tower',
            url: '/services/elektromontazhnye-raboty',
            jobs: ['remont-kl', 'avarijnyj-remont']
        },
        'avariynye-raboty': {
            icon: 'electrical-sign',
            url: '/services/avariynye-raboty',
            jobs: ['montazh-vnutr-elektrosetei', 'montag-vneshnikh-setei', 'prokladka-kabelnih-liniy', 'elektroschit', 'bliskavkozakhist']
        },
        'elektrotehnicheskaya-laboratoriya': {
            icon: 'multimeter',
            url: '/services/elektrotehnicheskaya-laboratoriya',
            jobs: ['etl-04kv', 'etl-10kv']
        },
        'remont-i-obslyzhuvanie': {
            icon: 'transformer',
            url: '/services/remont-i-obslyzhuvanie',
            jobs: ['obsluzhivanie', 'remont-i-obsluzhivanie-silovyh-transformatorov', 'remont-oborudovaniya-transformatornyh-podstanciy', 'remont-elektroshhitov']
        },
        'proektnye-raboty': {
            icon: 'house',
            url: '/services/proektnye-raboty',
            jobs: ['proektnye-raboty']
        },

        // Поставка Проекти и аудит 3 категории  3 работы -> Сделать 1 категорию Другое 3 работи  ??? 
        'postavka': {
            icon: 'coal',
            url: '/services/postavka',
            jobs: ['postavka']
        },
    },
    jobs: {
        // Id / serviceId / images / recomendations
        'remont-kl': {
            serviceId: 'elektromontazhnye-raboty',
            images: [
                'Kabelshchik.jpg'
            ],
            recomendations: []
        },
        'avarijnyj-remont': {
            name: 'Аварийный ремонт электросетей',
            images: [
                'Kabelshchik.jpg'
            ],
            description: `
                        Специалисты компании ЕНЕРГОЮГ АЛЬЯНС проводят весь комплекс работ по ремонту кабельных линий 0,4 и 10 кВ, с использованием собственных материалов, установок и оборудования.
                        <br /><br />
                        Заказывая работы по ремонту КЛ у нас, Вы можете быть уверены, что получите качественные услуги и восстановление надежного электроснабжения в кратчайшие сроки.
                        <br> 
                        <b>Ремонт кабельных линий проводится путем выполнения следующих работ:</b>
                        <ul>
                            <li>оперативный выезд электролаборатории для поиска места повреждения — срок реагирования в пределах двух часов</li>
                            <li>согласование с энергоснабжающей компанией вопросов отключения и включения КЛ (снятие и установка пломб, при необходимости)</li>
                            <li>выполнение работ по ремонту КЛ (земляные работы, замена поврежденного участка, монтаж муфт)</li>
                            <li>открытие аварийного ордера на временное нарушение благоустройства</li>
                            <li>испытание кабельной линии после ремонта, оформление протоколов</li>
                            <li>восстановление благоустройства (асфальтирование, установка ФЭМ и т.д.)</li>
                        </ul>                     
                    `
        },
        'montazh-vnutr-elektrosetei': {
            name: 'Монтаж внутренних электросетей',
            images: [
                'Kabelshchik.jpg'
            ],
        },
        'montag-vneshnikh-setei': {
            name: 'Монтаж внешних электросетей',
            images: [
                'Kabelshchik.jpg'
            ],
        },
        'prokladka-kabelnih-liniy': {
            name: 'Прокладка кабельных линий',
            images: [
                'Kabelshchik.jpg'
            ],
        },
        'elektroschit': {
            name: 'Изготовление и монтаж электрощитового оборудования',
            images: [
                'Kabelshchik.jpg'
            ],
        },
        'bliskavkozakhist': {
            name: 'Молниезащита и заземление',
            images: [
                'Kabelshchik.jpg'
            ],
        },
    },
    portfolio: [
        {
            img: 'marmelad.jpg',
            name: 'ТЦ МАРМЕЛАД',
            description: 'Электроизмерительные работы. Ремонт и обслуживание оборудования ТП.'
        }
    ]
});

module.exports = { state }