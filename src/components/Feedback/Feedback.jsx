export default function Feedback({ feedback, totalFeedback }) {
  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Pozitive: {Math.round((feedback.good / totalFeedback) * 100)}%</p>
    </div>
  );
}
