// ** MUI Imports
import { Button, Typography } from '@mui/material'
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import Link from 'next/link'
// ** Icon Imports
import Icon from 'src/@core/components/icon'
// import Icon from '@iconify/react'; // Make sure to import the Icon component
// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'
// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { MenuItems } from 'src/utils/NavBar';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Theme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'

interface Props {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
const drawerWidth = 240;
const AppBarContent = (props: Props) => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props
  const [mobileOpen, setMobileOpen] = useState(false);
  const { window } = props;
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

      <List>
        {MenuItems.map((item: any, i: any) => (
          <ListItem key={i} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  const StyledCompanyName = styled(Link)(({ theme }) => ({
    fontWeight: 500,
    textDecoration: 'none',
    color: `${theme.palette.primary.main} !important`
  }))

  const LinkStyled = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: `${theme.palette.text.secondary} !important`,
    '&:hover': {
      color: `${theme.palette.primary.main} !important`
    }
  }))
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
            <Icon fontSize='1.5rem' icon='tabler:menu-2' />
          </IconButton>
        ) : null}
        {MenuItems.map((item: any, i: any) => (
          <Button key={item.href} color="inherit" >
            <LinkStyled href={`${item.href}`} sx={{ textDecoration: 'none', fontSize: '18' }}>
              {item.name}
            </LinkStyled>
          </Button>
        ))} 
        {/* <Box component={Link} href='/posts/' sx={{ textDecoration: 'none', fontSize: '18' }}>
          post
        </Box> */}
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        {/* <UserDropdown settings={settings} /> */}
        <ModeToggler settings={settings} saveSettings={saveSettings} />
      </Box>
    </Box>
  )
}

export default AppBarContent
