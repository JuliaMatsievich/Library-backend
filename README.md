### Задание

Создать сервер на Express.js + MongoDB на основе REST API из предыдущего урока.

REST API должно быть доступно по адресу 127.0.0.1:3005

## REST API должно:

   - Отдавать список всех пользователей.
   - Отдавать данные по пользователю на основе id.
   - Изменять данные пользователя на основе id.
   - Удалять данные пользователя на основе id.
   - Отдавать список всех книг.
   - Отдавать данные по книге на основе id.
   - Изменять данные книги на основе id.
   - Удалять данные книги на основе id.

## Также REST API должно:

   - Возвращать ошибку 404, если сущность не найдена или был запрошен несуществующий роут.
   - Возвращать ошибку 500, если что-то пошло не так при обработке запроса.
   - При успешном ответе сервера возвращать JSON-сущности.

## Формат данных пользователя:

   - Имя, строка, не менее 2 символов.
   - Фамилия, строка, не менее 2 символов.
   - Username, строка, не менее 5 символов.

## Формат данных книги:

   - Заголовок, строка, не менее 2 символов.
   - Автор, строка, не менее 2 символов.
   - Год выпуска, число.
