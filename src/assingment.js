import React from 'react';
import { Container, Typography, TextField, Select, MenuItem, Button, FormControl, InputLabel, Box } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'; 
import logo from './clg-1.jpg';

function MenuForm() {
  return (
    <Box  sx={{ bgcolor: '#ffffff', py: 8, }} >
      <Container maxWidth="md" sx={{ borderRadius: '20px', bgcolor: 'transparent', p: 3, }}>
    
          <Box  sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3, }}>
            <img src={logo} alt="Logo" style={{ height: 100, width: 'auto' }} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" align="center" gutterBottom color="light">
              EVENT PROPOSAL
            </Typography>
          </Box>
          <Box  sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}> 
            <FormControl fullWidth  variant="standard">
              <InputLabel id="sub-type-label">Sub type</InputLabel>
              <Select labelId="sub-type-label" id="sub-type">
                <MenuItem value="DDM">DDM</MenuItem>
                <MenuItem value="DA">DA</MenuItem>
                <MenuItem value="SDP">SDP</MenuItem>
                <MenuItem value="CS">CS</MenuItem>
              </Select>
            </FormControl>
            <Typography variant="h6" color="light" align="center">
              COLLABORATIVE ACTIVITY WITH MoU SIGNED INDUSTRIES AND INSTITUTIONS
            </Typography>
            <TextField label="Academic Year" fullWidth />
            <TextField label="Semester" fullWidth />
            <TextField label="Name of the Faculty coordinator" fullWidth />
            <TextField label="Name of the activity" fullWidth />
            <TextField label="Contact details of resource person" fullWidth />
            <TextField label="Designation of resource person" fullWidth />
            <TextField label="Organization details of resource person" fullWidth />
            <TextField label="No of beneficiaries" fullWidth />
            <Button
              variant="contained"
              component="label"
              startIcon={<CloudUploadIcon />}
              htmlFor="upload-file"
            >
              Upload File
              <input
                type="file"
                id="upload-file"
                style={{ display: 'none' }}
              />
            </Button>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 5 }}>
            <Button variant="contained" color="primary">Submit</Button>
            <Button variant="outlined" color="error">Clear</Button>
          </Box>
        </Container>
    </Box>
  );
}

export default MenuForm;
