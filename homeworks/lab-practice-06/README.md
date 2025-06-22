# Практично-лабораторне заняття №6
### Розробка UI для реалізації CRUD-операцій
### Мета
> Створити користувацький інтерфейс для взаємодії з реалізованим RESTful API, що надає можливість перегляду, створення, редагування та видалення екземплярів певної сутності. Розробка ведеться на базі React з використанням TanStack Router для реалізації маршрутизації.
## Завдання
> Використовуючи boilerplate-проєкт vite-react-boilerplate, для сутності Post, яка була створена в роботі “Реалізація нової сутності, створення CRUD-операцій та відповідного RESTful API”, необхідно:

### Завдання 1 & 2:
> Сторінка колекції екземплярів сутності (`/posts`)
- Реалізувати рендеринг списку всіх доступних екземплярів сутності. Для кожного елемента відображати основну інформацію (ключові поля). реалізувати: відображення повної інформації про екземпляр; можливість редагування (форма з полями);  кнопку для збереження змін (`Update`). Реалізувати можливість видалення елемента з колекції (з підтвердженням дії).

    routes:

    ![alt text](screenshots/image-15.png)

    post type:

    ![alt text](screenshots/image.png)

    post render:

    ![alt text](screenshots/image-1.png)

    ![alt text](screenshots/image-2.png)

    ![alt text](screenshots/image-3.png)

    ![alt text](screenshots/image-4.png)

    ![alt text](screenshots/image-5.png)

    post delete:

    ![alt text](screenshots/image-23.png)

- Передбачити можливість переходу на сторінку конкретного екземпляра (`/posts/:id`). Реалізувати: форму з порожніми полями для введення нових даних; кнопку для збереження нового екземпляра (`Create`).

    routes:

    ![alt text](screenshots/image-14.png)
    
    post content render:

    ![alt text](screenshots/image-6.png)

    ![alt text](screenshots/image-7.png)

    ![alt text](screenshots/image-8.png)

    ![alt text](screenshots/image-9.png)

    ![alt text](screenshots/image-10.png)

    ![alt text](screenshots/image-11.png)

    ![alt text](screenshots/image-12.png)

    ![alt text](screenshots/image-13.png)

    post content: 

    ![alt text](screenshots/image-16.png)


- Додати кнопку "Створити новий екземпляр", яка веде на маршрут `/posts/new`.

    routes:

    ![alt text](screenshots/image-22.png)

    new post:

    ![alt text](screenshots/image-17.png)

    ![alt text](screenshots/image-18.png)

    ![alt text](screenshots/image-19.png)

    ![alt text](screenshots/image-20.png)

    new post render:

    ![alt text](screenshots/image-21.png)

