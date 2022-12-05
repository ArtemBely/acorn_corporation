import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "sassy-datepicker";
import Heading from "../../ui/heading/Heading";
import Close from "../../ui/close/Close";
import InputDuscuss from "../../ui/input/inputDuscuss";
import ButtonDiscuss from "../../ui/button/ButtonDiscuss";
import Timer from "./Timer";
import { times } from "./data";
import "../../../../public/styles/discuss.css";
const DiscussProject = () => {
    // свяжитель со мной как можно скорее / я хочу выбрать дату встречи
    const [date, setDate] = useState("fast");
    // дата встречи
    const [dataText, setDataText] = useState(new Date());
    // информация о пользователе
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [comment, setComment] = useState("");
    const [time, setTime] = useState("");
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
    const onChange = (newDate) => {
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
    return (React.createElement("div", { className: "discuss" },
        React.createElement("div", { className: "discuss__header" },
            React.createElement(Heading, null, "Discuss your project"),
            React.createElement(Close, null)),
        React.createElement("div", { className: "discuss__container" },
            React.createElement("div", { className: "discuss__wrapper" },
                confirm && (React.createElement(React.Fragment, null,
                    React.createElement("p", { className: "discuss__wrapper-title" },
                        "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043E\u0431\u0441\u0443\u0434\u0438\u043C ",
                        React.createElement("br", null),
                        " \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442"),
                    React.createElement("div", { className: "discuss__wrapper_checkbox-block", onClick: changeDate },
                        React.createElement("input", { type: "checkbox", className: "discuss__wrapper-checkbox", checked: date === "fast" }),
                        React.createElement("p", null, "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441\u043E \u043C\u043D\u043E\u0439 \u043A\u0430\u043A \u043C\u043E\u0436\u043D\u043E \u0441\u043A\u043E\u0440\u0435\u0435")),
                    React.createElement("div", { className: "discuss__wrapper_checkbox-block", onClick: changeDate, style: { marginBottom: 30 } },
                        React.createElement("input", { type: "checkbox", className: "discuss__wrapper-checkbox", checked: date === "date" }),
                        React.createElement("p", null, "\u042F \u0445\u043E\u0447\u0443 \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0430\u0442\u0443 \u0432\u0441\u0442\u0440\u0435\u0447\u0438")),
                    React.createElement("div", { className: "discuss__wrapper_input" },
                        React.createElement("p", null, "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F"),
                        React.createElement(InputDuscuss, { placeholder: "Johnson Smith", value: name, setValue: (e) => setName(e) })),
                    React.createElement("div", { className: "discuss__wrapper_input" },
                        React.createElement("p", null, "\u0412\u0430\u0448 \u043A\u043E\u043D\u0442\u0430\u043A\u0442"),
                        React.createElement(InputDuscuss, { placeholder: "Email", value: "", setValue: () => { }, disabled: true }),
                        React.createElement(InputDuscuss, { placeholder: "hello@example.com", value: contact, setValue: (e) => setContact(e), type: "email" })),
                    React.createElement("div", { className: "discuss__wrapper_input" },
                        React.createElement("p", null, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"),
                        React.createElement(InputDuscuss, { placeholder: "I am in anticipation of our work!", value: comment, setValue: (e) => setComment(e) })),
                    date === "date" && (React.createElement("div", { className: "discuss__wrapper_calendar" },
                        React.createElement("p", { className: "discuss__wrapper_calendar-title" }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443"),
                        React.createElement(DatePicker, { value: dataText, onChange: onChange }),
                        React.createElement("p", { className: "discuss__wrapper_calendar-title" }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0440\u0435\u043C\u044F"),
                        React.createElement("div", { className: "discuss__wrapper_calendar-time" }, times.map((item) => (React.createElement("button", { className: "discuss__wrapper_calendar-time-button", key: item.id, onClick: () => setTime(item.name), style: {
                                background: time === item.name ? "#fff" : "",
                                color: time === item.name ? "#3A7FE6" : "#fff",
                            } }, item.name)))))),
                    React.createElement(ButtonDiscuss, { onClick: setTimeBlock }, "Confirm"),
                    React.createElement("p", { className: "discuss__wrapper-policy" },
                        "When you click on\u00A0the \u00ABConfirm\u00BB button,",
                        React.createElement("br", null),
                        " you agree with the Privacy Policy"),
                    " ")),
                timer && timeLeft > 0 && (React.createElement(Timer, { comment: comment, contact: contact, dataText: dataText, name: name, setFinishBlock: setFinishBlock, time: time, timeLeft: timeLeft, setTimeLeft: setTimeLeft, setConfirmBlock: setConfirmBlock })),
                finish || timeLeft === 0 ? (React.createElement("div", { className: "discuss__wrapper-finish" },
                    React.createElement("p", { className: "discuss__wrapper-title" }, "\u0413\u043E\u0442\u043E\u0432\u043E"),
                    React.createElement("p", { className: "discuss__wrapper-finish-subititle" }, "Thanks for the application. Our manager will contact you soon"),
                    React.createElement(NavLink, { to: "/" },
                        React.createElement(ButtonDiscuss, null, "Great!")))) : ("")))));
};
export default DiscussProject;
