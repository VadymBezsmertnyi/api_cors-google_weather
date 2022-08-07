import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  StylesProvider,
  jssPreset,
  createGenerateClassName,
} from '@mui/styles';
import { ThemeProvider } from '@mui/material/styles';
import { create } from 'jss';
import jssIncreaseSpecificity from 'jss-increase-specificity';

import { HeaderComponent } from 'components';
import { Cards, FullInfo } from 'pages';
import { createAppTheme } from 'theme/theme';

const App = () => {
  const theme = createAppTheme();
  const jss = create({
    plugins: [...jssPreset().plugins, jssIncreaseSpecificity()],
  });
  const generateClassName = createGenerateClassName({
    productionPrefix: 'fetss-',
    disableGlobal: false,
    seed: 'ss',
  });

  return (
    <StylesProvider jss={jss} generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeaderComponent />
                  <Cards />
                </>
              }
            />
            <Route path="/FullInfo" element={<FullInfo />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
