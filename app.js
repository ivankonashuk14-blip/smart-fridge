const ingredientsCatalog = [
  { name: 'Яйца', emoji: '🥚', unit: '6 шт.', expiry: 4 },
  { name: 'Помидоры', emoji: '🍅', unit: '3 шт.', expiry: 1 },
  { name: 'Сыр', emoji: '🧀', unit: '180 г', expiry: 6 },
  { name: 'Картофель', emoji: '🥔', unit: '5 шт.', expiry: 12 },
  { name: 'Шпинат', emoji: '🥬', unit: '120 г', expiry: 1 },
  { name: 'Молоко', emoji: '🥛', unit: '500 мл', expiry: 3 },
  { name: 'Курица', emoji: '🍗', unit: '400 г', expiry: 2 },
  { name: 'Авокадо', emoji: '🥑', unit: '1 шт.', expiry: 2 },
  { name: 'Макароны', emoji: '🍝', unit: '450 г', expiry: 90 },
  { name: 'Рис', emoji: '🍚', unit: '500 г', expiry: 120 },
  { name: 'Лук', emoji: '🧅', unit: '3 шт.', expiry: 18 },
  { name: 'Чеснок', emoji: '🧄', unit: '1 шт.', expiry: 20 },
  { name: 'Огурцы', emoji: '🥒', unit: '2 шт.', expiry: 4 },
  { name: 'Грибы', emoji: '🍄', unit: '250 г', expiry: 3 },
  { name: 'Перец', emoji: '🫑', unit: '2 шт.', expiry: 5 },
  { name: 'Брокколи', emoji: '🥦', unit: '300 г', expiry: 4 },
  { name: 'Морковь', emoji: '🥕', unit: '4 шт.', expiry: 14 },
  { name: 'Лимон', emoji: '🍋', unit: '1 шт.', expiry: 9 },
  { name: 'Творог', emoji: '🥣', unit: '200 г', expiry: 3 },
  { name: 'Банан', emoji: '🍌', unit: '3 шт.', expiry: 3 },
  { name: 'Йогурт', emoji: '🥛', unit: '150 г', expiry: 5 },
  { name: 'Хлеб', emoji: '🍞', unit: '½ буханки', expiry: 2 },
  { name: 'Фасоль', emoji: '🫘', unit: '1 банка', expiry: 180 },
  { name: 'Кабачок', emoji: '🥒', unit: '1 шт.', expiry: 5 }
];

const recipes = [
  {
    id: 1, title: 'Омлет со шпинатом и сыром', emoji: '🍳', theme: 'green',
    ingredients: ['Яйца', 'Шпинат', 'Сыр', 'Молоко'], time: 15, kcal: 380, difficulty: 'Легко', portions: 2,
    steps: ['Взбейте яйца с молоком, щепоткой соли и перца.', 'Обжарьте шпинат 2 минуты до мягкости.', 'Влейте яйца, добавьте тёртый сыр и готовьте под крышкой 6–8 минут.']
  },
  {
    id: 2, title: 'Хрустящие картофельные драники', emoji: '🥞', theme: 'orange',
    ingredients: ['Картофель', 'Яйца', 'Лук'], time: 25, kcal: 430, difficulty: 'Легко', portions: 2,
    steps: ['Натрите картофель и лук, хорошо отожмите влагу.', 'Добавьте яйцо, соль и перец, перемешайте.', 'Обжаривайте небольшими порциями по 3–4 минуты с каждой стороны.']
  },
  {
    id: 3, title: 'Тёплый салат с авокадо', emoji: '🥗', theme: 'yellow',
    ingredients: ['Помидоры', 'Шпинат', 'Авокадо', 'Лимон'], time: 12, kcal: 310, difficulty: 'Легко', portions: 2,
    steps: ['Крупно нарежьте помидоры и слегка обжарьте.', 'Добавьте шпинат и снимите с огня через минуту.', 'Смешайте с авокадо и заправьте соком лимона.']
  },
  {
    id: 4, title: 'Картофельная запеканка с сыром', emoji: '🥘', theme: 'pink',
    ingredients: ['Картофель', 'Сыр', 'Молоко', 'Чеснок'], time: 50, kcal: 520, difficulty: 'Средне', portions: 4,
    steps: ['Нарежьте картофель тонкими кружочками.', 'Смешайте молоко с чесноком, солью и перцем.', 'Выложите слоями с сыром и запекайте 40 минут при 190 °C.']
  },
  {
    id: 5, title: 'Паста с томатами и сыром', emoji: '🍝', theme: 'orange',
    ingredients: ['Макароны', 'Помидоры', 'Сыр', 'Чеснок'], time: 20, kcal: 610, difficulty: 'Легко', portions: 2,
    steps: ['Отварите пасту до состояния аль денте.', 'Обжарьте чеснок и нарезанные томаты 6 минут.', 'Добавьте пасту, немного воды от варки и сыр. Перемешайте.']
  },
  {
    id: 6, title: 'Зелёная шакшука', emoji: '🍲', theme: 'green',
    ingredients: ['Яйца', 'Шпинат', 'Лук', 'Сыр'], time: 28, kcal: 410, difficulty: 'Средне', portions: 2,
    steps: ['Обжарьте лук до прозрачности, добавьте шпинат.', 'Сделайте углубления и разбейте в них яйца.', 'Посыпьте сыром и готовьте под крышкой 7–9 минут.']
  },
  {
    id: 7, title: 'Курица с овощами в одной сковороде', emoji: '🍛', theme: 'yellow',
    ingredients: ['Курица', 'Перец', 'Брокколи', 'Лук'], time: 30, kcal: 470, difficulty: 'Легко', portions: 3,
    steps: ['Нарежьте курицу и овощи одинаковыми кусочками.', 'Обжарьте курицу до золотистой корочки.', 'Добавьте овощи и готовьте ещё 10 минут, помешивая.']
  },
  {
    id: 8, title: 'Сливочный грибной суп', emoji: '🍵', theme: 'purple',
    ingredients: ['Грибы', 'Картофель', 'Молоко', 'Лук'], time: 35, kcal: 360, difficulty: 'Средне', portions: 4,
    steps: ['Обжарьте грибы с луком до золотистости.', 'Добавьте картофель и воду, варите 18 минут.', 'Влейте молоко, прогрейте и измельчите блендером.']
  },
  {
    id: 9, title: 'Рис с яйцом и овощами', emoji: '🍚', theme: 'blue',
    ingredients: ['Рис', 'Яйца', 'Морковь', 'Лук'], time: 22, kcal: 490, difficulty: 'Легко', portions: 2,
    steps: ['Отварите рис или используйте вчерашний.', 'Обжарьте морковь и лук на сильном огне.', 'Добавьте яйца, затем рис и перемешивайте 3 минуты.']
  },
  {
    id: 10, title: 'Творожные сырники с бананом', emoji: '🥞', theme: 'pink',
    ingredients: ['Творог', 'Банан', 'Яйца'], time: 20, kcal: 390, difficulty: 'Легко', portions: 2,
    steps: ['Разомните банан и смешайте с творогом и яйцом.', 'Сформируйте небольшие сырники влажными руками.', 'Обжарьте по 3 минуты с каждой стороны на среднем огне.']
  },
  {
    id: 11, title: 'Средиземноморская тарелка', emoji: '🫓', theme: 'orange',
    ingredients: ['Огурцы', 'Помидоры', 'Сыр', 'Фасоль'], time: 10, kcal: 440, difficulty: 'Легко', portions: 2,
    steps: ['Нарежьте огурцы, помидоры и сыр.', 'Промойте фасоль и добавьте к овощам.', 'Заправьте маслом, солью и сухими травами.']
  },
  {
    id: 12, title: 'Овощные оладьи с кабачком', emoji: '🧆', theme: 'green',
    ingredients: ['Кабачок', 'Морковь', 'Яйца', 'Сыр'], time: 25, kcal: 350, difficulty: 'Легко', portions: 3,
    steps: ['Натрите кабачок и морковь, отожмите влагу.', 'Смешайте с яйцом и тёртым сыром.', 'Обжарьте оладьи с двух сторон до румяности.']
  }
];

const defaultInventory = ['Яйца', 'Помидоры', 'Сыр', 'Картофель', 'Шпинат'];
const recipeExtras = {
  1: { category: 'Завтрак', cost: 4.8 }, 2: { category: 'Завтрак', cost: 3.2 },
  3: { category: 'Перекус', cost: 7.1 }, 4: { category: 'Ужин', cost: 6.4 },
  5: { category: 'Ужин', cost: 5.8 }, 6: { category: 'Завтрак', cost: 5.2 },
  7: { category: 'Ужин', cost: 11.5 }, 8: { category: 'Обед', cost: 8.2 },
  9: { category: 'Обед', cost: 4.2 }, 10: { category: 'Завтрак', cost: 5.5 },
  11: { category: 'Перекус', cost: 8.9 }, 12: { category: 'Обед', cost: 4.7 }
};

const detailedSteps = {
  1: ['Достаньте яйца и молоко заранее, чтобы они не были ледяными — так омлет получится нежнее.', 'Взбейте яйца с молоком, щепоткой соли и свежемолотым перцем до однородной массы.', 'Разогрейте сковороду на среднем огне, добавьте каплю масла и обжарьте шпинат 1–2 минуты.', 'Влейте яйца, аккуратно подцепите края лопаткой и распределите сыр по поверхности.', 'Накройте крышкой и готовьте 6–8 минут. Снимите с огня, когда середина ещё слегка пружинит.'],
  2: ['Очистите картофель и лук, подготовьте миску с чистым кухонным полотенцем.', 'Натрите овощи на крупной тёрке и тщательно отожмите сок — это секрет хрустящей корочки.', 'Добавьте яйцо, соль, перец и перемешайте. Масса должна быть густой и не растекаться.', 'Разогрейте масло на среднем огне и выкладывайте драники ложкой, слегка прижимая.', 'Обжаривайте по 3–4 минуты с каждой стороны до золотистой корочки, затем переложите на салфетку.'],
  3: ['Промойте шпинат и обсушите его, а авокадо разрежьте пополам и нарежьте ломтиками.', 'Крупно нарежьте помидоры и быстро обжарьте их на сухой сковороде — достаточно 2 минут.', 'Добавьте шпинат, перемешайте и снимите с огня, как только листья начнут уменьшаться.', 'Смешайте тёплые овощи с авокадо, стараясь не размять его.', 'Выжмите лимон, добавьте щепотку соли и перца. Подавайте сразу, пока салат тёплый.'],
  4: ['Разогрейте духовку до 190 °C. Картофель очистите и нарежьте очень тонкими кружочками.', 'Смешайте молоко с измельчённым чесноком, солью, перцем и половиной тёртого сыра.', 'Смажьте форму, выложите картофель слоями и равномерно поливайте каждый слой молочной смесью.', 'Накройте форму фольгой и запекайте 30 минут, чтобы картофель успел стать мягким.', 'Снимите фольгу, посыпьте оставшимся сыром и верните в духовку ещё на 10 минут до румяной корочки.'],
  5: ['Поставьте воду для пасты, посолите её после закипания и сварите макароны до состояния аль денте.', 'Пока варится паста, мелко нарежьте чеснок и обжарьте его в масле 30 секунд.', 'Добавьте нарезанные томаты, посолите и тушите около 6 минут, пока они не станут мягкими.', 'Переложите пасту в сковороду, добавьте 2–3 ложки воды от варки и перемешайте.', 'Снимите с огня, добавьте сыр и сразу подавайте, пока соус остаётся кремовым.'],
  6: ['Нарежьте лук тонкими полукольцами и обжарьте его на среднем огне до прозрачности.', 'Добавьте шпинат, перемешайте и готовьте 2–3 минуты, чтобы он стал мягким.', 'Сделайте в зелёной смеси два небольших углубления и аккуратно разбейте туда яйца.', 'Посыпьте блюдо сыром, накройте крышкой и готовьте 7–9 минут.', 'Снимите крышку, когда белок схватился, а желток остался слегка жидким.'],
  7: ['Нарежьте курицу и овощи кусочками одинакового размера — так они приготовятся одновременно.', 'Разогрейте широкую сковороду, добавьте масло и обжарьте курицу до золотистой корочки.', 'Переложите курицу на край сковороды, добавьте лук и перец, готовьте 3 минуты.', 'Верните курицу, добавьте брокколи, соль и любимые специи.', 'Накройте крышкой и готовьте ещё 8–10 минут. Перед подачей проверьте, чтобы курица была полностью готова.'],
  8: ['Нарежьте грибы и лук, обжарьте их в кастрюле с толстым дном до золотистого цвета.', 'Добавьте кубики картофеля, залейте водой и варите около 18 минут до мягкости.', 'Оставьте несколько грибов для подачи, а к остальным влейте молоко и прогрейте 3 минуты.', 'Пробейте суп блендером до гладкости, не доводя молоко до активного кипения.', 'Разлейте по тарелкам, добавьте отложенные грибы и немного свежемолотого перца.'],
  9: ['Если используете свежий рис, промойте его и отварите заранее — остывший рис лучше обжаривается.', 'Нарежьте морковь и лук мелкими кубиками, обжарьте их на сильном огне 4–5 минут.', 'Сдвиньте овощи к краю сковороды, влейте яйца и быстро перемешайте до мягких кусочков.', 'Добавьте рис, разбивая комочки лопаткой, и перемешивайте ещё 3 минуты.', 'Посолите, добавьте зелень или соевый соус и подавайте горячим.'],
  10: ['Разомните банан вилкой до гладкого пюре — спелый фрукт сделает сырники сладкими без сахара.', 'Добавьте творог и яйцо, перемешайте и оставьте массу на 5 минут.', 'Смочите руки водой, сформируйте небольшие сырники и слегка обваляйте их в муке при наличии.', 'Обжарьте на среднем огне по 3 минуты с каждой стороны.', 'Подавайте тёплыми с йогуртом, бананом или ложкой любимого варенья.'],
  11: ['Промойте фасоль и оставьте её в дуршлаге, чтобы лишняя жидкость стекла.', 'Нарежьте огурцы, помидоры и сыр крупными кусочками — так тарелка будет выглядеть аппетитнее.', 'Разложите ингредиенты секторами или смешайте в одной миске.', 'Заправьте небольшим количеством масла, лимонным соком, солью и сухими травами.', 'Дайте салату постоять 5 минут, чтобы овощи впитали аромат заправки.'],
  12: ['Натрите кабачок и морковь, слегка посолите и оставьте на 5 минут.', 'Хорошо отожмите овощи руками или через полотенце — лишняя влага мешает оладьям держать форму.', 'Добавьте яйцо и тёртый сыр, перемешайте до густой массы.', 'Выкладывайте оладьи ложкой на разогретую сковороду и не делайте их слишком толстыми.', 'Обжарьте с двух сторон до румяности, затем подавайте со сметаной или йогуртом.']
};
let inventory = load('smart-fridge-inventory', defaultInventory);
let favorites = load('smart-fridge-favorites', [1]);
let shoppingList = load('smart-fridge-shopping', ['Молоко', 'Лимон']);
let planner = load('smart-fridge-planner', { 0: 1, 2: 5, 4: 2 });
let activeFilter = 'all';
let visibleCount = 6;
let activeRecipe = null;
let modalPortions = 2;
let advancedFilters = { category: 'all', maxTime: 60, maxKcal: 700, maxCost: 15, allergen: 'none' };
let currentUser = load('smart-fridge-user', null);
let streak = load('smart-fridge-streak', 7);
let streakLastClaim = load('smart-fridge-streak-last-claim', '');
let authMode = 'register';

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}

function save() {
  localStorage.setItem('smart-fridge-inventory', JSON.stringify(inventory));
  localStorage.setItem('smart-fridge-favorites', JSON.stringify(favorites));
  localStorage.setItem('smart-fridge-shopping', JSON.stringify(shoppingList));
  localStorage.setItem('smart-fridge-planner', JSON.stringify(planner));
  localStorage.setItem('smart-fridge-user', JSON.stringify(currentUser));
  localStorage.setItem('smart-fridge-streak', JSON.stringify(streak));
  localStorage.setItem('smart-fridge-streak-last-claim', JSON.stringify(streakLastClaim));
}

function wordForm(value, forms) {
  const n = Math.abs(value) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) return forms[2];
  if (n1 > 1 && n1 < 5) return forms[1];
  if (n1 === 1) return forms[0];
  return forms[2];
}

function formatCost(value) {
  return `${value.toFixed(2).replace('.', ',')} BYN`;
}

function ingredientData(name) {
  return ingredientsCatalog.find(i => i.name === name) || { name, emoji: '🥕', unit: '1 шт.', expiry: 7 };
}

function missingFor(recipe) {
  return recipe.ingredients.filter(item => !inventory.includes(item));
}

function matchPercent(recipe) {
  return Math.round((recipe.ingredients.length - missingFor(recipe).length) / recipe.ingredients.length * 100);
}

function renderInventory() {
  const list = $('#ingredient-list');
  list.innerHTML = inventory.map(name => {
    const item = ingredientData(name);
    const expiryText = item.expiry <= 1 ? 'лучше использовать сегодня' : `ещё ${item.expiry} ${wordForm(item.expiry, ['день','дня','дней'])}`;
    return `<div class="ingredient-item">
      <span class="ingredient-emoji">${item.emoji}</span>
      <span class="ingredient-info"><strong>${item.name}</strong><small class="${item.expiry <= 1 ? 'soon' : ''}">${item.unit} · ${expiryText}</small></span>
      <button class="remove-ingredient" data-remove="${item.name}" aria-label="Удалить ${item.name}">×</button>
    </div>`;
  }).join('');

  $('#ingredient-count').textContent = inventory.length;
  const expiring = inventory.filter(name => ingredientData(name).expiry <= 2).length;
  $('#expiring-count').textContent = `${expiring} ${wordForm(expiring, ['продукт','продукта','продуктов'])}`;
  $('#expiring-details').innerHTML = expiring ? inventory.filter(name => ingredientData(name).expiry <= 2).map(name => {
    const item = ingredientData(name);
    return `<div class="expiring-detail"><span>${item.emoji}</span><span><strong>${item.name}</strong><small>Лучше использовать сегодня · ${item.unit}</small></span></div>`;
  }).join('') : '<div class="expiring-detail"><span>✨</span><span><strong>Свежесть в порядке</strong><small>Срочных продуктов пока нет</small></span></div>';
  $$('[data-remove]').forEach(button => button.addEventListener('click', () => removeIngredient(button.dataset.remove)));
}

function renderQuickProducts() {
  const quick = ['Авокадо', 'Курица', 'Макароны'];
  $('#quick-products').innerHTML = quick.map(name => {
    const item = ingredientData(name);
    return `<button class="quick-chip" data-quick="${name}">${item.emoji} ${name}</button>`;
  }).join('');
  $$('[data-quick]').forEach(button => button.addEventListener('click', () => addIngredient(button.dataset.quick)));
}

function filterRecipes() {
  const expiryOnly = $('#expiry-only').checked;
  let result = [...recipes];
  result = result.filter(recipe => {
    const extras = recipeExtras[recipe.id];
    if (advancedFilters.category !== 'all' && extras.category !== advancedFilters.category) return false;
    if (recipe.time > advancedFilters.maxTime || recipe.kcal > advancedFilters.maxKcal || extras.cost > advancedFilters.maxCost) return false;
    if (advancedFilters.allergen === 'dairy' && recipe.ingredients.some(item => ['Молоко','Сыр','Творог','Йогурт'].includes(item))) return false;
    if (advancedFilters.allergen === 'eggs' && recipe.ingredients.includes('Яйца')) return false;
    if (advancedFilters.allergen === 'gluten' && recipe.ingredients.some(item => ['Макароны','Хлеб'].includes(item))) return false;
    return true;
  });
  if (activeFilter === 'ready') result = result.filter(r => missingFor(r).length === 0);
  if (activeFilter === 'one-missing') result = result.filter(r => missingFor(r).length === 1);
  if (activeFilter === 'fast') result = result.filter(r => r.time <= 30);
  if (activeFilter === 'light') result = result.filter(r => r.kcal <= 500);
  result.sort((a,b) => {
    if (expiryOnly) {
      const aUrgent = a.ingredients.filter(name => inventory.includes(name) && ingredientData(name).expiry <= 2).length;
      const bUrgent = b.ingredients.filter(name => inventory.includes(name) && ingredientData(name).expiry <= 2).length;
      if (aUrgent !== bUrgent) return bUrgent - aUrgent;
    }
    return matchPercent(b) - matchPercent(a);
  });
  return result;
}

function recipeCard(recipe) {
  const missing = missingFor(recipe);
  const isReady = missing.length === 0;
  const tag = isReady ? 'Можно готовить' : missing.length === 1 ? 'Не хватает 1 продукта' : `Совпадение ${matchPercent(recipe)}%`;
  const missingLine = !isReady ? `<div class="missing-line"><span>Не хватает: <b>${missing.slice(0,2).join(', ')}</b></span><button class="add-shopping" data-add-list="${recipe.id}">＋</button></div>` : '';
  return `<article class="recipe-card" data-recipe="${recipe.id}">
    <div class="recipe-image theme-${recipe.theme}">
      <span class="match-tag ${isReady ? '' : 'missing'}">${tag}</span>
      <button class="favorite-button ${favorites.includes(recipe.id) ? 'active' : ''}" data-favorite="${recipe.id}" aria-label="В избранное">${favorites.includes(recipe.id) ? '♥' : '♡'}</button>
      <span class="dish-emoji">${recipe.emoji}</span>
    </div>
    <div class="recipe-content">
      <h3>${recipe.title}</h3>
      <div class="recipe-meta">
        <span><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>${recipe.time} мин</span>
        <span><svg viewBox="0 0 24 24"><path d="M12 3c2 4-2 5 0 8 1-2 3-2 3-5 3 3 4 6 3 9a6 6 0 0 1-12 0c0-3 2-6 4-8 0 3-1 5 2 7"/></svg>${recipe.kcal} ккал</span>
        <span>${recipe.difficulty}</span>
        <span>≈ ${formatCost(recipeExtras[recipe.id].cost)}</span>
      </div>
      ${missingLine}
    </div>
  </article>`;
}

function bindRecipeCards(container = document) {
  container.querySelectorAll('[data-recipe]').forEach(card => card.addEventListener('click', event => {
    if (event.target.closest('[data-favorite]') || event.target.closest('[data-add-list]')) return;
    openRecipe(Number(card.dataset.recipe));
  }));
  container.querySelectorAll('[data-favorite]').forEach(button => button.addEventListener('click', event => {
    event.stopPropagation();
    toggleFavorite(Number(button.dataset.favorite));
  }));
  container.querySelectorAll('[data-add-list]').forEach(button => button.addEventListener('click', event => {
    event.stopPropagation();
    addMissingToShopping(Number(button.dataset.addList));
  }));
}

function renderRecipes() {
  const result = filterRecipes();
  $('#recipe-total').textContent = `${result.length} ${wordForm(result.length, ['рецепт','рецепта','рецептов'])}`;
  const visible = result.slice(0, visibleCount);
  $('#recipe-grid').innerHTML = visible.length ? visible.map(recipeCard).join('') : `<div class="empty-state"><span>🫙</span><strong>Подходящих рецептов пока нет</strong><p>Попробуйте другой фильтр или добавьте продукты.</p></div>`;
  $('#load-more').hidden = visibleCount >= result.length;
  bindRecipeCards($('#recipe-grid'));
}

function renderFavorites() {
  const chosen = recipes.filter(r => favorites.includes(r.id));
  $('#favorites-grid').innerHTML = chosen.length ? chosen.map(recipeCard).join('') : `<div class="empty-state"><span>♡</span><strong>Здесь появятся любимые блюда</strong><p>Нажмите на сердечко у любого рецепта.</p></div>`;
  bindRecipeCards($('#favorites-grid'));
}

function renderFavoritesSummary() {
  const count = favorites.length;
  $('#favorites-mini-text').textContent = count ? `${count} ${wordForm(count, ['сохранённый рецепт', 'сохранённых рецепта', 'сохранённых рецептов'])}` : 'Пока ничего не сохранено';
}

function renderShopping() {
  $('#shopping-count').textContent = shoppingList.length;
  $('#shopping-list').innerHTML = shoppingList.length ? shoppingList.map(name => {
    const item = ingredientData(name);
    return `<label class="shopping-item"><input type="checkbox"><span>${item.emoji} ${name}</span><button data-shopping-remove="${name}">×</button></label>`;
  }).join('') : `<div class="empty-state"><span>🛒</span><strong>Список пока пуст</strong><p>Добавьте недостающие продукты из карточки рецепта.</p></div>`;
  $$('[data-shopping-remove]').forEach(button => button.addEventListener('click', () => {
    shoppingList = shoppingList.filter(item => item !== button.dataset.shoppingRemove);
    save(); renderShopping();
  }));
}

function renderPlanner() {
  const days = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
  const dates = ['7 сентября','8 сентября','9 сентября','10 сентября','11 сентября','12 сентября','13 сентября'];
  $('#week-grid').innerHTML = days.map((day,index) => {
    const meal = recipes.find(r => r.id === planner[index]);
    return `<div class="day-card ${index === 0 ? 'today' : ''}"><h3>${day}</h3><small>${dates[index]}</small>${meal ? `<div class="planned-meal">${meal.emoji}<span>${meal.title}</span></div><button class="add-meal" data-plan="${index}">Заменить</button>` : `<button class="add-meal" data-plan="${index}">＋ Добавить блюдо</button>`}</div>`;
  }).join('');
  $$('[data-plan]').forEach(button => button.addEventListener('click', () => {
    const index = Number(button.dataset.plan);
    const currentIndex = recipes.findIndex(r => r.id === planner[index]);
    planner[index] = recipes[(currentIndex + 1) % recipes.length].id;
    save(); renderPlanner(); showToast('Блюдо добавлено в меню');
  }));
}

function addIngredient(name) {
  const normalized = ingredientsCatalog.find(i => i.name.toLowerCase() === name.trim().toLowerCase());
  if (!normalized) { showToast('Такого продукта пока нет в каталоге'); return; }
  if (inventory.includes(normalized.name)) { showToast(`${normalized.name} уже есть в холодильнике`); return; }
  inventory.push(normalized.name);
  save(); renderInventory(); renderRecipes();
  $('#ingredient-search').value = '';
  $('#suggestions').hidden = true;
  showToast(`${normalized.emoji} ${normalized.name} добавлено`);
}

function removeIngredient(name) {
  inventory = inventory.filter(item => item !== name);
  save(); renderInventory(); renderRecipes();
  showToast(`${name} убрано из холодильника`);
}

function toggleFavorite(id) {
  favorites = favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites, id];
  save(); renderRecipes(); renderFavorites(); renderFavoritesSummary();
  showToast(favorites.includes(id) ? 'Рецепт сохранён в избранное' : 'Рецепт удалён из избранного');
}

function addMissingToShopping(id) {
  const recipe = recipes.find(r => r.id === id);
  const missing = missingFor(recipe);
  shoppingList = [...new Set([...shoppingList, ...missing])];
  save(); renderShopping();
  showToast(`${missing.length} ${wordForm(missing.length, ['продукт добавлен','продукта добавлено','продуктов добавлено'])} в покупки`);
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2400);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]));
}

function applyUserUI() {
  const avatar = $('#profile-button');
  if (!avatar) return;
  avatar.textContent = currentUser?.name?.trim()?.charAt(0)?.toUpperCase() || 'И';
  avatar.setAttribute('aria-label', currentUser ? `Профиль ${currentUser.name}` : 'Открыть регистрацию');
  avatar.title = currentUser ? `Профиль: ${currentUser.name}` : 'Зарегистрироваться';
}

function renderAuthModal() {
  const form = $('#auth-form');
  const profile = $('#profile-card');
  const switchButton = $('#auth-switch');
  const logoutButton = $('#auth-logout');
  if (currentUser) {
    form.hidden = true;
    profile.hidden = false;
    profile.innerHTML = `<span>${escapeHtml(currentUser.name.charAt(0).toUpperCase())}</span><span><strong>${escapeHtml(currentUser.name)}</strong><small>${escapeHtml(currentUser.email)}</small></span>`;
    $('#auth-title').textContent = 'Ваш профиль';
    $('#auth-subtitle').textContent = 'Избранное, меню и продукты сохранены в вашем холодильнике.';
    switchButton.hidden = true;
    logoutButton.hidden = false;
  } else {
    form.hidden = false;
    profile.hidden = true;
    $('#auth-title').textContent = authMode === 'register' ? 'Создать аккаунт' : 'С возвращением';
    $('#auth-subtitle').textContent = authMode === 'register' ? 'Сохраняйте избранное, меню и продукты между устройствами.' : 'Войдите, чтобы открыть свой сохранённый холодильник.';
    $('#auth-name-field').hidden = authMode !== 'register';
    $('#auth-submit').textContent = authMode === 'register' ? 'Зарегистрироваться' : 'Войти';
    switchButton.textContent = authMode === 'register' ? 'У меня уже есть аккаунт' : 'Создать новый аккаунт';
    switchButton.hidden = false;
    logoutButton.hidden = true;
  }
}

function openAuthModal() {
  renderAuthModal();
  $('#auth-modal').hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
  $('#auth-modal').hidden = true;
  document.body.style.overflow = '';
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function renderStreakModal() {
  const safeStreak = Math.min(Math.max(Number(streak) || 0, 0), 14);
  $('#streak-count').textContent = streak;
  $('#streak-modal-count').textContent = streak;
  $('#streak-progress-bar').style.width = `${Math.max(4, safeStreak / 14 * 100)}%`;
  $('#streak-goal-label').textContent = safeStreak >= 14 ? 'Цель достигнута!' : `До 14 дней осталось ${14 - safeStreak}`;
  const labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  $('#streak-days').innerHTML = labels.map((label, index) => `<div class="streak-day ${index < Math.min(streak, 7) ? 'done' : ''}">${label}<b>${index < Math.min(streak, 7) ? '✓' : '·'}</b></div>`).join('');
  $('#streak-saved-count').textContent = 12 + Math.max(0, streak - 7);
  const claimedToday = streakLastClaim === todayKey();
  $('#streak-claim').textContent = claimedToday ? 'Сегодня уже отмечено ✓' : 'Отметить сегодняшний день';
  $('#streak-claim').disabled = claimedToday;
}

function openStreakModal() {
  renderStreakModal();
  $('#streak-modal').hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeStreakModal() {
  $('#streak-modal').hidden = true;
  document.body.style.overflow = '';
}

function claimStreakDay() {
  if (streakLastClaim === todayKey()) return;
  streak += 1;
  streakLastClaim = todayKey();
  save();
  renderStreakModal();
  showToast(`🔥 Серия увеличена до ${streak} дней`);
}

function openRecipe(id) {
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) return;
  activeRecipe = recipe;
  modalPortions = recipe.portions;
  $('#modal-title').textContent = recipe.title;
  $('#modal-emoji').textContent = recipe.emoji;
  $('#modal-hero').className = `modal-hero theme-${recipe.theme}`;
  $('#modal-meta').innerHTML = `<span>◷ ${recipe.time} минут</span><span>♨ ${recipe.kcal} ккал</span><span>≈ ${formatCost(recipeExtras[recipe.id].cost)}</span>`;
  renderModalIngredients();
  $('#modal-steps').innerHTML = (detailedSteps[recipe.id] || recipe.steps).map(step => `<li>${step}</li>`).join('');
  $('#recipe-modal').hidden = false;
  document.body.style.overflow = 'hidden';
}

function renderModalIngredients() {
  if (!activeRecipe) return;
  $('#portion-count').textContent = modalPortions;
  const ratio = modalPortions / activeRecipe.portions;
  $('#modal-ingredients').innerHTML = activeRecipe.ingredients.map(name => `<li>${inventory.includes(name) ? '✓' : '○'} ${name} <small>×${ratio % 1 === 0 ? ratio : ratio.toFixed(1)}</small>${inventory.includes(name) ? '' : ' — нужно купить'}</li>`).join('');
}

function openAdvancedFilters() {
  $('#meal-category').value = advancedFilters.category;
  $('#max-time').value = advancedFilters.maxTime;
  $('#max-kcal').value = advancedFilters.maxKcal;
  $('#max-cost').value = advancedFilters.maxCost;
  $('#allergen').value = advancedFilters.allergen;
  updateRangeOutputs();
  $('#filter-modal').hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeAdvancedFilters() {
  $('#filter-modal').hidden = true;
  document.body.style.overflow = '';
}

function updateRangeOutputs() {
  $('#max-time-output').textContent = `${$('#max-time').value} минут`;
  $('#max-kcal-output').textContent = `${$('#max-kcal').value} ккал`;
  $('#max-cost-output').textContent = `${Number($('#max-cost').value).toFixed(1).replace('.', ',')} BYN`;
}

function closeRecipe() {
  $('#recipe-modal').hidden = true;
  document.body.style.overflow = '';
}

function toggleFreshnessDetails() {
  const details = $('#expiring-details');
  const summary = $('#freshness-summary');
  const willOpen = details.hidden;
  details.hidden = !willOpen;
  summary.setAttribute('aria-expanded', String(willOpen));
}

function openShopping() {
  $('#drawer-backdrop').hidden = false;
  $('#shopping-drawer').classList.add('open');
  $('#shopping-drawer').setAttribute('aria-hidden', 'false');
}

function closeShopping() {
  $('#drawer-backdrop').hidden = true;
  $('#shopping-drawer').classList.remove('open');
  $('#shopping-drawer').setAttribute('aria-hidden', 'true');
}

function switchView(view) {
  $('#recipes-view').hidden = view !== 'recipes';
  $('#planner-view').hidden = view !== 'planner';
  $('#favorites-view').hidden = view !== 'favorites';
  $('.hero').hidden = view !== 'recipes';
  $$('.nav-link').forEach(link => link.classList.toggle('active', link.dataset.view === view));
  if (view === 'favorites') renderFavorites();
  if (view === 'planner') renderPlanner();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupSearch() {
  const input = $('#ingredient-search');
  const suggestions = $('#suggestions');
  const update = () => {
    const value = input.value.trim().toLowerCase();
    if (!value) { suggestions.hidden = true; return; }
    const matches = ingredientsCatalog.filter(i => i.name.toLowerCase().includes(value) && !inventory.includes(i.name)).slice(0,6);
    suggestions.innerHTML = matches.length ? matches.map(i => `<button class="suggestion-item" data-suggestion="${i.name}"><span>${i.emoji}</span><span>${i.name}</span></button>`).join('') : `<div class="suggestion-item">Ничего не найдено</div>`;
    suggestions.hidden = false;
    $$('[data-suggestion]').forEach(button => button.addEventListener('click', () => addIngredient(button.dataset.suggestion)));
  };
  input.addEventListener('input', update);
  input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      const first = suggestions.querySelector('[data-suggestion]');
      if (first) addIngredient(first.dataset.suggestion);
    }
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.fridge-search-wrap')) suggestions.hidden = true;
  });
}

function initialize() {
  renderInventory(); renderQuickProducts(); renderRecipes(); renderShopping(); renderPlanner(); renderFavorites(); renderFavoritesSummary(); setupSearch();
  applyUserUI();
  renderStreakModal();

  $$('.nav-link').forEach(link => link.addEventListener('click', () => switchView(link.dataset.view)));
  $$('.filter').filter(button => button.dataset.filter).forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    visibleCount = 6;
    $$('.filter').forEach(item => item.classList.toggle('active', item === button));
    renderRecipes();
  }));
  $('#expiry-only').addEventListener('change', () => { renderRecipes(); showToast($('#expiry-only').checked ? 'Сначала показываем рецепты, спасающие продукты' : 'Обычная сортировка включена'); });
  $('#freshness-summary').addEventListener('click', toggleFreshnessDetails);
  $('#favorites-mini-card').addEventListener('click', () => switchView('favorites'));
  $('#load-more').addEventListener('click', () => { visibleCount += 6; renderRecipes(); });
  $('#surprise-button').addEventListener('click', () => {
    const options = filterRecipes();
    if (options.length) openRecipe(options[Math.floor(Math.random() * options.length)].id);
  });
  $('#add-product-button').addEventListener('click', () => { $('#ingredient-search').focus(); window.scrollTo({ top: 240, behavior: 'smooth' }); });
  $('#scan-button').addEventListener('click', () => showToast('Сканирование чека появится в следующей версии 📸'));
  $('#filter-settings').addEventListener('click', openAdvancedFilters);
  $('#filter-modal-close').addEventListener('click', closeAdvancedFilters);
  $('#filter-modal').addEventListener('click', event => { if (event.target === $('#filter-modal')) closeAdvancedFilters(); });
  ['max-time','max-kcal','max-cost'].forEach(id => $(`#${id}`).addEventListener('input', updateRangeOutputs));
  $('#reset-filters').addEventListener('click', () => {
    advancedFilters = { category: 'all', maxTime: 60, maxKcal: 700, maxCost: 15, allergen: 'none' };
    $('#meal-category').value = 'all'; $('#max-time').value = 60; $('#max-kcal').value = 700; $('#max-cost').value = 15; $('#allergen').value = 'none'; updateRangeOutputs();
  });
  $('#advanced-filter-form').addEventListener('submit', event => {
    event.preventDefault();
    advancedFilters = { category: $('#meal-category').value, maxTime: Number($('#max-time').value), maxKcal: Number($('#max-kcal').value), maxCost: Number($('#max-cost').value), allergen: $('#allergen').value };
    visibleCount = 6; renderRecipes(); closeAdvancedFilters(); showToast('Фильтры применены');
  });
  $('#shopping-button').addEventListener('click', openShopping);
  $('#profile-button').addEventListener('click', openAuthModal);
  $('#auth-close').addEventListener('click', closeAuthModal);
  $('#auth-modal').addEventListener('click', event => { if (event.target === $('#auth-modal')) closeAuthModal(); });
  $('#auth-switch').addEventListener('click', () => { authMode = authMode === 'register' ? 'login' : 'register'; renderAuthModal(); });
  $('#auth-form').addEventListener('submit', event => {
    event.preventDefault();
    const name = $('#auth-name').value.trim();
    const email = $('#auth-email').value.trim();
    const password = $('#auth-password').value;
    if (authMode === 'register' && name.length < 2) { showToast('Введите имя, чтобы создать аккаунт'); return; }
    if (password.length < 6) { showToast('Пароль должен быть не короче 6 символов'); return; }
    currentUser = { name: authMode === 'register' ? name : (currentUser?.name || email.split('@')[0] || 'Гость'), email };
    save(); applyUserUI(); renderAuthModal();
    showToast(authMode === 'register' ? `Добро пожаловать, ${currentUser.name}!` : 'Вы успешно вошли');
  });
  $('#auth-logout').addEventListener('click', () => { currentUser = null; save(); applyUserUI(); renderAuthModal(); showToast('Вы вышли из аккаунта'); });
  $('#streak-button').addEventListener('click', openStreakModal);
  $('#streak-close').addEventListener('click', closeStreakModal);
  $('#streak-modal').addEventListener('click', event => { if (event.target === $('#streak-modal')) closeStreakModal(); });
  $('#streak-claim').addEventListener('click', claimStreakDay);
  $('#drawer-close').addEventListener('click', closeShopping);
  $('#drawer-backdrop').addEventListener('click', closeShopping);
  $('#modal-close').addEventListener('click', closeRecipe);
  $('#portion-minus').addEventListener('click', () => { modalPortions = Math.max(1, modalPortions - 1); renderModalIngredients(); });
  $('#portion-plus').addEventListener('click', () => { modalPortions = Math.min(12, modalPortions + 1); renderModalIngredients(); });
  $('#recipe-modal').addEventListener('click', event => { if (event.target === $('#recipe-modal')) closeRecipe(); });
  $('#cook-button').addEventListener('click', () => { closeRecipe(); showToast(`Таймер для «${activeRecipe.title}» запущен — приятного аппетита!`); });
  $('#copy-list').addEventListener('click', async () => {
    if (!shoppingList.length) { showToast('Список покупок пока пуст'); return; }
    const text = shoppingList.map(item => `• ${item}`).join('\n');
    try { await navigator.clipboard.writeText(text); showToast('Список покупок скопирован'); }
    catch { showToast('Выделите продукты и скопируйте список'); }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { closeRecipe(); closeShopping(); closeAdvancedFilters(); closeAuthModal(); closeStreakModal(); }
  });
}

initialize();
