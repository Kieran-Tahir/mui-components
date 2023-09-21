import React from 'react';
import {
  Container, Grid, Box, Button, IconButton, TextField,
  Checkbox, Radio, Switch, FormControl, AppBar, BottomNavigation,
  Drawer, Tabs, Tab, Paper, Card, Accordion, AccordionSummary,
  AccordionDetails, CircularProgress, LinearProgress, Snackbar,
  Alert, Avatar, Badge, Chip, List, ListItem, Table, TableBody,
  TableCell, TableHead, TableRow, Typography, Tooltip, Modal
} from '@mui/material';
import {AddIcon, DeleteIcon} from '@mui/icons-material/Add';

function App() {
  return (
    <Container>
      <Grid container spacing={3}>
        {/* Layout */}
        <Grid item xs={12}>
          <Box bgcolor="info.main" p={2}>Box Component</Box>
        </Grid>

        {/* Inputs */}
        <Grid item xs={12}><Button variant="contained" color="primary">Button</Button></Grid>
        <Grid item xs={12}><IconButton color="primary"><AddIcon /></IconButton></Grid>
        <Grid item xs={12}><TextField label="Standard" /></Grid>
        <Grid item xs={12}><Checkbox /></Grid>
        <Grid item xs={12}><Radio /></Grid>
        <Grid item xs={12}><Switch /></Grid>
        <Grid item xs={12}><FormControl>{/* FormControl Content */}</FormControl></Grid>

        {/* Navigation */}
        <Grid item xs={12}><AppBar><Typography variant="h6">AppBar</Typography></AppBar></Grid>
        <Grid item xs={12}><BottomNavigation><Button>Item 1</Button></BottomNavigation></Grid>
        <Grid item xs={12}><Drawer variant="permanent"><List><ListItem>Drawer Item</ListItem></List></Drawer></Grid>
        <Grid item xs={12}><Tabs value={0}><Tab label="Tab 1" /></Tabs></Grid>

        {/* Surfaces */}
        <Grid item xs={12}><Paper>Paper Component</Paper></Grid>
        <Grid item xs={12}><Card>Card Component</Card></Grid>
        <Grid item xs={12}><Accordion><AccordionSummary>Accordion</AccordionSummary><AccordionDetails>Details</AccordionDetails></Accordion></Grid>

        {/* Feedback */}
        <Grid item xs={12}><CircularProgress /></Grid>
        <Grid item xs={12}><LinearProgress /></Grid>
        <Grid item xs={12}><Snackbar open={false}><Alert severity="success">Success Message</Alert></Snackbar></Grid>

        {/* Data Display */}
        <Grid item xs={12}><Avatar>AV</Avatar></Grid>
        <Grid item xs={12}><Badge badgeContent={4}><AddIcon /></Badge></Grid>
        <Grid item xs={12}><Chip label="Chip" /></Grid>
        <Grid item xs={12}><List><ListItem>List Item</ListItem></List></Grid>
        <Grid item xs={12}><Table><TableHead><TableRow><TableCell>Head</TableCell></TableRow></TableHead><TableBody><TableRow><TableCell>Body</TableCell></TableRow></TableBody></Table></Grid>

        {/* Utils */}
        <Grid item xs={12}><Typography variant="h1">Typography</Typography></Grid>
        <Grid item xs={12}><Tooltip title="Tooltip"><Button>Tooltip</Button></Tooltip></Grid>
        <Grid item xs={12}><Modal open={false}><Box>Modal Content</Box></Modal></Grid>
      </Grid>
    </Container>
  );
}

export default App;
