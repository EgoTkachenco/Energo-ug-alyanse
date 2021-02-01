const state = () => ({
    contacts: {
        number_1: '+38(050) 658-27-77',
        number_1_call: '0506582777',
        number_2: '+38(097) 308-18-31',
        number_2_call: '0973081831',
        email: 'energougalyans@ukr.net'
    },
    services: {
        'elektromontazhnye-raboty': {
            icon: 'services/power',
            url: '/services/elektromontazhnye-raboty',
            jobs: ['montazh-vnutr-elektrosetei', 'montag-vneshnikh-setei', 'prokladka-kabelnih-liniy', 'elektroschit', 'bliskavkozakhist']
        },
        'avariynye-raboty': {
            icon: 'services/montazh',
            url: '/services/avariynye-raboty',
            jobs: ['remont-kl', 'avarijnyj-remont']
        },
        'elektrotehnicheskaya-laboratoriya': {
            icon: 'services/ammeter',
            url: '/services/elektrotehnicheskaya-laboratoriya',
            jobs: ['etl-04kv', 'etl-10kv']
        },
        'remont-i-obslyzhuvanie': {
            icon: 'services/remont',
            url: '/services/remont-i-obslyzhuvanie',
            jobs: ['obsluzhivanie', 'remont-i-obsluzhivanie-silovyh-transformatorov', 'remont-oborudovaniya-transformatornyh-podstanciy', 'remont-elektroshhitov']
        },
        'other': {
            icon: 'services/worker',
            url: '/services/other',
            jobs: ['proektnye-raboty', 'postavka', 'audit_elektroobladnannya']
        },
    },
    jobs: {
        // Id / serviceId / images / recomendations
        // Аварійні роботи
        'remont-kl': {
            serviceId: 'avariynye-raboty',
            images: [
                'remont-linij-1.jpg',
                'remont-linij-2.jpg',
                'remont-linij-3.jpg',
                'remont-linij-4.jpg'
            ],
            recomendations: [
                {
                    image: 'lab-2.jpg',
                    url: '/services/elektrotehnicheskaya-laboratoriya',
                    title: 'services.elektrotehnicheskaya-laboratoriya'
                },
                {
                    image: 'remont-setei-1.jpg',
                    url: '/services/avariynye-raboty/avarijnyj-remont',
                    title: 'jobs.avarijnyj-remont.name'
                },
                {
                    image: 'remont-3.jpg',
                    url: '/services/remont-i-obslyzhuvanie/remont-oborudovaniya-transformatornyh-podstanciy',
                    title: 'jobs.remont-oborudovaniya-transformatornyh-podstanciy.name'
                },
                {
                    image: 'remont-1.jpg',
                    url: '/services/remont-i-obslyzhuvanie/obsluzhivanie',
                    title: 'jobs.obsluzhivanie.name'
                }
            ]
        },
        'avarijnyj-remont': {
            serviceId: 'avariynye-raboty',
            images: [
                'remont-setei-1.jpg',
                'remont-setei-1.jpg',
                'remont-setei-2.jpg',
                'remont-setei-3.jpg',
            ],
            recomendations: [
                {
                    image: 'lab-2.jpg',
                    url: '/services/elektrotehnicheskaya-laboratoriya',
                    title: 'services.elektrotehnicheskaya-laboratoriya'
                },
                {
                    image: 'remont-2.jpg',
                    url: '/services/remont-i-obslyzhuvanie/remont-i-obsluzhivanie-silovyh-transformatorov',
                    title: 'jobs.remont-i-obsluzhivanie-silovyh-transformatorov.name'
                },
                {
                    image: 'remont-3.jpg',
                    url: '/services/remont-i-obslyzhuvanie/remont-oborudovaniya-transformatornyh-podstanciy',
                    title: 'jobs.remont-oborudovaniya-transformatornyh-podstanciy.name'
                },
                {
                    image: 'remont-1.jpg',
                    url: '/services/remont-i-obslyzhuvanie/obsluzhivanie',
                    title: 'jobs.obsluzhivanie.name'
                }
            ]
        },
        
        // Електротехнічні роботи
        'montazh-vnutr-elektrosetei': {
            serviceId: 'elektromontazhnye-raboty',
            images: [
                'remont-setei-3.jpg',
                'montazh-1.jpg',
                'montazh-6.png',
                'montazh-7.png',
                'montazh-8.png',
            ],
            recomendations: [
                {
                    image: 'lab-1.jpg',
                    url: '/services/elektrotehnicheskaya-laboratoriya/etl-04kv',
                    title: 'jobs.etl-04kv.name'
                },
                {
                    image: 'project-1.jpg',
                    url: '/services/other/proektnye-raboty',
                    title: 'jobs.proektnye-raboty.name'
                },
                
                {
                    image: 'montazh-4.jpg',
                    url: '/services/elektromontazhnye-raboty/elektroschit',
                    title: 'jobs.elektroschit.name'
                },
                {
                    image: 'remont-1.jpg',
                    url: '/services/remont-i-obslyzhuvanie/obsluzhivanie',
                    title: 'jobs.obsluzhivanie.name'
                },
            ]
        },
        'montag-vneshnikh-setei': {
            serviceId: 'elektromontazhnye-raboty',
            images: [
                'montazh-2.jpg',
                'job-back.png', 
                'montazh-2.jpg',
                'montazh.jpg',
                'montazh-10.jpg'

            ],
            recomendations: [
                {
                    image: 'lab-2.jpg',
                    url: '/services/elektrotehnicheskaya-laboratoriya/etl-10kv',
                    title: 'jobs.etl-10kv.name'
                },
                {
                    image: 'project-1.jpg',
                    url: '/services/other/proektnye-raboty',
                    title: 'jobs.proektnye-raboty.name'
                },

                {
                    image: 'remont-3.jpg',
                    url: '/services/remont-i-obslyzhuvanie/remont-oborudovaniya-transformatornyh-podstanciy',
                    title: 'jobs.remont-oborudovaniya-transformatornyh-podstanciy.name'
                },
                {
                    image: 'remont-1.jpg',
                    url: '/services/remont-i-obslyzhuvanie/obsluzhivanie',
                    title: 'jobs.obsluzhivanie.name'
                },
            ]
        },
        'prokladka-kabelnih-liniy': {
            serviceId: 'elektromontazhnye-raboty',
            images: [
                'montazh-3.jpg',
                'montazh-3.jpg',
                'prokladka-1.jpg',
                'prokladka-2.jpg',
                'prokladka-3.jpg',
            ],
            recomendations: [
                {
                    image: 'lab-2.jpg',
                    url: '/services/elektrotehnicheskaya-laboratoriya',
                    title: 'services.elektrotehnicheskaya-laboratoriya'
                },
                {
                    image: 'montazh-2.jpg',
                    url: '/services/elektromontazhnye-raboty/montag-vneshnikh-setei',
                    title: 'jobs.montag-vneshnikh-setei.name'
                },

                {
                    image: 'remont-linij-1.jpg',
                    url: '/services/avariynye-raboty/remont-kl',
                    title: 'jobs.remont-kl.name'
                },
                {
                    image: 'postavka.jpg',
                    url: '/services/other/postavka',
                    title: 'jobs.postavka.name'
                },
            ]
        },
        'elektroschit': {
            serviceId: 'elektromontazhnye-raboty',
            images: [
                'montazh-4.jpg',
                'montazh-4.jpg',
                'vru.jpg',
                'shitova.jpg',  
            ],
            recomendations: [
                {
                    image: 'remont-setei-3.jpg',
                    url: '/services/elektromontazhnye-raboty/montazh-vnutr-elektrosetei',
                    title: 'services.montazh-vnutr-elektrosetei.name'
                },
                {
                    image: 'remont-4.jpg',
                    url: '/services/remont-i-obslyzhuvanie/remont-elektroshhitov',
                    title: 'jobs.remont-elektroshhitov.name'
                },

                {
                    image: 'remont-1.jpg',
                    url: '/services/remont-i-obslyzhuvanie/obsluzhivanie',
                    title: 'jobs.obsluzhivanie.name'
                },
                {
                    image: 'audit-1.jpg',
                    url: '/services/other/audit_elektroobladnannya',
                    title: 'jobs.audit_elektroobladnannya.name'
                },
            ]
        },
        'bliskavkozakhist': {
            serviceId: 'elektromontazhnye-raboty',
            images: [
                'montazh-5.jpg',
                'montazh-5.jpg',
                'bliskavkozakhist-1.jpg',
                'bliskavkozakhist-2.jpg',
                'bliskavkozakhist-3.jpg',
            ],
            recomendations: [
                {
                    image: 'lab-1.jpg',
                    url: '/services/elektrotehnicheskaya-laboratoriya/etl-04kv',
                    title: 'jobs.etl-04kv.name'
                },
                {
                    image: 'project-1.jpg',
                    url: '/services/other/proektnye-raboty',
                    title: 'jobs.proektnye-raboty.name'
                },
                {
                    image: 'remont-1.jpg',
                    url: '/services/remont-i-obslyzhuvanie/obsluzhivanie',
                    title: 'jobs.obsluzhivanie.name'
                },
                {
                    image: 'postavka.jpg',
                    url: '/services/other/postavka',
                    title: 'jobs.postavka.name'
                },
            ]
        },

        // Лабораторія
        'etl-04kv': {
            serviceId: 'elektrotehnicheskaya-laboratoriya',
            images: [
                'lab-1.jpg',
                'lab-3.jpg',
                'lab-4.jpg',
                'lab-5.jpg',
                'lab-1.jpg',
            ],
            recomendations: [
                {
                    image: 'lab-2.jpg',
                    url: '/services/elektrotehnicheskaya-laboratoriya/etl-10kv',
                    title: 'jobs.etl-10kv.name'
                },
                {
                    image: 'remont-setei-1.jpg',
                    url: '/services/avariynye-raboty/avarijnyj-remont',
                    title: 'jobs.avarijnyj-remont.name'
                },
                {
                    image: 'remont-1.jpg',
                    url: '/services/remont-i-obslyzhuvanie/obsluzhivanie',
                    title: 'jobs.obsluzhivanie.name'
                },
                {
                    image: 'audit-1.jpg',
                    url: '/services/other/audit_elektroobladnannya',
                    title: 'jobs.audit_elektroobladnannya.name'
                },
            ]
        },
        'etl-10kv': {
            serviceId: 'elektrotehnicheskaya-laboratoriya',
            images: [
                'lab-2.jpg',
                'lab-6.jpg',
                'lab-7.jpg',
                'lab-8.jpg',
            ],
            recomendations: [
                {
                    image: 'lab-1.jpg',
                    url: '/services/elektrotehnicheskaya-laboratoriya/etl-04kv',
                    title: 'jobs.etl-04kv.name'
                },
                {
                    image: 'remont-3.jpg',
                    url: '/services/remont-i-obslyzhuvanie/remont-oborudovaniya-transformatornyh-podstanciy',
                    title: 'jobs.remont-oborudovaniya-transformatornyh-podstanciy.name'
                },
                {
                    image: 'remont-1.jpg',
                    url: '/services/remont-i-obslyzhuvanie/obsluzhivanie',
                    title: 'jobs.obsluzhivanie.name'
                },
                {
                    image: 'audit-1.jpg',
                    url: '/services/other/audit_elektroobladnannya',
                    title: 'jobs.audit_elektroobladnannya.name'
                },
            ]
        },

        // Ремонт і обслуговування
        'obsluzhivanie': {
            serviceId: 'remont-i-obslyzhuvanie',
            images: [
                'remont-1.jpg',
                'remont-1.jpg',
                'remont-5.jpg',
                'remont-6.jpg',
                'remont-7.jpg',
            ],
            recomendations: [
                {
                    image: 'lab-2.jpg',
                    url: '/services/elektrotehnicheskaya-laboratoriya',
                    title: 'services.elektrotehnicheskaya-laboratoriya'
                },
                {
                    image: 'remont-3.jpg',
                    url: '/services/remont-i-obslyzhuvanie/remont-oborudovaniya-transformatornyh-podstanciy',
                    title: 'jobs.remont-oborudovaniya-transformatornyh-podstanciy.name'
                },
                {
                    image: 'remont-2.jpg',
                    url: '/services/remont-i-obslyzhuvanie/remont-i-obsluzhivanie-silovyh-transformatorov',
                    title: 'jobs.remont-i-obsluzhivanie-silovyh-transformatorov.name'
                },
                {
                    image: 'audit-1.jpg',
                    url: '/services/other/audit_elektroobladnannya',
                    title: 'jobs.audit_elektroobladnannya.name'
                },
            ]
        },
        'remont-i-obsluzhivanie-silovyh-transformatorov': {
            serviceId: 'remont-i-obslyzhuvanie',
            images: [
                'remont-2.jpg',
                'remont-transformatora-3.jpg',
                'remont-transformatora-7.jpg',
                'remont-transformatora-1.jpg',
                'remont-transformatora-2.jpg',
            ],
            recomendations: [
                {
                    image: 'remont-1.jpg',
                    url: '/services/remont-i-obslyzhuvanie/obsluzhivanie',
                    title: 'jobs.obsluzhivanie.name'
                },
                {
                    image: 'lab-2.jpg',
                    url: '/services/elektrotehnicheskaya-laboratoriya',
                    title: 'services.elektrotehnicheskaya-laboratoriya'
                },
                {
                    image: 'remont-3.jpg',
                    url: '/services/remont-i-obslyzhuvanie/remont-oborudovaniya-transformatornyh-podstanciy',
                    title: 'jobs.remont-oborudovaniya-transformatornyh-podstanciy.name'
                },
                {
                    image: 'audit-1.jpg',
                    url: '/services/other/audit_elektroobladnannya',
                    title: 'jobs.audit_elektroobladnannya.name'
                },
            ]
        },
        'remont-oborudovaniya-transformatornyh-podstanciy': {
            serviceId: 'remont-i-obslyzhuvanie',
            images: [
                'remont-3.jpg',
                'remont-oborudovaniya-tp.jpg',
                'remont-oborudovaniya-1.jpg',
                'remont-oborudovaniya-2.jpg',
                'remont-oborudovaniya-3.jpg',

            ],
            recomendations: [
                {
                    image: 'remont-1.jpg',
                    url: '/services/remont-i-obslyzhuvanie/obsluzhivanie',
                    title: 'jobs.obsluzhivanie.name'
                },
                {
                    image: 'lab-2.jpg',
                    url: '/services/elektrotehnicheskaya-laboratoriya',
                    title: 'services.elektrotehnicheskaya-laboratoriya'
                },
                {
                    image: 'remont-2.jpg',
                    url: '/services/remont-i-obslyzhuvanie/remont-i-obsluzhivanie-silovyh-transformatorov',
                    title: 'jobs.remont-i-obsluzhivanie-silovyh-transformatorov.name'
                },
                {
                    image: 'audit-1.jpg',
                    url: '/services/other/audit_elektroobladnannya',
                    title: 'jobs.audit_elektroobladnannya.name'
                },
            ]
        },
        'remont-elektroshhitov': {
            serviceId: 'remont-i-obslyzhuvanie',
            images: [
                'remont-4.jpg',
                'remont-4.jpg',
                'remont-oborudovaniya-4.jpg',
                'remont-oborudovaniya-5.jpg',
                'remont-oborudovaniya-6.jpg',
            ],
            recomendations: [
                {
                    image: 'lab-1.jpg',
                    url: '/services/elektrotehnicheskaya-laboratoriya/etl-04kv',
                    title: 'jobs.etl-04kv.name'
                },
                {
                    image: 'project-1.jpg',
                    url: '/services/other/proektnye-raboty',
                    title: 'jobs.proektnye-raboty.name'
                },
                {
                    image: 'montazh-4.jpg',
                    url: '/services/elektromontazhnye-raboty/elektroschit',
                    title: 'jobs.elektroschit.name'
                },
                {
                    image: 'postavka.jpg',
                    url: '/services/other/postavka',
                    title: 'jobs.postavka.name'
                },
            ]
        },

        // Інші роботи
        'proektnye-raboty': {
            serviceId: 'other',
            images: [
                'project-1.jpg',
                'project-2.jpg',
                'project-3.jpg',
                'project-1.jpg'
            ],
            recomendations: [
                {
                    image: 'lab-1.jpg',
                    url: '/services/elektrotehnicheskaya-laboratoriya/etl-04kv',
                    title: 'jobs.etl-04kv.name'
                },
                {
                    image: 'remont-setei-3.jpg',
                    url: '/services/elektromontazhnye-raboty/montazh-vnutr-elektrosetei',
                    title: 'jobs.montazh-vnutr-elektrosetei.name'
                },
                {
                    image: 'montazh-2.jpg',
                    url: '/services/elektromontazhnye-raboty/montag-vneshnikh-setei',
                    title: 'jobs.montag-vneshnikh-setei.name'
                },
                {
                    image: 'montazh-5.jpg',
                    url: '/services/elektromontazhnye-raboty/bliskavkozakhist',
                    title: 'jobs.bliskavkozakhist.name'
                },
            ]
        },
        'postavka': {
            serviceId: 'other',
            images: [
                'postavka.jpg',
                'postavka.jpg',
                'postavka-1.jpg',
                'cable.jpg',
            ],
            recomendations: [
                {
                    image: 'project-1.jpg',
                    url: '/services/other/proektnye-raboty',
                    title: 'jobs.proektnye-raboty.name'
                },
                {
                    image: 'lab-2.jpg',
                    url: '/services/elektrotehnicheskaya-laboratoriya',
                    title: 'services.elektrotehnicheskaya-laboratoriya'
                },
                {
                    image: 'remont-3.jpg',
                    url: '/services/remont-i-obslyzhuvanie',
                    title: 'services.remont-i-obslyzhuvanie'
                },
                {
                    image: 'audit-1.jpg',
                    url: '/services/elektromontazhnye-raboty',
                    title: 'services.elektromontazhnye-raboty'
                },
            ]
        },
        'audit_elektroobladnannya': {
            serviceId: 'other',
            images: [
                'audit-1.jpg',
                'audit-1.jpg',
                'lab-2.jpg',
                'plans.jpg',
            ],
            recomendations: [
                {
                    image: 'remont-1.jpg',
                    url: '/services/remont-i-obslyzhuvanie/obsluzhivanie',
                    title: 'jobs.obsluzhivanie.name'
                },
                {
                    image: 'lab-2.jpg',
                    url: '/services/elektrotehnicheskaya-laboratoriya',
                    title: 'services.elektrotehnicheskaya-laboratoriya'
                },
                {
                    image: 'remont-3.jpg',
                    url: '/services/remont-i-obslyzhuvanie/remont-oborudovaniya-transformatornyh-podstanciy',
                    title: 'jobs.remont-oborudovaniya-transformatornyh-podstanciy.name'
                },
                {
                    image: 'remont-2.jpg',
                    url: '/services/remont-i-obslyzhuvanie/remont-i-obsluzhivanie-silovyh-transformatorov',
                    title: 'jobs.remont-i-obsluzhivanie-silovyh-transformatorov.name'
                },
            ]
        }
    },
    portfolio: [
        // {
        //     img: '15-Спутник.jpg',
        //     name: 'portfolio.p-1.name',
        //     description: 'portfolio.p-1.description'
        // },
        {
            img: 'marmelad.jpg',
            name: 'ТЦ МАРМЕЛАД',
            description: 'Электроизмерительные работы. Ремонт и обслуживание оборудования ТП.'
        },

    ]
});

module.exports = { state }