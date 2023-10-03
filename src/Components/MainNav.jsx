import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import {  Link} from 'react-router-dom';
// import {history}  from 'react-router-dom';

const useStyles = {

  width: "100%",
  position: "fixed",
  bottom: "0px",
  display: "flex",
  justifyContent: "space-around",
  fonstSize: "px"
}

export default function LabelBottomNavigation() {

  const [value, setValue] = React.useState('recents');
  


  return (
    <BottomNavigation className='bg-dark ' style={useStyles} value={value} onChange={(event,newValue)=>{setValue(newValue)}}>
      <Link to="/"><BottomNavigationAction className='text-white' label="Trending" icon={<WhatshotIcon />} /></Link>
      <Link to="/movies"><BottomNavigationAction className='text-white' label="Movies" value="favorites" icon={<MovieCreationIcon />} /></Link>
      <Link to="/series"><BottomNavigationAction className='text-white' label="Tv Series" value="nearby" icon={<TvIcon />} /></Link>
      <Link to="search"><BottomNavigationAction className='text-white' label="Search" v alue="folder" icon={<ScreenSearchDesktopIcon />} /></Link>
    </BottomNavigation>
  );
}
