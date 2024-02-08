import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Grid, Button,Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import logo from './clg-1.jpg';
import logo1 from './main-logo.png';


function App() {
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
            sx={{ color: 'black' }} // Change icon color to black
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
      <Container sx={{ paddingTop: '1px', paddingBottom: '1px' }}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <div className="shadow-lg rounded-4 p-3" style={{ marginTop: '30px', marginBottom: '30px' }}>
              <form style={{ marginTop: '20px', marginBottom: '20px' }}>
                <div className="mb-3 text-center">
                  <img src={logo} alt="Logo" style={{ maxHeight: 110, marginBottom: 10 }} />
                  <Typography variant="h4" sx={{ color: '#32348c' }}><b>EVENT PROPOSAL</b></Typography>
                </div>
                <div>
                  <FormControl  variant="filled" fullWidth>
                    <InputLabel id="subTypeLabel">Sub type</InputLabel>
                    <Select
                      labelId="subTypeLabel"
                      id="subType"
                      label="Sub type"
                    >
                      <MenuItem value="DDM">DDM</MenuItem>
                      <MenuItem value="DA">DA</MenuItem>
                      <MenuItem value="SDP">SDP</MenuItem>
                      <MenuItem value="CS">CS</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography variant="h5" color="#32348c" align="center" sx={{ marginTop: 2 }}>
                    <b>COLLABORATIVE ACTIVITY WITH MoU SIGNED INDUSTRIES AND INSTITUTIONS</b>
                  </Typography>
                  <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <InputLabel id="AcadenicYear">Academic Year</InputLabel>
                    <Select
                      labelId="academic year"
                      id="academic year"
                      label="academic year"
                    >
                      <MenuItem value="One">One</MenuItem>
                      <MenuItem value="Two">Two</MenuItem>
                      <MenuItem value="Three">Three</MenuItem>
                      <MenuItem value="Four">Four</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth sx={{ marginTop: 2 }} >
                    <InputLabel id="Semester">Semester</InputLabel>
                    <Select
                      labelId="Semester"
                      id="Semester"
                      label="Semester"
                    >
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                      <MenuItem value="4">4</MenuItem>
                      <MenuItem value="5">5</MenuItem>
                      <MenuItem value="6">6</MenuItem>
                      <MenuItem value="7">7</MenuItem>
                      <MenuItem value="8">8</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField label="Name of the Faculty coordinator" fullWidth sx={{ marginTop: 2 }} variant="outlined" />
                  <TextField label="Name of the activity" fullWidth sx={{ marginTop: 2 }} variant="outlined" />
                  <TextField label="Contact details of resource person" fullWidth sx={{ marginTop: 2 }} variant="outlined" />
                  <TextField label="Designation of resource person" fullWidth sx={{ marginTop: 2 }} variant="outlined" />
                  <TextField label="Organization details of resource person" fullWidth sx={{ marginTop: 2 }} variant="outlined" />
                  <TextField label="No of beneficiaries" fullWidth sx={{ marginTop: 2 }} variant="outlined" />
                  <Button
                    variant="contained"
                    component="label"
                    startIcon={<CloudUploadIcon />}
                    htmlFor="upload-file"
                    fullWidth
                    sx={{ marginTop: 2 }}
                  >
                    Upload File
                    <input
                      type="file"
                      id="upload-file"
                      style={{ display: 'none' }}
                    />
                  </Button>
                </div>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, marginTop: 5 }}>
                  <Button variant="contained" color="primary" sx={{ flex: 1 }}>Submit</Button>
                  <Button variant="outlined" color="error" sx={{ flex: 1 }}>Clear</Button>
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
export default App;