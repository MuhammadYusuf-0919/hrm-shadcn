import '@/styles/index.css';
import { store } from '@/redux';
import AppRoutes from '@/routes';
import { Provider } from 'react-redux';
import { Toaster } from '@/components/toaster';
import { ThemeProvider } from '@/hooks/useMode';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppRoutes />
        <Toaster position="top-center" />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
