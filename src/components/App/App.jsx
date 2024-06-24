import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const getInitialFeedback = () => {
  const savedFeedback = localStorage.getItem("saved-feedback");
  if (savedFeedback !== null) {
    return JSON.parse(savedFeedback);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
};

export default function App() {
  const [feedback, setFeedback] = useState(getInitialFeedback);

  //   console.log(feedback);
  //   console.log(setFeedback);
  const updateFeedback = (feedbackType) => {
    // Тут використовуй сеттер, щоб оновити стан
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  const resetFeedback = () =>
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  // console.log(totalFeedback);
  // console.log(feedback);
  useEffect(
    () =>
      window.localStorage.setItem("saved-feedback", JSON.stringify(feedback)),
    [feedback]
  );
  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
