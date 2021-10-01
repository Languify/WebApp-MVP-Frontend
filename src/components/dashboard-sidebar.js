import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  Home as HomeIcon,
  DataUsage as DataUsageIcon,
  Book as BookIcon,
  ExitToApp as SignOutIcon,
  Feedback as FeedbackIcon
} from '@material-ui/icons';
import NavItem from './NavItem';
import Logo from './Logo';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  plan: 'Free User',
  name: 'Shivam Sahu'
};

const items = [
  {
    href: '/dashboard/home',
    icon: HomeIcon,
    title: 'Home'
  },
  {
    href: '/dashboard/speaking',
    icon: DataUsageIcon,
    title: 'Statistics',
    options: [
      {
        href: '/dashboard/speaking',
        title: 'Speaking'
      },
      {
        href: '/dashboard/writing',
        title: 'Writing'
      },
      {
        href: '/dashboard/meeting',
        title: 'Meetings'
      }
    ]
  },
  // {
  //   href: '/login',
  //   icon: BookIcon,
  //   title: 'Learn',
  //   options: [
  //     {
  //       href: '/dashboard/settings',
  //       title: 'Games'
  //     }
  //   ]
  // }
];

const footerOptions = [
  {
    href: '/register',
    icon: SignOutIcon,
    title: 'Sign out'
  },
  {
    href: '/register',
    icon: FeedbackIcon,
    title: 'Feedback'
  }
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'left',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </Box>
      <Box
        sx={{
          alignItems: 'left',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/dashboard/account"
        />
        <Typography
          color="textPrimary"
          variant="h3"
          sx={{ mt: 2 }}
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.plan}
        </Typography>
      </Box>
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
              options={item.options}
            />
          ))}
        </List>
        <Box
          sx={{
            marginTop: '42%',
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          <List>
            {
              footerOptions.map((item, inx) => (
                <>
                  <NavItem
                    href={item.href}
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    options={item.options}
                  />
                  {inx === 0 && <Divider />}
                </>
              ))
            }
          </List>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default DashboardSidebar;
