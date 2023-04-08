import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';

export const Task: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'red',
      }}
    >
      Tasks Will Come Over Here
    </Box>
  );
};
