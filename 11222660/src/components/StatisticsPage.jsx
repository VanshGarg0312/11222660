import React, { useEffect, useState } from 'react';
import { Paper, List, ListItem, ListItemText, Typography } from '@mui/material';

export default function StatisticsPage() {
  const [stats, setStats] = useState({});
  const [shortened, setShortened] = useState([]);

  useEffect(() => {
    const clickData = JSON.parse(localStorage.getItem('clickStats')) || {};
    const shortenedData = JSON.parse(localStorage.getItem('shortenedUrls')) || [];
    setStats(clickData);
    setShortened(shortenedData);
  }, []);

  return (
    <Paper sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h4" gutterBottom>
        URL Shortener Statistics
      </Typography>

      {shortened.map((item, index) => (
        <div key={index}>
          <Typography variant="h6">
            Short URL: http://localhost:3000/{item.shortcode}
          </Typography>
          <Typography variant="body2">
            Original URL: {item.url} | Expiry: {item.expiry || 'N/A'} mins
          </Typography>

          <List>
            {(stats[item.shortcode] || []).map((click, idx) => (
              <ListItem key={idx}>
                <ListItemText
                  primary={`Clicked at: ${click.time}`}
                  secondary={`Source: ${click.source} | Location: ${click.location}`}
                />
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </Paper>
  );
}
