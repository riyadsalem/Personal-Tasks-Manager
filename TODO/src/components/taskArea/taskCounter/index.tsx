import { Avatar, Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskCounter } from './interface/ITaskCounter';
import { Status } from '../../sidebar/createTaskForm/enums/Status';
import PropTypes from 'prop-types';
import { emitCorrectLabel } from './helpers/emitCorrectLabel';
import { emitCorrectBorderColor } from './helpers/emitCorrectBorderColor';

export const TaskCounter: FC<ITaskCounter> = (
  props,
): ReactElement => {
  const { count = 0, status = Status.completed } = props;
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
          borderColor: `${emitCorrectBorderColor(status)}`,
        }}
      >
        <Typography color="#ffffff" variant="h4">
          {count}
        </Typography>
      </Avatar>
      <Typography
        color="#ffffff"
        variant="h5"
        fontWeight="bold"
        fontSize="20px"
      >
        {emitCorrectLabel(status)}
      </Typography>
    </Box>
  );
};

TaskCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([
    Status.todo,
    Status.inProgress,
    Status.completed,
  ]),
};
