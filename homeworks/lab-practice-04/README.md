## Реалізація нової сутності, створення CRUD-операцій та відповідного RESTful API
Використовуючи boilerplate-проєкт typeorm-express-typescript, який вже містить реалізацію сутності User та відповідного контролера, необхідно:

### 1. Створити нову сутність Post:
- Визначити поля:
- `id`: UUID, первинний ключ
- `title`: рядок, обов’язковий
- `content`: текст, необов’язковий
- `createdAt`: дата створення, автоматично заповнюється
- `updatedAt`: дата оновлення, автоматично оновлюється

#### entities/posts/Post.ts:
> ![alt text](screenshots/image-4.png)

---

### 2. Створити та застосувати міграцію:
- Згенерувати міграцію для нової сутності.
  #### test migration: 
  > ![alt text](screenshots/image.png)

  #### test migration file:
  > ![alt text](screenshots/image-1.png)

  #### post migration:
  > ![alt text](screenshots/image-6.png)

  #### post migration file:
  > ![alt text](screenshots/image-5.png)

- Запустити міграцію через CLI.
  #### test migration run:
  > ![alt text](screenshots/image-2.png)

  #### post migration run:
  > ![alt text](screenshots/image-7.png)

- Перевірити у базі даних (наприклад, через pgAdmin або консоль), що структура таблиці відповідає очікуваній.
  #### test users
  > ![alt text](screenshots/image-3.png)

---

### 3. Реалізувати RESTful API для CRUD-операцій:
- `Create`: створення нового поста
  
  #### controllers/posts/create.ts:
  > ![alt text](screenshots/image-8.png)

- `Read`:
  - отримання всіх постів

    #### controllers/posts/list.ts
    > ![alt text](screenshots/image-10.png)

  - отримання одного поста за ID

    #### controllers/posts/show.ts
    > ![alt text](screenshots/image-9.png)

- `Update`: оновлення поста за ID

#### controllers/posts/update.ts:
> ![alt text](screenshots/image-11.png)

- `Delete`: видалення поста за ID

#### controllers/posts/destroy.ts
> ![alt text](screenshots/image-12.png)

- Використовувати контролер, DTO, роутер та сервіс за прикладом реалізації для User.

##### routes/v1/posts.ts
> ![alt text](screenshots/image-13.png)

---

### 4. Протестувати REST API через Postman:
- Створити окрему колекцію для запитів.
- Додати приклади:
  - створення поста,
  
  > ![alt text](screenshots/image-14.png)
  
  - отримання всіх постів,
  
  > ![alt text](screenshots/image-15.png)
  
  - отримання поста за ID,
  
  > ![alt text](screenshots/image-16.png)
  
  - оновлення поста,
  
  > ![alt text](screenshots/image-17.png)
  
  - видалення поста,
  
  > ![alt text](screenshots/image-18.png)
