import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Collapse, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo1 from './main-logo.png';


function Land() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [setAFSublistOpen, setSetAFSublistOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleListItemClick = (text) => {
    setSelectedItem(text);
    if (text === 'SetAF') {
      setSetAFSublistOpen(!setAFSublistOpen);
    } else {
      setSetAFSublistOpen(false);
    }
  };

  const setAFOptions = [
    'Journal Publications',
    'Conference Publications and Presentations',
    'Workshop and Seminar',
    'Tech Talks to be Delivered',
    'Multidisciplinary Lectures',
    'Faculty Guest Talk in Other Institutions',
    'NPTEL Certification',
    'Participation in TASTE',
    'Lecture Visit to Industries/Institution',
    'Seed Money Proposal for Research',
    'Awards at National/International Level',
    'Proposals Submission for Grants',
    'Books,Chapters Authorship',
    'Consultancy and Corporate Training Done for Revenue Generation',
    'Patents',
    'Collaborative Activities with MoU Signed Industries/Institutions',
    'Visits to the Library',
    'Students Motivation for Paper Presentation/Project Submission',
    'Other Contests/Professional Society Membership',
    'Students Field Work/Internship Guidance'
  ];

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, paddingLeft: 2, paddingRight: 2, paddingTop: 2, paddingBottom: 2 }}> 
            <img src={logo1} alt="Logo" width="500" height="75" className='col-md-6 col-12' />
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ color: 'black' }} 
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        <div style={{ width: 250 }}>
          <List>
            {['ECR', 'SetAF', 'SeSta', 'Log Out'].map((text, index) => (
              <React.Fragment key={text}>
                <ListItem
                  button
                  selected={selectedItem === text}
                  onClick={() => handleListItemClick(text)}
                >
                  <ListItemText primary={text} />
                </ListItem>
                {text === 'SetAF' && (
                  <Collapse in={setAFSublistOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {setAFOptions.map((optionText, optionIndex) => (
                        <ListItem button key={optionText} sx={{ pl: 4 }}>
                          <ListItemText primary={optionText} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Land;
