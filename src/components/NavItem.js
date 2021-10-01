import {
  NavLink as RouterLink,
  matchPath,
  useLocation
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, ListItem } from '@material-ui/core';

const NavItem = ({
  href,
  icon: Icon,
  title,
  options,
  ...rest
}) => {
  const location = useLocation();

  const active = href ? !!matchPath({
    path: href,
    end: false
  }, location.pathname) : false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        py: 0
      }}
      {...rest}
    >
      <Button
        component={RouterLink}
        sx={{
          color: 'text.secondary',
          fontWeight: 'medium',
          justifyContent: 'flex-start',
          letterSpacing: 0,
          py: 1.25,
          textTransform: 'none',
          width: '100%',
          ...(active && {
            color: 'text.active'
          }),
          '& svg': {
            mr: 1
          }
        }}
        to={href}
      >
        {Icon && (
          <Icon size="20" />
        )}
        <span>
          {title}
        </span>
      </Button>
      {
        options && (options.length > 0) ? (
          <ListItem
            disableGutters
            sx={{
              display: 'flex',
              flexDirection: 'column',
              py: 0
            }}
          >
            {
              options.map((option) => {
                const itemActive = href ? !!matchPath({
                  path: option.href,
                  end: false
                }, location.pathname) : false;
                return (
                  <Button
                    component={RouterLink}
                    sx={{
                      color: 'text.secondary',
                      fontWeight: 'medium',
                      justifyContent: 'flex-start',
                      letterSpacing: 0,
                      py: 1.25,
                      textTransform: 'none',
                      width: '100%',
                      ...(itemActive && {
                        color: 'text.active'
                      }),
                      '& span': {
                        ml: 4
                      }
                    }}
                    to={option.href}
                  >
                    <span>
                      {option.title}
                    </span>
                  </Button>
                );
              })
            }
          </ListItem>
        ) : <></>
      }
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
  options: PropTypes.array
};

NavItem.defaultProps = {
  options: []
};

export default NavItem;
