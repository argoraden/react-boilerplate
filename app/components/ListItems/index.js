/**
 *
 * ListItems
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InfoIcon from '@material-ui/icons/Info';
import SvgIcon from '@material-ui/core/SvgIcon';

function DiamondIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M16,9H19L14,16M10,9H14L12,17M5,9H8L10,16M15,4H17L19,7H16M11,4H13L14,7H10M7,4H9L8,7H5M6,2L2,8L12,22L22,8L18,2H6Z" />
    </SvgIcon>
  );
}

function UsbIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        style={{ transform: 'rotate(90deg)', transformOrigin: '50% 50%' }}
        d="M15,7V11H16V13H13V5H15L12,1L9,5H11V13H8V10.93C8.7,10.56 9.2,9.85 9.2,9C9.2,7.78 8.21,6.8 7,6.8C5.78,6.8 4.8,7.78 4.8,9C4.8,9.85 5.3,10.56 6,10.93V13A2,2 0 0,0 8,15H11V18.05C10.29,18.41 9.8,19.15 9.8,20A2.2,2.2 0 0,0 12,22.2A2.2,2.2 0 0,0 14.2,20C14.2,19.15 13.71,18.41 13,18.05V15H16A2,2 0 0,0 18,13V11H19V7H15Z"
      />
    </SvgIcon>
  );
}

function ReportIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M22,21H2V3H4V15.54L9.5,6L16,9.78L20.24,2.45L21.97,3.45L22,21Z" />
    </SvgIcon>
  );
}

function AnalyticsIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z" />
    </SvgIcon>
  );
}

function AnnouncementsIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M15,15.6L13,14H4V10H13L15,8.4V15.6M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z" />
    </SvgIcon>
  );
}

export const mainListItems = (
  <div>
    <ListItem button selected>
      <ListItemIcon>
        <Typography
          style={{ textTransform: 'uppercase' }}
          variant="body1"
          component="h3"
        >
          Home
        </Typography>
      </ListItemIcon>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader>
      <Typography
        style={{ textTransform: 'uppercase' }}
        variant="body1"
        component="h3"
      >
        Learning
      </Typography>
    </ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <DiamondIcon />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <Typography type="body2" style={{ fontSize: '0.87rem' }}>
            Courses
          </Typography>
        }
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <UsbIcon />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <Typography type="body2" style={{ fontSize: '0.87rem' }}>
            Learing plans
          </Typography>
        }
      />
    </ListItem>
  </div>
);

export const tertiaryListItems = (
  <div>
    <ListSubheader>
      <Typography
        style={{ textTransform: 'uppercase' }}
        variant="body1"
        component="h3"
      >
        Manage
      </Typography>
    </ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <Typography type="body2" style={{ fontSize: '0.87rem' }}>
            Users
          </Typography>
        }
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Brightness5Icon />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <Typography type="body2" style={{ fontSize: '0.87rem' }}>
            Skills
          </Typography>
        }
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <Typography type="body2" style={{ fontSize: '0.87rem' }}>
            Reports
          </Typography>
        }
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AnalyticsIcon />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <Typography type="body2" style={{ fontSize: '0.87rem' }}>
            Analytics
          </Typography>
        }
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AnnouncementsIcon />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <Typography type="body2" style={{ fontSize: '0.87rem' }}>
            Announcements
          </Typography>
        }
      />
    </ListItem>
  </div>
);

export const quaternaryListItems = (
  <div>
    <ListSubheader>
      <Typography
        style={{ textTransform: 'uppercase' }}
        variant="body1"
        component="h3"
      >
        Configure
      </Typography>
    </ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <StarHalfIcon />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <Typography type="body2" style={{ fontSize: '0.87rem' }}>
            Points
          </Typography>
        }
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Brightness5Icon />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <Typography type="body2" style={{ fontSize: '0.87rem' }}>
            Reward
          </Typography>
        }
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MailOutlineIcon />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <Typography type="body2" style={{ fontSize: '0.87rem' }}>
            Email templates
          </Typography>
        }
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <Typography type="body2" style={{ fontSize: '0.87rem' }}>
            Company info
          </Typography>
        }
      />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PersonIcon />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={
          <Typography type="body2" style={{ fontSize: '0.87rem' }}>
            Billing
          </Typography>
        }
      />
    </ListItem>
  </div>
);
