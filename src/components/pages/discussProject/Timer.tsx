import React, { FC, useEffect } from "react";
import Moment from "react-moment";

import ButtonDiscuss from "../../ui/button/ButtonDiscuss";

import "../../../../public/styles/discuss.css";

interface ITimerProps {
  name: string;
  contact: string;
  dataText: Date;
  time: string;
  comment: string;
  timeLeft: number;
  setTimeLeft: (arg0: number) => void;
  setFinishBlock: () => void;
  setConfirmBlock: () => void;
}

const Timer: FC<ITimerProps> = ({
  comment,
  contact,
  dataText,
  name,
  setFinishBlock,
  time,
  timeLeft,
  setTimeLeft,
  setConfirmBlock,
}) => {
  // таймер 25 сек.
  useEffect(() => {
    const timer: any =
      timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  return (
    <div className="discuss__wrapper_confirm">
      <p className="discuss__wrapper-title">Confirmed</p>
      <p className="discuss__wrapper_confirm-subtitle">Is everything right?</p>
      <div className="discuss__wrapper_confirm-user">
        <div className="discuss__wrapper_confirm-user-field">
          <p>Name</p>
          <p>{name}</p>
        </div>
        <div className="discuss__wrapper_confirm-user-field">
          <p>Contact</p>
          <p>Email</p>
        </div>
        <div className="discuss__wrapper_confirm-user-field">
          <p>Email</p>
          <p>{contact}</p>
        </div>
        <div className="discuss__wrapper_confirm-user-field">
          <p>Date</p>
          <p>
            {" "}
            <Moment format="D MMMM YYYY" withTitle>
              {dataText}
            </Moment>
          </p>
        </div>
        <div className="discuss__wrapper_confirm-user-field">
          <p>Time</p>
          <p>{time}</p>
        </div>
        <div className="discuss__wrapper_confirm-user-field">
          <p>Comment</p>
          <p>{comment}</p>
        </div>
      </div>
      <ButtonDiscuss onClick={setFinishBlock}>
        Yes that's right | {timeLeft}
      </ButtonDiscuss>
      <p className="discuss__wrapper_confirm-change" onClick={setConfirmBlock}>
        I want to change information
      </p>

      <p className="discuss__wrapper_confirm-policy">
        When you click on the «Confirm» button, you agree with the Privacy
        Policy
      </p>
    </div>
  );
};

export default Timer;
