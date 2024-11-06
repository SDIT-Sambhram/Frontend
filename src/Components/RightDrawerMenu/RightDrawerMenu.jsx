import React, { memo, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import './RightDrawerMenu.css';

const menuItems = [
  { id: 'home', path: '/', label: 'Home' },
  { id: 'register', path: '/checkout', label: 'Register' },
  { id: 'events', path: '/events', label: 'Events' },
  { id: 'merch', path: '/merch', label: 'Merch' },
  { id: 'about', path: '/about', label: 'About' }
];

const RightDrawerMenu = memo(() => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  // Memoize handlers to prevent unnecessary re-renders
  const handleOpenDrawer = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const isMobile = useMediaQuery('(max-width:900px)');

  // Memoize drawer content to prevent unnecessary re-renders
  const drawerContent = useMemo(() => (
    <List component="nav">
      {menuItems.map(({ id, path, label }) => (
        <ListItem key={id} disablePadding>
          {path ? (
            <ListItemButton
              component={Link}
              to={path}
              onClick={handleCloseDrawer}
              className="drawer-link"
            >
              <ListItemText primary={label} />
            </ListItemButton>
          ) : (
            <ListItemButton onClick={handleCloseDrawer}>
              <ListItemText primary={label} />
            </ListItemButton>
          )}
        </ListItem>
      ))}
    </List>
  ), [handleCloseDrawer]);

  return (
    <div>
      {isMobile && (
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleOpenDrawer}
        >
          <MenuIcon sx={{ color: 'white' }} />
        </IconButton>
      )}

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleCloseDrawer}
        PaperProps={{
          elevation: 3,
          sx: {
            width: { xs: '250px', sm: '300px' },
            backdropFilter: 'blur(4px)', // This applies the blur effect
            backgroundColor: 'rgba(255, 255, 255, 0.8 )', // Adjust opacity for a frosted glass effect
            '& .MuiListItemButton-root': {
              py: 1.5,
              '&:hover': {
                backgroundColor: 'action.hover',
              },
            },
          },
        }}
      >
        {drawerContent}
      </Drawer>


    </div>
  );
});

RightDrawerMenu.displayName = 'RightDrawerMenu';

export default RightDrawerMenu;