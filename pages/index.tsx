import { ActionButtons } from "@/components/ActionButtons";
import { SetupForm } from "@/components/SetupForm";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [workTimer, setWorkTimer] = useState("");
  const [restTimer, setRestTimer] = useState("");
  const [rounds, setRounds] = useState("1");
  const [breakTimer, setBreakTimer] = useState("");
  const [workoutState, setWorkoutState] = useState<
    "setup" | "running" | "paused"
  >("setup");

  const startWorkout = () => {
    setWorkoutState("running");
  };

  const stopWorkout = () => {
    setWorkoutState("setup");
  };

  const pauseWorkout = () => {};

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
