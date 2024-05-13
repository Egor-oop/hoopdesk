# Resolvo Helpdesk
Хелпдеск. Новые заявки открываются автоматически. Есть чат, в котором используются Websockets. Есть возможность удалять, просматривать и изменять клиентов и их организации. Фронтенд написан на React с Typescript и tailwindcss. На сервере используется Django Rest Framework, celery, redis. Весь проект запускается с docker-compose


### ⚠️ Проект находится на этапе разработки ⚠️
Сейчас можно запустить только в дев режиме, желательно на ветке [main](https://github.com/Egor-oop/hoopdesk/tree/main)

```bash
docker-compose -f docker-compose.dev.yml up --build
```
