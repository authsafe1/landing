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
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  onClick: (url: string) => void;
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
  onClick: (url: string) => void;
  onClose: () => void;
}

const NavMenu: FC<NavMenuProps> = ({
  open,
  anchorEl,
  body,
  onClick,
  onClose,
}) => {
  return (
    <Menu open={open} anchorEl={anchorEl} onClose={onClose}>
      {body.map(({ header, Icon, url }, index) => (
        <MenuItem
          key={`nav-menu-${index}`}
          href={url}
          onClick={() => {
            onClick(url);
            return false;
          }}
        >
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
  onClick,
  onClose,
}) => {
  return (
    <Menu open={open} anchorEl={anchorEl} onClose={onClose}>
      {body.map(({ header, subHeader, Icon, url }, index) => (
        <MenuItem
          key={`company-menu-${index}`}
          href={url}
          onClick={() => {
            onClick(url);
            return false;
          }}
        >
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
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const navMenuRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const handleNavMenuItemClick = (url: string) => {
    router.push(url);
    setNavMenuOpen(false);
  };

  const handleCompanyNavMenuItemClick = (url: string) => {
    router.push(url);
    setCompanyMenuOpen(false);
  };

  const handleCompanyMenuClose = () => {
    setCompanyMenuOpen(false);
  };

  const handleNavMenuClose = () => {
    setNavMenuOpen(false);
  };

  return (
    <Fragment>
      <CompanyMenu
        open={companyMenuOpen}
        anchorEl={companyRef.current}
        body={constants.headerData.desktop.dropdown}
        onClick={handleCompanyNavMenuItemClick}
        onClose={handleCompanyMenuClose}
      />
      <AppBar
        position="relative"
        color="transparent"
        elevation={0}
        role="banner"
      >
        <Toolbar
          sx={(theme) => {
            return {
              [theme.breakpoints.up('md')]: {
                display: 'none',
              },
            };
          }}
          component="nav"
          aria-label="Mobile Navigation"
        >
          <Box flex={1} />
          <Box ref={navMenuRef}>
            <IconButton
              onClick={() => setNavMenuOpen(true)}
              sx={{
                transition: 'transform 0.3s ease',
                transform: navMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
              }}
              aria-label="Menu Button"
              aria-expanded={navMenuOpen}
            >
              {navMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <NavMenu
              open={navMenuOpen}
              anchorEl={navMenuRef.current}
              body={constants.headerData.mobile}
              onClick={handleNavMenuItemClick}
              onClose={handleNavMenuClose}
            />
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
          component="nav"
          aria-label="Desktop Navigation"
        >
          <Box flex={1}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <IconButton LinkComponent={Link} href="/" aria-label="Home">
                <AuthSafeIcon />
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
                      aria-expanded={companyMenuOpen}
                      endIcon={
                        EndIcon ? (
                          <EndIcon
                            color={companyMenuOpen ? 'disabled' : 'inherit'}
                          />
                        ) : null
                      }
                      onClick={() => setCompanyMenuOpen(true)}
                      size="small"
                    >
                      {header}
                    </Button>
                  ),
              )}
            </Box>
          </Box>
          <Box component="section" aria-label="User Actions">
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
