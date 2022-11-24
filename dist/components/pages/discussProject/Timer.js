import React, { useEffect } from "react";
import Moment from "react-moment";
import ButtonDiscuss from "../../ui/button/ButtonDiscuss";
import "../../../../public/styles/discuss.css";
const Timer = ({ comment, contact, dataText, name, setFinishBlock, time, timeLeft, setTimeLeft, setConfirmBlock, }) => {
    // таймер 25 сек.
    useEffect(() => {
        const timer = timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
        return () => {
            clearInterval(timer);
        };
    }, [timeLeft]);
    return (React.createElement("div", { className: "discuss__wrapper_confirm" },
        React.createElement("p", { className: "discuss__wrapper-title" }, "Confirmed"),
        React.createElement("p", { className: "discuss__wrapper_confirm-subtitle" }, "Is everything right?"),
        React.createElement("div", { className: "discuss__wrapper_confirm-user" },
            React.createElement("div", { className: "discuss__wrapper_confirm-user-field" },
                React.createElement("p", null, "Name"),
                React.createElement("p", null, name)),
            React.createElement("div", { className: "discuss__wrapper_confirm-user-field" },
                React.createElement("p", null, "Contact"),
                React.createElement("p", null, "Email")),
            React.createElement("div", { className: "discuss__wrapper_confirm-user-field" },
                React.createElement("p", null, "Email"),
                React.createElement("p", null, contact)),
            React.createElement("div", { className: "discuss__wrapper_confirm-user-field" },
                React.createElement("p", null, "Date"),
                React.createElement("p", null,
                    " ",
                    React.createElement(Moment, { format: "D MMMM YYYY", withTitle: true }, dataText))),
            React.createElement("div", { className: "discuss__wrapper_confirm-user-field" },
                React.createElement("p", null, "Time"),
                React.createElement("p", null, time)),
            React.createElement("div", { className: "discuss__wrapper_confirm-user-field" },
                React.createElement("p", null, "Comment"),
                React.createElement("p", null, comment))),
        React.createElement(ButtonDiscuss, { onClick: setFinishBlock },
            "Yes that's right | ",
            timeLeft),
        React.createElement("p", { className: "discuss__wrapper_confirm-change", onClick: setConfirmBlock }, "I want to change information"),
        React.createElement("p", { className: "discuss__wrapper_confirm-policy" }, "When you click on\u00A0the \u00ABConfirm\u00BB button, you agree with the Privacy Policy")));
};
export default Timer;
