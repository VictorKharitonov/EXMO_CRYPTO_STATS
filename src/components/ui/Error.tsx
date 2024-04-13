import { FC } from 'react';
import { Alert, Typography } from '@mui/material';

interface ErrorProps {
  error: Error;
}

const Error: FC<ErrorProps> = ({ error }) => {
  return (
    <Alert color="error">
      <Typography variant="body1">{error.message}</Typography>
    </Alert>
  );
};

export default Error;
