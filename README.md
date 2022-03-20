# Часы для запуска на Raspberry Pi

[Статья на vc.ru](https://vc.ru/dev/203316-nuzhny-chasy-no-mnogo-hotelok-sdelay-sam) с описанием часов

## Требования

- [npm](http://npmjs.com)
- [Node.js](https://nodejs.org/en/download/)

## Возможности

- Показывает как новосибирское так и московское время (при желании можно поменять какой часовой пояс показывать)
- Каждый часовой пояс может быть вывеен на часах своим цветом

# Запуск на малинке

В корне проекта

```bash
 sudo nodemon ./src/index.js
```

## Проверка кода с помощью eslint

```bash
 npm run lint
```

## Запуск тестов

```bash
 npm run test
```

В режиме отслеживания изменений

```bash
 npm run test:watch
```
