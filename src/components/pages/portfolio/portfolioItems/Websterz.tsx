import React, { FC } from "react";

import Close from "../../../ui/close/Close";
import Heading from "../../../ui/heading/Heading";
import DiscussYourProject from "../../../ui/discussYourProject/DiscussYourProject";

import "../../../../../public/styles/portfolioItems.css";

// import task from "../../../../../public/images/portfolio/websterz/4.jpg";

const Websterz: FC = () => {
  return (
    <div className="portfolioItem">
      <div className="portfolioItem__header">
        <Heading>Portfolio</Heading>
        <Close />
      </div>
      <div className="websterz">
        <p className="websterz__title">
          Брендинг киберспортивной команды Websterz
        </p>
        <p className="websterz__subtitle">Задача</p>
        <p className="websterz__text">
          Для новой киберспортивной организации необходимо разработать маyскота,
          логотип и заложить основы фирменного стиля
        </p>
        <img
          className="websterz__logo-img"
          src="./images/portfolio/websterz/4.jpg"
          alt="websterz logo"
        />
        <p className="websterz__img-text">Игровой логотип команды Websterz</p>
        <p className="websterz__subtitle">Процесс</p>
        <p className="websterz__text">
          От обращения клиента в студию до презентации итоговой работы прошло 3
          недели.
        </p>
        <p className="websterz__heading">Стратегическая сессия</p>
        <p className="websterz__text">
          После стратегической сессии с клиентом были выявлены следующие условия
          при разработке проекта:
        </p>
        <ul className="websterz__ul">
          1. Для организации необходимо разработать два логотипа:
          <li className="websterz__li">игровой для идентификации команды</li>
          <li className="websterz__li">
            корпоративный для идентификации организации
          </li>
        </ul>

        <ul className="websterz__ul">
          2. Логотип команды должен нести в себе прямую ассоциацию с осой, что
          должно подчеркнуть название
        </ul>
        <ul className="websterz__ul">
          3. Маскот осы должен нести в себе боевой характер
        </ul>
        <p className="websterz__heading">Мудборд и конкуренты</p>
        <p className="websterz__text">
          Для согласования будущей стилистики проекта командой был составлен
          мудборд:
        </p>
        <img
          className="websterz__moodbord-img"
          src="./images/portfolio/websterz/2.jpg"
          alt="mooodbord"
        />
        <p className="websterz__img-text">Мудборд для Websterz</p>
        <p className="websterz__text">
          Такой набор иллюстраций помогает достичь единого видения с заказчиком.
          Во время обсуждения стилистики, удобно опираться на существующие
          концепции дизайна и стилистики. Также, при составление мудборда
          позволяет команде погрузиться в мир заказчика и изучить визуальный
          язык конкурентов.
        </p>
        <p className="websterz__text">
          При обсуждении концепции было принято, что стилистика проекта должна
          быть представлена острыми углами, определённой палитрой цветов, а
          также нести в себе идею технологичности.
        </p>
        <p className="websterz__heading">Скетчи</p>
        <p className="websterz__text">
          Разработка проекта была начата с подготовки скетчей маскота. Скетч
          позволяет быстро определить направление, которое задаст стиль проекта.
        </p>
        <p className="websterz__text">
          Во время обсуждения скетчей с заказчиком, выбрали понравившиеся
          образы:
        </p>
        <img
          className="websterz__comment-img"
          src="./images/portfolio/websterz/3.jpg"
          alt="comments"
        />
        <p className="websterz__img-text">
          Комментарии, полученные после обсуждения скетчей с заказчиком
        </p>
        <p className="websterz__heading">Первые версии маскота</p>
        <p className="websterz__text">
          Интегрировав в работу пожелания заказчика, были полученные первые
          версии маскота:
        </p>
        <img
          className="websterz__version-img"
          src="./images/portfolio/websterz/10.png"
          alt="comments"
        />
        <p className="websterz__img-text">Концепты техно-осы</p>
        <img
          className="websterz__robot-img"
          src="./images/portfolio/websterz/6.jpg"
          alt="comments"
        />
        <p className="websterz__img-text">Оса-робот и её версии</p>
        <p className="websterz__text">
          Первые версии маскота имели грубую форму и оказались излишне
          усложнёнными. После корректировки арт-директором, было решено
          отказаться от идеи технологичности и заказчику были предложены две
          концепции маскота:
        </p>
        <img
          className="websterz__robot2-img"
          src="./images/portfolio/websterz/5.jpg"
          alt="comments"
        />
        <p className="websterz__img-text">
          Оса-самурай и оса-боец. Заказчику понравились оба варианта, но идея
          осы-самуря не вписывалась в концепцию игр, в которые играет команда
        </p>
        <p className="websterz__heading">Оса-боец</p>
        <p className="websterz__text">
          Оса-боец была выбрана в качестве основной версии маскота. Художник
          предложил несколько версий:
        </p>
        <img
          className="websterz__gun-img"
          src="./images/portfolio/websterz/9.jpg"
          alt="comments"
        />
        <p className="websterz__img-text">Версии осы с оружием</p>
        <p className="websterz__text">
          По коллективному решению, осу оставили без оружия и придали ей более
          агрессивную стойку.
        </p>
        <img
          className="websterz__horns-img"
          src="./images/portfolio/websterz/1.jpg"
          alt="comments"
        />
        <p className="websterz__img-text">
          «Рожки» осы не хотели выглядеть по-боевому
        </p>
        <p className="websterz__text">
          Заказчика смущали «рожки осы». Для этого на голову маскоту одели
          капюшон:
        </p>
        <img
          className="websterz__color-img"
          src="./images/portfolio/websterz/11.png"
          alt="comments"
        />
        <p className="websterz__text" style={{ marginTop: 15 }}>
          Затем, сделали несколько вариантов, подобрав подходящие цветовые
          сочетания:
        </p>
        <img
          className="websterz__colors-img"
          src="./images/portfolio/websterz/12.png"
          alt="comments"
        />
        <p className="websterz__heading">Финальная версия маскота</p>
        <img
          className="websterz__final-img"
          src="./images/portfolio/websterz/13.png"
          alt="comments"
        />
        <p className="websterz__text" style={{ marginTop: 15 }}>
          Логотип и маскота решено было визуально разделить, оставив в качестве
          лого изображение осы.
        </p>
        <p className="websterz__text">
          Команда начала поиск подходящей формы и довольно быстро пришла к
          конкретной идее и её вариациям.
        </p>
        <img
          className="websterz__form-img"
          src="./images/portfolio/websterz/14.png"
          alt="comments"
        />
        <p className="websterz__heading">Итоговая версия лого</p>
        <p className="websterz__text">
          Итоговая версия лого и основы для фирменного стиля
        </p>
        <img
          className="websterz__itog-img"
          src="./images/portfolio/websterz/7.jpg"
          alt="comments"
        />
        <img
          style={{ marginTop: 15 }}
          className="websterz__itog2-img"
          src="./images/portfolio/websterz/8.jpg"
          alt="comments"
        />

        <p className="websterz__acorn">
          Над проектом работала команда Acorn. Если ваш проект нуждается в
          ребрендинге или вы хотите разработать сайт, напишите нам.
        </p>
      </div>
      <DiscussYourProject />
    </div>
  );
};

export default Websterz;
