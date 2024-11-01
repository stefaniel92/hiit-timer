import { ActionButtons } from "@/components/ActionButtons";
import { SetupForm } from "@/components/SetupForm";
import { Timer } from "@/components/Timer";
import next from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  type TWorkoutStage = "work" | "rest" | "break" | undefined;
  const [workTimer, setWorkTimer] = useState("");
  const [restTimer, setRestTimer] = useState("");
  const [rounds, setRounds] = useState(1);
  const [breakTimer, setBreakTimer] = useState("");
  const [workoutState, setWorkoutState] = useState<
    "setup" | "running" | "paused"
  >("setup");
  const [currentStageTitle, setCurrentStageTitle] = useState<
    "Work" | "Rest" | "Break"
  >("Work");

  const startWorkout = () => {
    setWorkoutState("running");
    setCurrentStage("work");
    setCurrentStageSeconds(Number(workTimer));
  };

  const stopWorkout = () => {
    setWorkoutState("setup");
    setCurrentStage(undefined);
  };

  const pauseWorkout = () => {
    setWorkoutState("paused");
  };
  const [currentStageSeconds, setCurrentStageSeconds] = useState(
    Number(workTimer)
  );
  const [currentStage, setCurrentStage] = useState<TWorkoutStage>("work");

  const getNextStage = (): TWorkoutStage => {
    let nextStage;

    switch (currentStage) {
      case "work":
        nextStage = "rest";
        break;
      case "rest":
        nextStage = "work";
        break;
      case "break":
        nextStage = "work";
        break;
      default:
        nextStage = "work";
    }
    return nextStage as TWorkoutStage;
  };

  const changeWorkoutStage = async () => {
    // for (let i = rounds; i > 0; i--) {
    await setCurrentStage(getNextStage());
    // }
  };

  useEffect(() => {
    console.log({ currentStageSeconds });
    if (workoutState !== "running") return;

    if (!currentStage) {
      setCurrentStage("work");
    }

    const workoutStageChange = setInterval(() => {
      changeWorkoutStage();
    }, currentStageSeconds);

    return () => clearInterval(workoutStageChange);
  }, [workoutState]);

  useEffect(() => {
    console.log({ currentStage });
    switch (currentStage) {
      case "work":
        console.log("switch case 1");
        setCurrentStageTitle("Work");
        setCurrentStageSeconds(Number(workTimer));
        break;
      case "rest":
        console.log("switch case 2");
        setCurrentStageTitle("Rest");
        setCurrentStageSeconds(Number(restTimer));
        break;
      case "break":
        console.log("switch case 3");
        setCurrentStageTitle("Break");
        setCurrentStageSeconds(Number(breakTimer));
        break;
      default:
        setCurrentStageTitle("Work");
        setCurrentStageSeconds(Number(workTimer));
    }
  }, [currentStage]);

  return (
    <>
      <Head>
        <title>HIIT Timer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>HIIT Timer</h1>
      </header>
      <main className="main">
        <div className="container">
          {workoutState === "setup" && (
            <SetupForm
              workTimer={workTimer}
              setWorkTimer={setWorkTimer}
              restTimer={restTimer}
              setRestTimer={setRestTimer}
              rounds={rounds}
              setRounds={setRounds}
              breakTimer={breakTimer}
              setBreakTimer={setBreakTimer}
              onSubmit={startWorkout}
            />
          )}

          {workoutState !== "setup" ? (
            <>
              <h2
                className={`currentStageTitle ${currentStageTitle.toLowerCase()} `}
              >
                {currentStageTitle}
              </h2>
              <Timer
                startingSeconds={Number(currentStageSeconds)}
                isRunning={workoutState === "running"}
              />
            </>
          ) : null}

          {/* Add all time together */}

          <ActionButtons
            startWorkout={startWorkout}
            stopWorkout={stopWorkout}
            pauseWorkout={pauseWorkout}
          />

          {/* *****FEATURES***** */}
          {/* Beep when timer ends */}

          {/* Add delay to first round */}

          {/* Say halfway point */}

          {/* Say "Work" or "Rest" or "Break in between rounds" */}

          {/* Speak out number of round */}
        </div>
      </main>
    </>
  );
}
