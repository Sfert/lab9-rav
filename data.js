// Лабораторна робота № 9. Вихідні дані — каталог товарів інтернет-магазину.
// Цей файл не змінюйте: усі обчислення виконуйте у script.js.
// Поля: id — номер, name — назва, category — категорія, price — ціна в гривнях,
// stock — кількість на складі (0 — немає в наявності), rating — середня оцінка покупців,
// added — дата додавання до каталогу у форматі ISO (рік-місяць-день).

const products = [
  { id: 1,  name: "Ноутбук Lenovo IdeaPad 3",        category: "ноутбуки",  price: 24999, stock: 5,  rating: 4.5, added: "2026-09-03" },
  { id: 2,  name: "Ноутбук ASUS VivoBook 15",        category: "ноутбуки",  price: 28499, stock: 2,  rating: 4.3, added: "2026-10-12" },
  { id: 3,  name: "Ноутбук Acer Aspire 5",           category: "ноутбуки",  price: 21990, stock: 0,  rating: 4.1, added: "2026-08-21" },
  { id: 4,  name: "Смартфон Samsung Galaxy A55",     category: "смартфони", price: 15999, stock: 12, rating: 4.6, added: "2026-09-18" },
  { id: 5,  name: "Смартфон Xiaomi Redmi Note 13",   category: "смартфони", price: 8999,  stock: 20, rating: 4.4, added: "2026-07-30" },
  { id: 6,  name: "Смартфон Google Pixel 8a",        category: "смартфони", price: 19499, stock: 0,  rating: 4.7, added: "2026-10-05" },
  { id: 7,  name: "Монітор LG UltraGear 27",         category: "монітори",  price: 11499, stock: 7,  rating: 4.8, added: "2026-08-14" },
  { id: 8,  name: "Монітор Samsung Odyssey G5",      category: "монітори",  price: 13999, stock: 3,  rating: 4.5, added: "2026-11-02" },
  { id: 9,  name: "Монітор Philips 24",              category: "монітори",  price: 5499,  stock: 10, rating: 4.0, added: "2026-07-11" },
  { id: 10, name: "Миша Logitech MX Master 3S",      category: "аксесуари", price: 3899,  stock: 15, rating: 4.9, added: "2026-09-27" },
  { id: 11, name: "Клавіатура Keychron K2 Pro",      category: "аксесуари", price: 4599,  stock: 4,  rating: 4.6, added: "2026-10-20" },
  { id: 12, name: "Хаб Baseus USB-C 7 в 1",          category: "аксесуари", price: 1299,  stock: 0,  rating: 4.2, added: "2026-08-02" },
  { id: 13, name: "Навушники Sony WH-1000XM5",       category: "аудіо",     price: 13499, stock: 6,  rating: 4.8, added: "2026-11-09" },
  { id: 14, name: "Навушники JBL Tune 510BT",        category: "аудіо",     price: 1799,  stock: 25, rating: 4.3, added: "2026-09-10" },
  { id: 15, name: "Колонка Marshall Emberton II",    category: "аудіо",     price: 6999,  stock: 8,  rating: 4.7, added: "2026-10-28" }
];
