import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';

export const TaskDescriptionField: FC =
  (): ReactElement => {
    return (
      <TextField
        id="description"
        label="Task Description"
        placeholder="Task Description"
        variant="outlined"
        size="small"
        name="description"
        multiline
        rows={4}
        fullWidth
      />
    );
  };
