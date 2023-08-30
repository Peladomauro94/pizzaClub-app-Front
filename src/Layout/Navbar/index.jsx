import React from "react";
import ScheduleIcon from '@mui/icons-material/Schedule';
import InfoIcon from '@mui/icons-material/Info';
import RoomIcon from '@mui/icons-material/Room';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import "./index.css";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    borderRadius: '20px',
    backgroundColor: '#ffe5ac',
    '&:hover': {
      backgroundColor: '#faeac7',
    },
    marginLeft: 0,
    width: '60%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));


function Navbar() {
   
      
  return (
    <nav className="navbar__container">
      <div className="navbar__items">
        <ul >
          <li><ScheduleIcon color="success" fontSize="small"/></li>
          <li><InfoIcon color="success" fontSize="small"/></li>
          <li><RoomIcon color="success" fontSize="small"/></li>
        </ul>
      </div>
      <div className="navbar__image-container">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="navbar__search-container">
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
      </div>
    </nav>
  );
}

export default Navbar;
