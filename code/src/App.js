import React, { useEffect, useState } from 'react';
import { ThoughtList } from './components/ThoughtList';
import { ThoughtForm } from './components/ThoughtForm';

export const App = () => {
  const [thoughtList, setToughtList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newThought, setNewThought] = useState('');

  // useEffect with empty array [] call your functions on application start.

  const fetchThought = () => {
    setLoading(true);
    fetch('https://project-happy-thoughts-api-t2v5z5lalq-lz.a.run.app/thoughts')
      .then((result) => result.json())
      .then((data) => setToughtList(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
  // will trigger first when app start, and every time the variable in the dependecy array changes
  useEffect(() => {
    fetchThought();
  }, []);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: newThought
      })
    }

    fetch('https://project-happy-thoughts-api-t2v5z5lalq-lz.a.run.app/thoughts', options)
      .then((result) => result.json())
      .then(() => fetchThought())
      .catch((error) => console.error(error))
      .finally(() => setNewThought(''));
  }

  const handleHeartButtonChange = (_id) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(`https://project-happy-thoughts-api-t2v5z5lalq-lz.a.run.app/thoughts/${_id}/hearts`, options)
      .then((result) => result.json())
      .then(() => fetchThought())
      .catch((error) => console.error(error));
  }

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value);
  }

  return (
    <div className="outerWrapper">
      <div className="innerWrapper">
        <ThoughtForm
          newThought={newThought}
          onNewThoughtChange={onNewThoughtChange}
          onFormSubmit={onFormSubmit} />
        <ThoughtList
          loading={loading}
          thoughtList={thoughtList}
          setThoughtList={setToughtList}
          handleHeartButtonChange={handleHeartButtonChange} />
      </div>
    </div>
  );
}

// <button onClick={handleCounterIncreaseButtonClick} type="button">Counter increase</button>
// <p>{counter}</p>