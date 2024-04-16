import './App.css';
import SideBar from './global/SideBar';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import Popular from './scenes/popular';
import Home from './scenes/home';
import Topbar from './global/TopBar';
import Valheim from './components/valheim/Valheim';
import Genshin from './components/genshin/Genshin';
import MineCraft from './components/minecraft/MineCraft';


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='App'>
          <div className='topbar'>
            <Topbar />
          </div>
          <main className='content'>
          <div className='sidebar'>
            <SideBar />
          </div>
         
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/popular' element={<Popular />} />
              <Route path='/valheim' element={<Valheim />} />
              <Route path='/genshin' element={<Genshin />} />
              <Route path="/minecraft" element={<MineCraft />} />
              {/* <Route path='/' element={<Gaming />} />
            <Route path='/' element={<Sports />} />
            <Route path='/' element={<Business />} />
            <Route path='/' element={<Crypto />} />
            <Route path='/' element={<Television />} />
            <Route path='/' element={<Celebrity />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
