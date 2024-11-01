import { ChangeEvent } from "react";

type TProps = {
  workTimer: string;
  setWorkTimer: (e: string) => void;
  restTimer: string;
  setRestTimer: (e: string) => void;
  rounds: number;
  setRounds: (e: number) => void;
  breakTimer: string;
  setBreakTimer: (e: string) => void;
  onSubmit: () => void;
};

export const SetupForm = ({
  workTimer,
  setWorkTimer,
  restTimer,
  setRestTimer,
  rounds,
  setRounds,
  breakTimer,
  setBreakTimer,
  onSubmit,
}: TProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="fieldGroup">
        <label htmlFor="workTimerInput">Seconds of Work</label>
        <input
          type="number"
          min={0}
          id="workTimerInput"
          value={workTimer}
          onChange={(e) => setWorkTimer(e.target.value.slice(0, 3))}
          placeholder="Seconds of work"
        />
      </div>

      {/* Set Rest timer */}
      <div className="fieldGroup">
        <label htmlFor="restTimerInput">Seconds of Rest</label>
        <input
          type="number"
          min={0}
          id="restTimerInput"
          value={restTimer}
          onChange={(e) => setRestTimer(e.target.value.slice(0, 3))}
          placeholder="Seconds of rest"
        />
      </div>

      {/* Set Number of Rounds */}
      <div className="fieldGroup">
        <label htmlFor="roundsInput">Number of Rounds</label>
        <input
          type="number"
          min={0}
          id="roundsInput"
          value={rounds}
          onChange={(e) => setRounds(Number(e.target.value.slice(0, 3)))}
          placeholder="Number of rounds"
        />
      </div>

      {/* Set break in-between rounds */}
      <div className="fieldGroup">
        <label htmlFor="breakTimerInput">Seconds Between Rounds</label>
        <input
          type="number"
          min={0}
          id="breakTimerInput"
          value={breakTimer}
          onChange={(e) => setBreakTimer(e.target.value.slice(0, 3))}
          placeholder="Seconds between rounds"
        />
      </div>
    </form>
  );
};
