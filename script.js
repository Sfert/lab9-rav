// Лабораторна робота № 9. Варіант __, Прізвище Ім'я
// Масив products оголошено у data.js, який підключено перед цим файлом.

// ===== Завдання 1. Знайомство з даними =====
console.log("--- Завдання 1 ---");
console.table(products);
const namess = products.map(product => product.name);
console.log(namess);

const categories = [];
for (const a of products)
{
    if (!categories.includes(a.category))
    categories.push(a.category);
}
console.log(categories);

const prices = products.map(product => product.price);
console.log(Math.max(...prices));
console.log(Math.min(...prices));

const [{ name, price, category }] = products;

console.log(`Перший товар: ${name} (${category}) коштує ${price} грн.`);

// ===== Завдання 2. Фільтрація й пошук =====
console.log("--- Завдання 2 ---");
console.table(products.filter(product => product.category === "смартфони"));


const filteredProducts = products.filter(item => item.price < 15000 && item.stock > 0);

const names = filteredProducts.map(item => item.name);

console.log("Кількість:", filteredProducts.length);      // 2
console.log("Назви:", names);

const rating = products.filter(item => item.rating > 4.3);

for (const a of rating)
{
    console.log(`${a.name} - ${a.rating}`);
}

const find = products.find(item => item.name.toLowerCase().includes("Монітор".toLowerCase()));

console.log("Знайдений товар:", find);

const finderror = products.find(item => item.name.toLowerCase().includes("Планшет".toLowerCase()));

console.log("Знайдений товар(Планшет):", finderror);

console.log("Чи є товари без запасу?", products.some(product => product.stock === 0));
console.log("Чи всі товари більші за 30000?", products.every(product => product.price > 30000));
// ===== Завдання 3. Сортування =====
console.log("--- Завдання 3 ---");

const copy = products.slice().sort((a, b) => a.price - b.price);
for (const a of copy)
{
    console.log(`${a.name} - ${a.price}`);
}

console.log(`Назва першого елемента вихідного масиву products: ${products[0].name}`);

const Copy = products.sort((a, b) => a.name.localeCompare(b.name, 'uk'));


console.log(Copy.slice(0, 3).map(item => item.name));



// ===== Завдання 4. Агрегація =====
console.log("--- Завдання 4 ---");


const totalInventoryValue = products.reduce((sum, item) => { return sum + (item.price * item.stock);}, 0);
console.log(`Загальна вартість товарів на складі: ${totalInventoryValue} грн`);

const b = products.reduce((acc, item) => {
  if (item.category === 'смартфони') {
    acc.totalPrice += item.price;
    acc.count += 1;
  }
  return acc;
}, { totalPrice: 0, count: 0 });

const averagePrice = (b.totalPrice / b.count).toFixed(2);
console.log(`Середня ціна у категорії "${'смартфони'}": ${averagePrice} грн`);

// 3. Найдорожчий товар серед наявних на складі
const isitem = products.filter(item => item.stock > 0);

const mostExpensive = isitem.reduce((maxItem, currentItem) => { return currentItem.price > maxItem.price ? currentItem : maxItem;});
console.log(`Найдорожчий наявний товар: ${mostExpensive.name} — ${mostExpensive.price} грн`);

// 4. Підрахунок кількості товарів у кожній категорії
const counts = {};

for (const item of products) {
  const category = item.category;
  if (category in counts) {
    counts[category] += 1;
  } else {
    counts[category] = 1;
  }
}

console.table(counts);
console.log(`Кількість категорій: ${Object.keys(counts).length}`);

// ===== Завдання 5. Перетворення записів і рядки =====
console.log("--- Завдання 5 ---");

const priceList = products.map((product) => {
  const { name, price } = product;
  
  const brand = name.split(" ");
  const discountPrice = Math.round(price * (1 - 0.15));
  const label = `${name.toUpperCase()}: ${price} грн, зі знижкою ${discountPrice} грн`;

  return {
    ...product,
    brand,
    discountPrice,
    label
  };
});

console.table(priceList);

console.log("Чи змінився вихідний масив:", "discountPrice" in products[0]); // false

const formattedPriceList = priceList
  .filter(({ category }) => category === "смартфони")
  .map(({ name, price }) => `${name.padEnd(32)}${String(price).padStart(8)} грн`)
  .join("\n");

console.log("\nПрайс-лист категорії:");
console.log(formattedPriceList);


// == Завдання 6. Дати й випадковий вибір ====
console.log("--- Завдання 6 ---");


const productsMonth = products.filter(({ added }) => {
  const date = new Date(added);
  return date.getMonth() + 1 === 10;
});

console.log(`Товари, додані у місяці ${10}:`);
productsMonth.forEach(({ name, added }) => {
  const date = new Date(added);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  console.log(`${name} — ${day}.${month}.${year}`);
});

const latestProduct = products.reduce((latest, current) => {
  const currentT = new Date(current.added).getTime();
  const latestT = new Date(latest.added).getTime();
  return currentT > latestT ? current : latest;
});

const msPerDay = 1000 * 60 * 60 * 24;
const daysPassed = Math.floor((Date.now() - new Date(latestProduct.added).getTime()) / msPerDay);

console.log(`\nНайпізніше доданий товар: ${latestProduct.name} (минуло повних днів: ${daysPassed})`);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomIndex = getRandomInt(0, products.length - 1);
const productOfTheDay = products[randomIndex];

console.log(`\nТовар дня: ${productOfTheDay.name} за ${productOfTheDay.price} грн`);

