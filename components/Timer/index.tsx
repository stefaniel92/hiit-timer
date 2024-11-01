import { ChangeEvent, useEffect, useState } from "react";

type TProps = {
  startingSeconds: number;
  isRunning?: boolean;
};

export const Timer = ({ startingSeconds, isRunning }: TProps) => {
  const hasMinutes = startingSeconds > 60;
  hasMinutes && (startingSeconds % 60).toString().length === 1;

  const [minutes, setMinutes] = useState(
    hasMinutes ? Math.floor(startingSeconds / 60) : 0
  );
  const [seconds, setSeconds] = useState(
    hasMinutes ? startingSeconds % 60 : startingSeconds
  );

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setMinutes(seconds === 0 && minutes > 0 ? minutes - 1 : minutes);
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return seconds - 1;
        }
        if (prevSeconds === 0 && minutes > 0) {
          return 59;
        }
        return 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);
  return (
    <p className="timer">{`${minutes === 0 ? "00" : minutes}:${
      seconds < 10 ? seconds.toString().padStart(2, "0") : seconds
    }`}</p>
  );
};
