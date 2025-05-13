var _a, _b, _c;
require('dotenv').config(); // підключає .env файл
console.log("\u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F TEST:", (_a = process.env.TEST) !== null && _a !== void 0 ? _a : '(не задано)');
console.log("\u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F TEST_ENV_FILE:", (_b = process.env.TEST_ENV_FILE) !== null && _b !== void 0 ? _b : '(не задано)');
console.log("\u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F TEST_INLINE:", (_c = process.env.TEST_INLINE) !== null && _c !== void 0 ? _c : '(не задано)');
