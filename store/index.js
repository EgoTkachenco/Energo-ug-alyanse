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
            serviceId: 'elektromontazhnye-raboty',
            images: [
                'Kabelshchik.jpg'
            ],
            recomendations: []
        },
            
        'montazh-vnutr-elektrosetei': {
            serviceId: 'avariynye-raboty',
            images: [
                'Kabelshchik.jpg'
            ],
            recomendations: []
        },
        'montag-vneshnikh-setei': {
            serviceId: 'avariynye-raboty',
            images: [
                'Kabelshchik.jpg'
            ],
            recomendations: []
        },
        'prokladka-kabelnih-liniy': {
            serviceId: 'avariynye-raboty',
            images: [
                'Kabelshchik.jpg'
            ],
            recomendations: []
        },
        'elektroschit': {
            serviceId: 'avariynye-raboty',
            images: [
                'Kabelshchik.jpg'
            ],
            recomendations: []
        },
        'bliskavkozakhist': {
            serviceId: 'avariynye-raboty',
            images: [
                'Kabelshchik.jpg'
            ],
            recomendations: []
        },

        'etl-04kv': {
            serviceId: 'elektrotehnicheskaya-laboratoriya',
            images: [
                'Kabelshchik.jpg'
            ],
            recomendations: []
        },
        'etl-10kv': {
            serviceId: 'elektrotehnicheskaya-laboratoriya',
            images: [
                'Kabelshchik.jpg'
            ],
            recomendations: []
        },

        'obsluzhivanie': {
            serviceId: 'remont-i-obslyzhuvanie',
            images: [
                'Kabelshchik.jpg'
            ],
            recomendations: []
        },
        'remont-i-obsluzhivanie-silovyh-transformatorov': {
            serviceId: 'remont-i-obslyzhuvanie',
            images: [
                'Kabelshchik.jpg'
            ],
            recomendations: []
        },
        'remont-oborudovaniya-transformatornyh-podstanciy': {
            serviceId: 'remont-i-obslyzhuvanie',
            images: [
                'Kabelshchik.jpg'
            ],
            recomendations: []
        },
        'remont-elektroshhitov': {
            serviceId: 'remont-i-obslyzhuvanie',
            images: [
                'Kabelshchik.jpg'
            ],
            recomendations: []
        },

        'proektnye-raboty': {
            serviceId: 'proektnye-raboty',
            images: [
                'Kabelshchik.jpg'
            ],
            recomendations: []
        },

        'postavka': {
            serviceId: 'postavka',
            images: [
                'Kabelshchik.jpg'
            ],
            recomendations: []
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