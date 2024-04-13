import { Box } from '@mui/material';
import Main from './pages/Main.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './exmoApi/service';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box sx={{ padding: '0 40px 20px 40px' }}>
        <Main />
      </Box>
    </QueryClientProvider>
  );
}

export default App;
