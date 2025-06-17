const quotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Doubt kills more dreams than failure ever will.",
  "Discipline is the bridge between goals and accomplishment.",
  "Success is not for the lazy.",
  "The harder you work, the luckier you get.",
  "Your limitation—it’s only your imagination.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Sometimes later becomes never. Do it now.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "Push yourself because no one else is going to do it for you.",
  "Failure is the condiment that gives success its flavor.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Believe you can and you're halfway there.",
  "Motivation is what gets you started. Habit is what keeps you going."
];

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerText = quotes[random];
}

// Twitter share button
document.getElementById('tweetBtn').addEventListener('click', () => {
  const quote = document.getElementById('quote').innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}%20%23Motivation`;
  window.open(twitterUrl, '_blank');
});
