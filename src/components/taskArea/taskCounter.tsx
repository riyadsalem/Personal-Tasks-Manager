import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

export const TaskCounter: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          background: 'transparent',
          border: '5px solid',
          width: '96px',
          height: '96px',
          marginBottom: '16px',
          borderColor: 'red',
        }}
      >
        <Typography color="#ffffff" variant="h4">
          10
        </Typography>
      </Avatar>
      <Typography
        color="#ffffff"
        variant="h5"
        fontWeight="bold"
        fontSize="20px"
      >
        Todo
      </Typography>
    </Box>
  );
};
