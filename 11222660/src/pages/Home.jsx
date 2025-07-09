import React, { useState } from 'react';
import ShortenerForm from '../components/ShortenerForm';
import ShortenedList from '../components/ShortenedList';

export default function Home() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => setRefresh(!refresh);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>React URL Shortener</h1>
      <ShortenerForm onRefresh={triggerRefresh} />
      <ShortenedList refresh={refresh} />
    </div>
  );
}