# Команды по взаимодействию с [GIT](https://git-scm.com)

## Введение

**Git** — это распределенная система управления версиями, которая позволяет разработчикам отслеживать изменения в коде и сотрудничать над проектами.

*Основные особенности* Git:
1. Распределенность
2. История изменений
3. Ветвление
4. Производительность

- [Настройка](#настройка)
- [Создание Git репозитория и работа с ним](#создание-git-репозитория-и-работа-с-ним)
- [Автор и коммитер](#автор-и-коммитер)
- [Работа с удаленными репозиториями](#работа-с-удаленными-репозиториями)
---
## Настройка
`git config` позволяет просматривать и настраивать параметры, для работы Git.
Эти параметры могут быть сохранены в трёх местах:
- `--system`  для всех пользователей системы и для всех их репозиториев.
- `--global` хранит настройки конкретного пользователя.
- `--local` хранит настройки конкретного репозитория.

- `git config --list --show-origin` чтобы посмотреть все установленные настройки и узнать где именно они заданы.

Первое, что вам следует сделать после установки Git — указать ваше имя и адрес электронной почты. Это важно, потому что каждый коммит в Git содержит эту информацию.

- `git config --global user.name "John Doe"`
- `git config --global user.email johndoe@example.com`

Если указана опция --global, то эти настройки достаточно сделать только один раз, в этом случае Git будет использовать эти данные для всего, что вы делаете в этой системе.

---
## Создание Git репозитория и работа с ним
- `git init` создаёт в текущем каталоге новый подкаталог с именем .git, содержащий все необходимые файлы репозитория — структуру Git репозитория.

- `git add` добавляет под версионный контроль существующие файлы.
    - `git add .` добавляет в индекс все изменённые файлы.
- `git status` основной инструмент, используемый для определения, какие файлы в каком состоянии находятся.
    - `git status -s` или `git status --short` чтобы получить более упрощённый вывод.
- `git diff` показывает непосредственно добавленные и удалённые строки — патч как он есть.
    - `git diff --staged` сравнивает проиндексированные изменения с последним коммитом
- `git commit` фиксирует изменения в репозитории:
    - `-m ""` добавить сообщение к коммиту.
- `git mv` переименовывает файл и фиксирует изменения в индексе.
- `git rm` удаление файлов:
  - `--cached` удалить из индекса, оставив файл в рабочей директории.

---
## Автор и коммитер
- `git show` — отображает информацию о последнем коммите
  - **Author** — человек, который является создателем кода/изменений.
  - **Committer** — человек, который зафиксировал изменения в репозитории.

---
## Работа с удаленными репозиториями
- `git remote` просмотреть список настроенных удалённых репозиториев.
    - `git remote -v` просмотреть адреса для чтения и записи, привязанные к репозиторию.
- `git remote add <shortname> <url>` добавить удалённый репозиторий и присвоить ему имя.
- `git push <remote-name> <branch-name>` отправка изменений в удалённый репозиторий.
- `git remote show <remote>` получить больше информации об одном из удалённых репозиториев.
- `git remote rename` для переименования удалённого репозитория.
- `git remote rm` для удаления удалённого репозитория.

---
## Пример работы с Git
```bash
git init
git add .
git commit -m "first commit"
```

![Конец](https://i.ytimg.com/vi/6EXB2Of1zLY/maxresdefault.jpg)