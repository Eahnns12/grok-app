import { useContext } from 'react';
import { ThemeContext } from '@/contexts/theme-context';

const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};

export { useTheme };
