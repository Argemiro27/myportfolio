import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePeristedState from './utils/usePersistedState';
import { DefaultTheme } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';   
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Content from './components/Content';
import Routes from './Routes';

const App: React.FC = () => {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Routes />
        
      </div>
    </ThemeProvider>
  );
};

export default App;
