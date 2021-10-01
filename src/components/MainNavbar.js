import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box
} from '@material-ui/core';
import Logo from './Logo';

const NAVBAR_LINKS = [
  {
    name: 'we’re hiring',
    href: '#'
  }, {
    name: 'our product',
    href: '#'
  }, {
    name: 'about us',
    href: '#'
  }, {
    name: 'check position',
    href: '#'
  }, {
    name: 'sign in / sign up',
    href: '#'
  }
];

export function AccessibleTabs1() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
        {
          NAVBAR_LINKS.map((navItem) => (
            <Tab label={navItem.name} />
          ))
        }
      </Tabs>
    </Box>
  );
}

const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ height: 64, display: 'flex', justifyContent: 'space-between' }}>
      <RouterLink to="/">
        <Logo style={{ marginTop: '5px', marginLeft: '12px' }} />
      </RouterLink>

      <AccessibleTabs1 />
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
