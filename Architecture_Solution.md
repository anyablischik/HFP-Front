# Часть 1
## 1.	Тип приложения
Веб-приложение для выполнения преимущественно на сервере
## 2.	Стратегия развёртывания 
Нераспределенное развертывание (обеспечит простоту и минимальное количество необходимых физических серверов, а также хорошую производительность)
## 3. Выбор технологии
  - Java - кроссплатформенный объектно-ориентированный язык программирования, что обеспечивает простое расширение функционала, а также возможность развёртки на различных ОС. Кроме того, данный язык предоставляет обширный функционал для взаимодействия с БД.
  - Angular.js - широко распространённый фреймворк, что гарантирует его надёжность. Стиль кода, используемый в данном фреймворке, делает программы более легковесными. Обеспечивает высокую скорость разработки. MVC из коробки. 
## 4. Показатели качества
  - Концептуальная целостность
  - Доступность
  - Производительность
  - Надежность
  - Безопасность
## 5.  Пути реализации сквозной функциональности: 
  - Аутентификация: обеспечить использование надежных паролей или парольных фраз; не передавать пароли по сети; хранить пароли в виде хеш паролей.
  - Авторизация: защита ресурсов посредством авторизации вызывающей стороны.
  - Сетевое взаимодействие: использовать асинхронное программирование; выбирать соответствующие транспортные протоколы; обеспечить защиту сообщений при передаче.
  - Управление конфигурацией: разграничить права на управление конфигурацией; обеспечить целесообразность конфигурации; ограничить доступ к сведениям о конфигурации.
 ## To be architecture:
 1. Диаграмма компонентов.
![alt text](https://github.com/anyablischik/hfp-1/blob/master/ArchitectureSolutionsResource/ArchitectureAsBe.png)
 2. Диаграмма развертывания.
![alt text](https://github.com/anyablischik/hfp-1/blob/master/ArchitectureSolutionsResource/DeploymentDiagram.png)
 3. [Диаграмма классов](https://github.com/anyablischik/hfp-1/blob/master/ArchitectureSolutionsResource/ArchitectureToBe.bmp)
 
 # Часть 2
 ## As is architecture:
 1. Диаграмма компонентов.
 ![alt text](https://github.com/anyablischik/hfp-1/blob/master/ArchitectureSolutionsResource/ArchitectureAsIs.png)
 2. [Диаграмма классов](https://github.com/anyablischik/hfp-1/blob/master/ArchitectureSolutionsResource/ArchitectureAsIs.bmp)
 
 # Часть 3
  1. Во время разработки возникли некоторые трудности с реализацией нового функционала, поэтому были добавлены сервисы, модели, dtos, что повлекло изменение архитектуры.
  2. Была запланирована более простая архитектура с меньшим количеством сервисов, моделей, сущностей. Одной из причин является недостаток опыта проектирования такого рода приложений. Так как приложение, представленное на первом спринте, являлось концептом существующей модели нашего приложения, то мы не вдавались в тонкости архитектуры.
  3. В связи с вышеперечисленными причинами мы будет улучшать архитектуру согласно следующим принципам:
  - принцип разделения функций,
  - принцип единственной ответственности,
  - принцип минимального знания;
  так как в данный момент эти принципы частично нарушены.
  