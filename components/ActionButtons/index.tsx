import { ChangeEvent } from "react";

type TProps = {
  startWorkout: () => void;
  pauseWorkout: () => void;
  stopWorkout: () => void;
};

export const ActionButtons = ({
  startWorkout,
  pauseWorkout,
  stopWorkout,
}: TProps) => {
  return (
    <div className="buttons">
      <button className="button playButton" onClick={startWorkout}>
        Start Workout
      </button>

      <button className="button pauseButton" onClick={pauseWorkout}>
        Pause Workout
      </button>
      <button className="button stopButton" onClick={stopWorkout}>
        Stop Workout
      </button>
    </div>
  );
};
