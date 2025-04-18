// anecdotes/src/App.jsx
import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));  // Initialize votes array with zeros

  // Function to select a random anecdote
  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const vote = () => {
    const newVotes = [...votes]; // Make a copy of the votes array
    newVotes[selected] += 1;     // Increment the vote count for the current anecdote
    setVotes(newVotes);         // Update the state with the new votes array
  };

  // Find the anecdote with the highest votes
  const maxVote = Math.max(...votes);
  const maxVoteIndex = votes.indexOf(maxVote);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <button onClick={vote}>Vote</button>
      <button onClick={getRandomAnecdote}>Show me another anecdote!</button>
      <div>
        <h2>The anecdote with the highest votes</h2>
        <p>{anecdotes[maxVoteIndex]}</p>
        <p>Votes: {maxVote}</p>
      </div>
    </div>
  );
};

export default App;