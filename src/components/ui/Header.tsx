'use client';

import constants from '@/config/constants';
import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SvgIconTypeMap,
  Toolbar,
  useTheme,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Link from 'next/link';
import { FC, Fragment, useRef, useState } from 'react';
import AuthSafeIcon from '../icons/AuthSafeIcon';

interface CompanyMenuProps {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  body: {
    header: string;
    subHeader: string;
    Icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
      muiName: string;
    };
    url: string;
  }[];
  onClose: () => void;
}

interface NavMenuProps {
  open: boolean;
  anchorEl: HTMLDivElement | null;
  body: {
    header: string;
    Icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>> & {
      muiName: string;
    };
    url: string;
  }[];
  onClose: () => void;
}

const NavMenu: FC<NavMenuProps> = ({ open, anchorEl, body, onClose }) => {
  return (
    <Menu open={open} anchorEl={anchorEl} onClose={onClose}>
      {body.map(({ header, Icon, url }, index) => (
        <MenuItem component={Link} href={url} key={`nav-menu-${index}`}>
          <ListItemIcon>
            <Icon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary={header}
            slotProps={{ primary: { fontSize: 'small' } }}
          />
        </MenuItem>
      ))}
      <ListItem>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Button
            size="small"
            href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/auth/register`}
          >
            Register
          </Button>
          <Button
            variant="contained"
            size="small"
            href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/auth/login`}
          >
            Login
          </Button>
        </Box>
      </ListItem>
    </Menu>
  );
};

const CompanyMenu: FC<CompanyMenuProps> = ({
  open,
  anchorEl,
  body,
  onClose,
}) => {
  return (
    <Menu open={open} anchorEl={anchorEl} onClose={onClose}>
      {body.map(({ header, subHeader, Icon, url }, index) => (
        <MenuItem key={`menu-${index}`} component={Link} href={url}>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={header} secondary={subHeader} />
        </MenuItem>
      ))}
    </Menu>
  );
};

const Header: FC = () => {
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const navMenuRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLButtonElement>(null);

  const theme = useTheme();

  const handleCompanyMenuClose = () => {
    setMoreMenuOpen(false);
  };

  const handleNavMenuClose = () => {
    setNavMenuOpen(false);
  };

  return (
    <Fragment>
      <CompanyMenu
        open={moreMenuOpen}
        anchorEl={companyRef.current}
        body={constants.headerData.desktop.dropdown}
        onClose={handleCompanyMenuClose}
      />
      <NavMenu
        open={navMenuOpen}
        anchorEl={navMenuRef.current}
        body={constants.headerData.mobile}
        onClose={handleNavMenuClose}
      />
      <AppBar position="relative" color="transparent" elevation={0}>
        <Toolbar
          sx={(theme) => {
            return {
              [theme.breakpoints.up('md')]: {
                display: 'none',
              },
            };
          }}
        >
          <Box flex={1} />
          <Box ref={navMenuRef}>
            <IconButton
              onClick={() => setNavMenuOpen(true)}
              sx={{
                transition: 'transform 0.3s ease',
                transform: navMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
              }}
            >
              {navMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>

        <Toolbar
          sx={(theme) => {
            return {
              [theme.breakpoints.down('md')]: {
                display: 'none',
              },
            };
          }}
        >
          <Box flex={1}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <IconButton LinkComponent={Link} href="/">
                <AuthSafeIcon theme={theme.palette.mode} />
              </IconButton>
              {constants.headerData.desktop.static.map(
                ({ header, url, hasDropdown, EndIcon }, index) =>
                  !hasDropdown ? (
                    <Button
                      LinkComponent={Link}
                      href={url as string}
                      size="small"
                      key={`header-button-${header}-${index}`}
                    >
                      {header}
                    </Button>
                  ) : (
                    <Button
                      key={`header-button-${header}-${index}`}
                      ref={companyRef}
                      endIcon={
                        EndIcon ? (
                          <EndIcon
                            color={moreMenuOpen ? 'disabled' : 'inherit'}
                          />
                        ) : null
                      }
                      onClick={() => setMoreMenuOpen(true)}
                      size="small"
                    >
                      {header}
                    </Button>
                  ),
              )}
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                size="small"
                href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/auth/register`}
              >
                Register
              </Button>
              <Button
                variant="contained"
                size="small"
                href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/auth/login`}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
