require('dotenv').config(); // підключає .env файл

console.log(`Значення TEST:`, process.env.TEST ?? '(не задано)');
console.log(`Значення TEST_ENV_FILE:`, process.env.TEST_ENV_FILE ?? '(не задано)');
console.log(`Значення TEST_INLINE:`, process.env.TEST_INLINE ?? '(не задано)');
