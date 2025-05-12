# Лабораторна робота №1
*Ознайомлення з TypeScript*

---

### Завдання 1.1:
Оголосіть змінні наступних типів: `string`, `number`, `boolean`, `array`, `object`.

*Рішення:*

![screen 1](./screenshots/s-01.png)

![screen 2](./screenshots/s-02.png)

### Завдання 1.2:
Створіть функцію, яка приймає як аргумент об'єкт із полями name (тип `string`) та `age` (тип `number`) і повертає рядок виду: `"Name: John, Age: 30"`.

*Рішення:*

![screen 3](./screenshots/s-03.png)

![screen 4](./screenshots/s-04.png)

![screen 5](./screenshots/s-05.png)

![screen 6](./screenshots/s-06.png)

---

### Завдання 2.1:
Оголосіть інтерфейс `Person`, який містить поля:
- `name: string`
- `age: number`
- `address?: string (опціональне поле)`

*Рішення:*

![screen 7](./screenshots/s-07.png)

![screen 8](./screenshots/s-08.png)

### Завдання 2.2:
Реалізуйте функцію `printPerson`, яка приймає об'єкт типу `Person` та виводить його дані у консоль.

*Рішення:*

![screen 9](./screenshots/s-09.png)

![screen 10](./screenshots/s-10.png)

![screen 11](./screenshots/s-11.png)

![screen 12](./screenshots/s-12.png)

---

### Завдання 3.1:
Оголосіть об'єднаний тип (`union type`), наприклад: 

` type Status = 'success' | 'error' | 'loading'; `

*Рішення:*

![screen 13](./screenshots/s-13.png)

### Завдання 3.2:
Реалізуйте конструкцію (наприклад, функцію або умову), яка виводить повідомлення відповідно до значення Status.

*Рішення:*

![screen 14](./screenshots/s-14.png)

![screen 15](./screenshots/s-15.png)

![screen 16](./screenshots/s-16.png)

![screen 17](./screenshots/s-17.png)

---

### Завдання 4.1:
Реалізуйте функцію `identity<T>(value: T): T`, яка повертає передане їй значення.

*Рішення:*

![screen 18](./screenshots/s-18.png)

![screen 19](./screenshots/s-19.png)

![screen 20](./screenshots/s-20.png)

### Завдання 4.2:
Використайте її для типів `number`, `string` та `boolean`.

*Рішення:*

![screen 21](./screenshots/s-21.png)

---

### Завдання 5.1:
Реалізуйте клас `Car`, який містить поля:
- `model: string`
- `year: number`

### Завдання 5.2:
Додайте метод `getCarInfo()`, який повертає рядок виду: `"Model: Toyota, Year: 2020"`.

*Рішення:*

![screen 22](./screenshots/s-22.png)

![screen 23](./screenshots/s-23.png)

![screen 24](./screenshots/s-24.png)

![screen 25](./screenshots/s-25.png)