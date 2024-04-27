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
import Pokimane from './components/pokimane/Pokimane';
import CallofDuty from './components/callofduty/CallofDuty';
import NFL from './components/sports/nfl/Nfl';
import NBA from './components/sports/nba/Nba';
import Megan from './components/sports/megan/Megan';
import Atalanta from './components/sports/atlanta/Atalanta';
import Premier from './components/sports/premier/Premier';
import CsGlobal from './components/csgo/Csgo';
import Tesla from './components/business/tesla/Tesla';
import SpaceX from './components/business/spacex/SpaceX';
import Pfizer from './components/business/pfizer/Pfizer';
import Novavax from './components/business/novavax/Novavax';
import Moderna from './components/business/moderna/Moderna';




function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar />
        <div className='App'>
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
              <Route path='/pokimane' element={<Pokimane />} />
              <Route path='/callofduty' element={<CallofDuty />} />
              <Route path='/NFL' element= {<NFL />} />
              <Route path='/NBA' element={<NBA />} />
              <Route path='Megan' element={<Megan />} />
              <Route path='Atlanta' element={<Atalanta />} />
              <Route path='/Premier' element={<Premier />} />
              <Route path='/csgo' element={<CsGlobal />} />
              <Route path='/tesla' element={<Tesla />} />
              <Route path='/spacex' element={<SpaceX />} />
              <Route path='/pfizer'element={<Pfizer />} />
              <Route path='/novavax' element={<Novavax />} />
              <Route path='/moderna' element={<Moderna />} />
              
            </Routes> 
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
