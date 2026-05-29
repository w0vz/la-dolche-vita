export interface MenuItem {
	id: number
	name: string
	description: string
	price: number
	image: string
	category: string
	weight: string
	popular?: boolean
	spicy?: boolean
	vegetarian?: boolean
}

export interface Category {
	id: string
	name: string
	icon: string
}

export const categories: Category[] = [
	{ id: 'all', name: 'Все', icon: '🍽️' },
	{ id: 'antipasti', name: 'Антипасти', icon: '🥗' },
	{ id: 'pizza', name: 'Пицца', icon: '🍕' },
	{ id: 'pasta', name: 'Паста', icon: '🍝' },
	{ id: 'risotto', name: 'Ризотто', icon: '🍚' },
	{ id: 'main', name: 'Основные', icon: '🥩' },
	{ id: 'desserts', name: 'Десерты', icon: '🍰' },
	{ id: 'drinks', name: 'Напитки', icon: '🍷' },
]

export const menuItems: MenuItem[] = [
	{
		id: 1,
		name: 'Брускетта с томатами',
		description:
			'Хрустящий хлеб чиабатта с сочными томатами черри, свежим базиликом, чесноком и оливковым маслом extra virgin',
		price: 490,
		image:
			'https://lifehacker.ru/wp-content/uploads/2020/01/shutterstock_454361815_1579876041-e1579876086639-scaled.jpg',
		category: 'antipasti',
		weight: '180 г',
		popular: true,
		vegetarian: true,
	},
	{
		id: 2,
		name: 'Капрезе',
		description:
			'Моцарелла буффала с томатами, свежим базиликом и бальзамическим кремом из Модены',
		price: 690,
		image:
			'https://img.iamcook.ru/old/upl/recipes/zen/u6009-cc14699a120e3b9fd9ac4a5c5ce79524.jpg',
		category: 'antipasti',
		weight: '220 г',
		vegetarian: true,
	},
	{
		id: 3,
		name: 'Карпаччо из говядины',
		description:
			'Тонко нарезанная мраморная говядина с рукколой, пармезаном и трюфельным маслом',
		price: 890,
		image:
			'https://gambrinus.ru/upload/iblock/e16/kz1cnhmbufklshjsg2pk6tgaobg4rhmc.jpg',
		category: 'antipasti',
		weight: '160 г',
		popular: true,
	},
	{
		id: 4,
		name: 'Пицца Маргарита',
		description:
			'Классическая неаполитанская пицца: соус Сан-Марцано, моцарелла фиор ди латте, свежий базилик',
		price: 650,
		image:
			'https://chudobludo.com/assets/images/products/536/picca-margarita.jpg',
		category: 'pizza',
		weight: '400 г',
		popular: true,
		vegetarian: true,
	},
	{
		id: 5,
		name: 'Пицца Дьяволо',
		description:
			'Острая пицца с салями пиканте, перцем чили, моцареллой и томатным соусом',
		price: 790,
		image: 'https://maxxi-cafe.ru/images/catalog/1dyavola.jpg',
		category: 'pizza',
		weight: '420 г',
		spicy: true,
	},
	{
		id: 6,
		name: 'Пицца Четыре сыра',
		description:
			'Моцарелла, горгонзола, пармезан и таледжо на тонком тесте ручной работы',
		price: 850,
		image: 'https://chudobludo.com/assets/images/products/537/25851.jpg',
		category: 'pizza',
		weight: '380 г',
		vegetarian: true,
	},
	{
		id: 7,
		name: 'Пицца с прошутто',
		description:
			'Прошутто крудо ди Парма, руккола, пармезан, моцарелла, вяленые томаты',
		price: 950,
		image:
			'https://shashlik-hits.ru/upload/iblock/7ab/7forvadki9ocxmsihvpyb8t07mkrvxl3.jpg',
		category: 'pizza',
		weight: '430 г',
		popular: true,
	},
	{
		id: 8,
		name: 'Карбонара',
		description:
			'Спагетти с гуанчале, желтком, пекорино романо и свежемолотым чёрным перцем по римскому рецепту',
		price: 750,
		image:
			'https://menunedeli.ru/wp-content/uploads/2022/09/Pasta-Karbonara-500%D1%85350.jpg.jpg',
		category: 'pasta',
		weight: '320 г',
		popular: true,
	},
	{
		id: 9,
		name: 'Болоньезе',
		description:
			'Тальятелле с классическим мясным рагу из говядины и свинины, томленым 4 часа',
		price: 720,
		image:
			'https://images.gastronom.ru/_SvV0QyrSEq_8q-QalthxFcka0lo-OJMy-0iT7RoYv8/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzUyMGMzODZmLTkzYmItNGY4Yy05M2U4LTAwMjlhZTc1MmUzNi5qcGc.webp',
		category: 'pasta',
		weight: '350 г',
	},
	{
		id: 10,
		name: 'Паста с трюфелем',
		description:
			'Домашние паппарделле с чёрным трюфелем, сливочным соусом и пармезаном',
		price: 1290,
		image:
			'https://images.gastronom.ru/_SvV0QyrSEq_8q-QalthxFcka0lo-OJMy-0iT7RoYv8/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzUyMGMzODZmLTkzYmItNGY4Yy05M2U4LTAwMjlhZTc1MmUzNi5qcGc.webp',
		category: 'pasta',
		weight: '300 г',
		popular: true,
	},
	{
		id: 11,
		name: 'Аррабиата',
		description:
			'Пенне в остром томатном соусе с чесноком, перцем чили и свежей петрушкой',
		price: 590,
		image:
			'https://images.gastronom.ru/_SvV0QyrSEq_8q-QalthxFcka0lo-OJMy-0iT7RoYv8/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzUyMGMzODZmLTkzYmItNGY4Yy05M2U4LTAwMjlhZTc1MmUzNi5qcGc.webp',
		category: 'pasta',
		weight: '320 г',
		spicy: true,
		vegetarian: true,
	},
	{
		id: 12,
		name: 'Ризотто с грибами',
		description:
			'Кремовое ризотто с белыми грибами порчини, пармезаном и трюфельным маслом',
		price: 850,
		image:
			'https://cdn2.botanichka.ru/wp-content/uploads/2025/08/rizotto-s-gribami-1.jpg',
		category: 'risotto',
		weight: '300 г',
		popular: true,
		vegetarian: true,
	},
	{
		id: 13,
		name: 'Ризотто с морепродуктами',
		description:
			'Ризотто с креветками, мидиями, кальмарами, шафраном и белым вином',
		price: 1190,
		image:
			'https://cdn2.botanichka.ru/wp-content/uploads/2025/08/rizotto-s-gribami-1.jpg',
		category: 'risotto',
		weight: '340 г',
	},
	{
		id: 14,
		name: 'Оссобуко',
		description:
			'Томлёная телячья голяшка с гремолатой, подаётся с шафрановым ризотто',
		price: 1590,
		image: 'https://s0.rbk.ru/v6_top_pics/media/img/5/77/347411691047775.webp',
		category: 'main',
		weight: '450 г',
		popular: true,
	},
	{
		id: 15,
		name: 'Лазанья классическая',
		description:
			'Слои домашней пасты с мясным рагу болоньезе, бешамелем и пармезаном',
		price: 790,
		image: 'https://s0.rbk.ru/v6_top_pics/media/img/5/77/347411691047775.webp',
		category: 'main',
		weight: '380 г',
		popular: true,
	},
	{
		id: 16,
		name: 'Сальтимбокка',
		description: 'Телятина с прошутто и шалфеем в соусе из белого вина и масла',
		price: 1290,
		image: 'https://s0.rbk.ru/v6_top_pics/media/img/5/77/347411691047775.webp',
		category: 'main',
		weight: '280 г',
	},
	{
		id: 17,
		name: 'Тирамису',
		description:
			'Классический итальянский десерт с маскарпоне, савоярди, эспрессо и какао',
		price: 490,
		image: 'https://s0.rbk.ru/v6_top_pics/media/img/9/42/347424804589429.webp',
		category: 'desserts',
		weight: '180 г',
		popular: true,
	},
	{
		id: 18,
		name: 'Панна Котта',
		description:
			'Нежный сливочный десерт с ванилью из Мадагаскара и ягодным соусом',
		price: 450,
		image: 'https://s0.rbk.ru/v6_top_pics/media/img/9/42/347424804589429.webp',
		category: 'desserts',
		weight: '150 г',
		vegetarian: true,
	},
	{
		id: 19,
		name: 'Канноли',
		description:
			'Хрустящие сицилийские трубочки с рикоттой, фисташками и цукатами',
		price: 390,
		image: 'https://s0.rbk.ru/v6_top_pics/media/img/9/42/347424804589429.webp',
		category: 'desserts',
		weight: '120 г',
	},
	{
		id: 20,
		name: 'Кьянти Классико',
		description: 'Красное сухое вино из Тосканы, 750 мл',
		price: 2900,
		image:
			'https://s2.wine.style/images_raw/pages/chianti-classico-riserva1578859875.jpg',
		category: 'drinks',
		weight: '750 мл',
	},
	{
		id: 21,
		name: 'Просекко',
		description: 'Игристое белое вино из Венето, бокал 150 мл',
		price: 590,
		image:
			'https://s2.wine.style/images_raw/pages/chianti-classico-riserva1578859875.jpg',
		category: 'drinks',
		weight: '150 мл',
	},
	{
		id: 22,
		name: 'Лимончелло',
		description: 'Домашний лимонный ликёр из Амальфи, 50 мл',
		price: 390,
		image:
			'https://s2.wine.style/images_raw/pages/chianti-classico-riserva1578859875.jpg',
		category: 'drinks',
		weight: '50 мл',
	},
	{
		id: 23,
		name: 'Эспрессо',
		description: 'Итальянский эспрессо из зёрен 100% арабики',
		price: 190,
		image:
			'https://www.galaktika29.ru/upload/iblock/db6/k0ta8ki954k0l5qrh3rt4214nfa40rep.jpg',
		category: 'drinks',
		weight: '30 мл',
	},
]
