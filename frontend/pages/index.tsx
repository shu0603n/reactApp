import { useState, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((res) => res.text())
      .then((data) => setMessage(data));
  }, []);

  const test = async () => {
    const res = await fetch('http://localhost:5000/test');
    const data = await res.json();
    setMessage(data);

  };
  return (
    <div>
      <h1>Next.js + Flask</h1>
      <p>{message}</p>
      <button onClick={test}>test</button>
    </div>
  );
}