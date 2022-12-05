import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "sassy-datepicker";

import Heading from "../../ui/heading/Heading";
import Close from "../../ui/close/Close";
import InputDuscuss from "../../ui/input/inputDuscuss";
import ButtonDiscuss from "../../ui/button/ButtonDiscuss";
import Timer from "./Timer";

import { times } from "./data";

import "../../../../public/styles/discuss.css";

const DiscussProject: FC = () => {
  // свяжитель со мной как можно скорее / я хочу выбрать дату встречи
  const [date, setDate] = useState<"fast" | "date">("fast");

  // дата встречи
  const [dataText, setDataText] = useState(new Date());

  // информация о пользователе
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [comment, setComment] = useState("");
  const [time, setTime] = useState<string>("");
  const [contactSelect, setContactSelect] = useState("Email");

  // компоненты:
  const [confirm, setConfirm] = useState(true);
  const [finish, setFinish] = useState(false);
  const [timer, setTimer] = useState(false);

  // таймер
  const [timeLeft, setTimeLeft] = useState(25);

  const changeDate = () => {
    setDate(date === "fast" ? "date" : "fast");
  };

  const onChange = (newDate: any) => {
    setDataText(newDate);
  };

  // показать confirm блок
  const setConfirmBlock = () => {
    setConfirm(true);
    setTimer(false);
  };

  // показать timer блок
  const setTimeBlock = () => {
    setTimer(true);
    setConfirm(false);
  };

  // показать finish блок
  const setFinishBlock = () => {
    setFinish(true);
    setTimer(false);
  };

  return (
    <div className="discuss">
      <div className="discuss__header">
        <Heading>Discuss your project</Heading>
        <Close />
      </div>
      <div className="discuss__container">
        <div className="discuss__wrapper">
          {/* первый и главный компонент */}
          {confirm && (
            <>
              <p className="discuss__wrapper-title">
                Давайте обсудим <br /> ваш проект
              </p>
              <div
                className="discuss__wrapper_checkbox-block"
                onClick={changeDate}
              >
                <input
                  type="checkbox"
                  className="discuss__wrapper-checkbox"
                  checked={date === "fast"}
                />
                <p>Свяжитесь со мной как можно скорее</p>
              </div>
              <div
                className="discuss__wrapper_checkbox-block"
                onClick={changeDate}
                style={{ marginBottom: 30 }}
              >
                <input
                  type="checkbox"
                  className="discuss__wrapper-checkbox"
                  checked={date === "date"}
                />
                <p>Я хочу выбрать дату встречи</p>
              </div>
              <div className="discuss__wrapper_input">
                <p>Ваше имя</p>
                <InputDuscuss
                  placeholder="Johnson Smith"
                  value={name}
                  setValue={(e) => setName(e)}
                />
              </div>
              <div className="discuss__wrapper_input">
                <p>Ваш контакт</p>
                <InputDuscuss
                  placeholder="Email"
                  value={""}
                  setValue={() => {}}
                  disabled
                />
                <InputDuscuss
                  placeholder="hello@example.com"
                  value={contact}
                  setValue={(e) => setContact(e)}
                  type="email"
                />
              </div>
              <div className="discuss__wrapper_input">
                <p>Комментарий</p>
                <InputDuscuss
                  placeholder="I am in anticipation of our work!"
                  value={comment}
                  setValue={(e) => setComment(e)}
                />
              </div>
              {/* календарь */}
              {date === "date" && (
                <div className="discuss__wrapper_calendar">
                  <p className="discuss__wrapper_calendar-title">
                    Выберите дату
                  </p>
                  <DatePicker value={dataText} onChange={onChange} />
                  <p className="discuss__wrapper_calendar-title">
                    Выберите время
                  </p>
                  <div className="discuss__wrapper_calendar-time">
                    {times.map((item) => (
                      <button
                        className="discuss__wrapper_calendar-time-button"
                        key={item.id}
                        onClick={() => setTime(item.name)}
                        style={{
                          background: time === item.name ? "#fff" : "",
                          color: time === item.name ? "#3A7FE6" : "#fff",
                        }}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <ButtonDiscuss onClick={setTimeBlock}>Confirm</ButtonDiscuss>
              <p className="discuss__wrapper-policy">
                When you click on the «Confirm» button,
                <br /> you agree with the Privacy Policy
              </p>{" "}
            </>
          )}

          {/* компонент таймера и проверки данных пользователя */}
          {timer && timeLeft > 0 && (
            <Timer
              comment={comment}
              contact={contact}
              dataText={dataText}
              name={name}
              setFinishBlock={setFinishBlock}
              time={time}
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              setConfirmBlock={setConfirmBlock}
            />
          )}

          {/* компонент финишного компонента */}
          {finish || timeLeft === 0 ? (
            <div className="discuss__wrapper-finish">
              <p className="discuss__wrapper-title">Готово</p>
              <p className="discuss__wrapper-finish-subititle">
                Thanks for the application. Our manager will contact you soon
              </p>
              <NavLink to="/">
                <ButtonDiscuss>Great!</ButtonDiscuss>
              </NavLink>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscussProject;
