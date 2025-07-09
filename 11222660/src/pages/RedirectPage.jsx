import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function RedirectPage() {
  const { shortcode } = useParams();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('shortenedUrls')) || [];
    const match = saved.find((item) => item.shortcode === shortcode);

    if (match) {
      const stats = JSON.parse(localStorage.getItem('clickStats')) || {};
      if (!stats[shortcode]) stats[shortcode] = [];
      stats[shortcode].push({
        time: new Date().toLocaleString(),
        source: document.referrer || 'Direct',
        location: 'Unknown',
      });
      localStorage.setItem('clickStats', JSON.stringify(stats));

      window.location.href = match.url;
    } else {
      alert('Short URL not found');
    }
  }, [shortcode]);

  return <div>Redirecting...</div>;
}