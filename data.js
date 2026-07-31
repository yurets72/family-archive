const PEOPLE = [

{
id:1,
name:"Девятков Юрий Владимирович",
life:"26.12.1986 —",
role:"Вы",
birthPlace:"г. Ишим",
deathPlace:"",
father:3,
mother:7,
spouse:null,
children:[],
siblings:[2],
confidence:"green",
sources:[
"Личные сведения"
],
bio:"Исследователь истории рода Девятковых."
},

{
id:2,
name:"Девятков Данил Владимирович",
life:"05.02.1976 —",
role:"Родной брат",
birthPlace:"",
deathPlace:"",
father:3,
mother:7,
spouse:null,
children:[],
siblings:[1],
confidence:"green",
sources:[
"Личные сведения"
],
bio:"Родной брат Юрия."
},

{
id:3,
name:"Девятков Владимир Юрьевич",
life:"23.07.1950 — 23.07.1996",
role:"Отец",
birthPlace:"г. Тюмень",
deathPlace:"г. Тюмень",
father:4,
mother:9,
spouse:7,
children:[1,2],
siblings:[],
confidence:"green",
sources:[
"Семейные сведения"
],
bio:"Родился в Тюмени."
},

{
id:4,
name:"Девятков Юрий Иванович",
life:"06.03.1920 — 22.01.1989",
role:"Дед",
birthPlace:"Тюменская область",
deathPlace:"г. Тюмень",
father:5,
mother:null,
spouse:9,
children:[3],
siblings:[],
confidence:"green",
sources:[
"Архивы ВОВ",
"ОБД Мемориал"
],
bio:"Политрук 98-го пограничного полка НКВД. Награжден орденом Красной Звезды и медалью «За отвагу». Дошел до Берлина."
},

{
id:5,
name:"Девятков Иван Иванович",
life:"1889 — 03.11.1937",
role:"Прадед",
birthPlace:"Тюменская область",
deathPlace:"г. Тюмень",
father:10,
mother:null,
spouse:null,
children:[4],
siblings:[6,8],
confidence:"green",
sources:[
"ГАСО",
"Списки лишенных избирательных прав",
"Документы о репрессии"
],
bio:"Владелец промышленного предприятия. Проживал: Тюмень, ул. Нагорная, 6. Репрессирован и расстрелян 3 ноября 1937 года."
},

{
id:6,
name:"Девятков Алексей Иванович",
life:"— 03.11.1937",
role:"Брат Ивана Ивановича",
birthPlace:"Тюменская область",
deathPlace:"г. Тюмень",
father:10,
mother:null,
spouse:null,
children:[],
siblings:[5,8],
confidence:"green",
sources:[
"writer-tyumen.ru"
],
bio:"Расстрелян в один день вместе с братом Иваном Ивановичем."
},

{
id:7,
name:"Герасимова Ольга Данииловна",
life:"22.01.1954 — 25.03.2024",
role:"Мама",
birthPlace:"с. Пильтун",
deathPlace:"",
father:11,
mother:12,
spouse:3,
children:[1,2],
siblings:[13],
confidence:"green",
sources:[
"Семейные сведения"
],
bio:"Учитель."
},

{
id:8,
name:"Девятков Василий Семенович",
life:"1895 —",
role:"Предполагаемый родственник",
birthPlace:"Тюменская область",
deathPlace:"",
father:10,
mother:null,
spouse:null,
children:[],
siblings:[5,6],
confidence:"orange",
sources:[
"Архивные списки"
],
bio:"Кузнец. Родственная связь требует проверки."
},

{
id:9,
name:"Девяткова Валентина Ивановна",
life:"≈1920-е — ≈2010-е",
role:"Бабушка",
birthPlace:"",
deathPlace:"г. Тюмень",
father:null,
mother:null,
spouse:4,
children:[3],
siblings:[],
confidence:"yellow",
sources:[
"Семейные воспоминания"
],
bio:"Проживала: ул. Котельщиков, 17."
},

{
id:10,
name:"Девятков Иван",
life:"",
role:"Прапрадед",
birthPlace:"",
deathPlace:"",
father:null,
mother:null,
spouse:null,
children:[5,6,8],
siblings:[],
confidence:"yellow",
sources:[
"Реконструкция по семейному древу"
],
bio:"Существование подтверждается косвенно."
},

{
id:11,
name:"Герасимов Даниил Тимофеевич",
life:"02.04.1916 — 08.03.1958",
role:"Дед",
birthPlace:"Украина",
deathPlace:"Сахалин",
father:14,
mother:15,
spouse:12,
children:[7,13],
siblings:[],
confidence:"green",
sources:[
"Семейные сведения"
],
bio:"После Великой Отечественной войны переехал на Сахалин."
},

{
id:12,
name:"Герасимова Евгения Даниловна",
life:"1920-е —",
role:"Бабушка",
birthPlace:"Украина",
deathPlace:"Сахалин",
father:null,
mother:null,
spouse:11,
children:[7,13],
siblings:[],
confidence:"yellow",
sources:[
"Семейные воспоминания"
],
bio:"Переехала на Сахалин после войны."
},

{
id:13,
name:"Яловец Нелли Даниловна",
life:"",
role:"Тетя",
birthPlace:"Сахалин",
deathPlace:"",
father:11,
mother:12,
spouse:null,
children:[],
siblings:[7],
confidence:"green",
sources:[
"Семейные сведения"
],
bio:"Учитель."
},

{
id:14,
name:"Герасимов Тимофей Степанович",
life:"1865 — 1966",
role:"Прадед",
birthPlace:"Украина",
deathPlace:"",
father:16,
mother:null,
spouse:15,
children:[11],
siblings:[],
confidence:"green",
sources:[
"Семейные сведения"
],
bio:""
},

{
id:15,
name:"Неизвестная супруга Тимофея",
life:"",
role:"",
birthPlace:"",
deathPlace:"",
father:null,
mother:null,
spouse:14,
children:[11],
siblings:[],
confidence:"red",
sources:[
"Неизвестно"
],
bio:"Имя пока не установлено."
},

{
id:16,
name:"Герасимов Степан",
life:"",
role:"Прапрадед",
birthPlace:"Украина",
deathPlace:"",
father:null,
mother:null,
spouse:null,
children:[14],
siblings:[],
confidence:"green",
sources:[
"Семейные сведения"
],
bio:""
}

];