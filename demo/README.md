# MMA Kaufbeuren

Сайт спортивного клуба. Публичная локаль — немецкий (`lang="de"`). Код и имена модулей — на английском. Договорённости команды — в этом репозитории на русском.

Рабочее название «MMA Kaufbeuren» стоит в метаданных, пока клуб не подтвердит юридическое имя и тексты.

## Стек

- Next.js 16 (App Router) + React 19 + TypeScript (strict)
- Tailwind CSS 4
- Feature-Sliced Design, проверка архитектуры — [Steiger](https://github.com/feature-sliced/steiger)
- Серверные компоненты по умолчанию. Клиентский стор — Redux Toolkit, в `model` слайса, которому он нужен

## Как устроен репозиторий

```text
app/                  маршруты Next.js, файл страницы только реэкспортит слайс
src/
  _app/               провайдеры, глобальные стили
  _pages/             композиция страниц
  widgets/            появляется вместе с первым виджет-слайсом
  features/           появляется вместе с первым пользовательским действием
  entities/           появляется вместе с первой бизнес-сущностью
  shared/             ui, api, lib, config — без знания домена клуба
```

Слои `widgets`, `features` и `entities` не заведены пустыми. Первый слайс создаётся в тот момент, когда код реально туда переезжает. Правила нарезки, импортов и доменная карта — в [docs/architecture.md](docs/architecture.md). Требования к коду, UI и пул-реквестам — в [docs/conventions.md](docs/conventions.md).

## Первый запуск

На диске `D:` нужно свободное место под `node_modules` (несколько сотен мегабайт). Зависимости объявлены в `package.json`, каталог зависимостей в репозиторий не входит.

```bash
npm install
npm run dev
```

Проверка перед пул-реквестом:

```bash
npm run check
```

Это `tsc --noEmit`, ESLint и `steiger ./src`.

## Demo для GitHub Pages

Эта папка подготовлена как автономная демо-версия:

- данные читаются напрямую из локальной SQLite-базы [mmakaufbeuren.sqlite](./mmakaufbeuren.sqlite) во время сборки Next.js;
- backend не нужен;
- изображения берутся из [public/uploads](./public/uploads).

Сборка статического сайта:

```bash
npm install
npm run build
```

По умолчанию для GitHub Actions basePath вычисляется из `GITHUB_REPOSITORY`.
Локально можно явно задать:

```bash
NEXT_PUBLIC_BASE_PATH=/repo-name npm run build
```

## Публикация на GitHub Pages

В репозитории добавлен workflow: [.github/workflows/deploy-demo-pages.yml](../.github/workflows/deploy-demo-pages.yml).

Он:

- запускается при изменениях в `demo/**`;
- собирает проект в `demo/out`;
- публикует артефакт в GitHub Pages.

В настройках репозитория нужно один раз включить:

- `Settings` → `Pages` → `Build and deployment` → `Source: GitHub Actions`.

## Куда класть первую страницу

1. Слайс `src/_pages/<route>/` с сегментом `ui/` и публичным `index.ts`.
2. Тонкий файл `app/<route>/page.tsx`: `export { Page as default, metadata } from "@/_pages/<route>"`.
3. Путь добавить в `src/shared/config/routes.ts`.

Главная уже собрана так: `app/page.tsx` → `@/_pages/home`. Список разделов на ней — объём первой версии, его заменит макет главной.
