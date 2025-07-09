import React, { useEffect, useState } from 'react';
import { Paper, List, ListItem, ListItemText } from '@mui/material';

export default function ShortenedList({ refresh }) {
  const [shortened, setShortened] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('shortenedUrls')) || [];
    setShortened(saved);
  }, [refresh]);

  return (
    <Paper sx={{ padding: 2, marginTop: 2 }}>
      <h3>Shortened URLs</h3>
      <List>
        {shortened.length > 0 ? (
          shortened.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`http://localhost:3000/${item.shortcode}`}
                secondary={`Original: ${item.url} | Expiry: ${item.expiry || 'N/A'} mins`}
              />
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No shortened URLs yet." />
          </ListItem>
        )}
      </List>
    </Paper>
  );
}
