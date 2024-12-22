'use client';

import constants from '@/config/constants';
import { ArrowDropDown } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SvgIconTypeMap,
  Toolbar,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Link from 'next/link';
import { FC, Fragment, useRef, useState } from 'react';
import AuthSafeIcon from '../icons/AuthSafeIcon';

interface CompanyMenuProps {
  open: boolean;
  anchorEl: HTMLElement;
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
  const companyRef = useRef<HTMLButtonElement>(null);

  const handleCompanyMenuClose = () => {
    setMoreMenuOpen(false);
  };

  return (
    <Fragment>
      <CompanyMenu
        open={moreMenuOpen}
        anchorEl={companyRef.current as HTMLElement}
        body={constants.headerData.companyDropdown}
        onClose={handleCompanyMenuClose}
      />
      <AppBar position="relative" color="transparent" elevation={0}>
        <Toolbar>
          <Box flex={1}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <AuthSafeIcon />
              <Button LinkComponent={Link} href="/docs" size="small">
                Docs
              </Button>
              <Button LinkComponent={Link} href="/pricing" size="small">
                Pricing
              </Button>
              <Button
                ref={companyRef}
                endIcon={
                  <ArrowDropDown
                    color={moreMenuOpen ? 'disabled' : 'inherit'}
                  />
                }
                onClick={() => setMoreMenuOpen(true)}
                size="small"
              >
                Company
              </Button>
            </Box>
          </Box>
          <Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                component="a"
                size="small"
                href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/auth/register`}
              >
                Register
              </Button>
              <Button
                component="a"
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
