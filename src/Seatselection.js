import React, { useState } from 'react';
import { Grid, Button, Typography } from '@mui/material';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      // If seat is already selected, remove it
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      // If seat is not selected, add it
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const renderSeats = () => {
    const rows = 5; // Number of rows
    const cols = 8; // Number of columns

    const seatArr = Array.from({ length: rows }, (_, row) =>
      Array.from({ length: cols }, (_, col) => row * cols + col + 1)
    );

    return seatArr.map((row, rowIndex) => (
      <Grid container key={rowIndex} spacing={1}>
        {row.map((seatNumber) => (
          <Grid item key={seatNumber}>
            <Button
              variant={selectedSeats.includes(seatNumber) ? 'contained' : 'outlined'}
              color={selectedSeats.includes(seatNumber) ? 'primary' : 'default'}
              onClick={() => handleSeatClick(seatNumber)}
            >
              {seatNumber}
            </Button>
          </Grid>
        ))}
      </Grid>
    ));
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Select Your Seats
      </Typography>
      {renderSeats()}
      <Typography variant="subtitle1">
        Selected Seats: {selectedSeats.join(', ')}
      </Typography>
    </div>
  );
};

export default SeatSelection;
