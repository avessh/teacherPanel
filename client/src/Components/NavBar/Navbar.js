import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';

import { Input, TextField, Card } from '@mui/material'

import { Link , useParams} from 'react-router-dom'

import Modal from '@mui/material/Modal';

//importing mock data
import studentData from '../../data/mokStudentData.json'




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function Navbar() {
    // console.log('data', studentData);
    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);


    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    
  const { classname } = useParams()
  console.log('class at nav', classname);


    const [classOpen, setClassOpen] = React.useState(classname === undefined ? "select class" : classname);
    const [classBoxOpen, setClassBoxOpen] = React.useState(false)
    const [classFreq, setClassFreq] = React.useState('');

    const handleChange = (e) => {
        console.log('target', e.target.value);
        setClassOpen((e.target.value))
    }

    const handleClassFreqChange = (event) => {
        console.log('freq change', event.target.value);
        setClassFreq((event.target.value) || 'safda');
    };

    const handleClassChange = (e) => {
        console.log('class change', classOpen);
        setClassOpen(e.target.value)
        setClassBoxOpen(false)

    }



    const handleClickOpen = () => {
        setClassBoxOpen(true);
        console.log(classOpen);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setClassBoxOpen(false);
        }
    };

    //getting curret time and date

    var someDate = new Date();
    var numberOfDaysToAdd = 0;
    var date = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    var defaultValue = new Date(date).toISOString().split("T")[0];
    const currTime = new Date().toLocaleTimeString();


    return (
        <>

            {/* ** modal code start ** */}
            <Modal
                keepMounted
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        Create Class
                    </Typography>
                    <Box sx={{ marginTop: "10px" }}>

                        <Input sx={{ margin: "5px 0px", width: '80vw' }} id='fullWidth' placeholder='Title' />
                        <Box sx={{ display: 'flex', margin: "10px 0px" }}>
                            <Box sx={{ flexGrow: '1' }}>
                                <label style={{ marginTop: '10px' }}>From</label>
                                <br />
                                <Input sx={{ margin: "0px", '& input': { content: `"white"` } }} value={currTime} type="time" placeholder='Title' />
                            </Box>
                            <Box sx={{ flexGrow: '1' }}>
                                <label style={{ marginTop: '10px' }}>till</label>
                                <br />
                                <Input sx={{ margin: "0px", '& input': { content: `"white"` } }} type="time" placeholder='Title' />
                            </Box>
                        </Box>
                        <Box>
                            <FormControl variant="standard" sx={{ width: "80vw", margin: "10px 0px" }}>
                                <InputLabel >select</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={classFreq}
                                    onChange={handleClassFreqChange}
                                    label="Class"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"Today"}>Today</MenuItem>
                                    <MenuItem value={"Everyday"} >Everyday</MenuItem>
                                    <MenuItem value={"Costom"}>Costom</MenuItem>
                                </Select>
                            </FormControl>
                            <Button sx={{ margin: "10px 0px" }} variant='contained'>Create</Button>
                        </Box>




                    </Box>
                </Box>
            </Modal>

            {/* ** modal code ends ** */}
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar sx={{ backgroundColor: "#16151c" }} position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Attandance

                        </Typography>
                    </Toolbar>
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{ display: "flex", justifyContent: 'center', alignItems: "center", borderTop: "1px solid white", borderRight: "1px solid white", width: "50%", padding: "5px " }}>
                            <div>
                                <Button color={"inherit"} onClick={handleClickOpen}>{classOpen}</Button>

                                <Dialog disableEscapeKeyDown open={classBoxOpen} onClose={handleClose}>

                                    <DialogTitle>Select Class</DialogTitle>

                                    <FormControl variant="standard" sx={{ width: "80vw", padding: "20px 20px" }}>

                                        <InputLabel sx={{ width: "80vw", padding: "20px 20px" }} >select</InputLabel>

                                        <Select
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={classOpen}
                                            onChange={handleClassChange}
                                            label="Class"
                                        >

                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                           <MenuItem value={studentData[0].class} > <Link to={`/${studentData[0].class}`}>{studentData[0].class}</Link></MenuItem>
                                           <MenuItem value={studentData[1].class} > <Link to={`/${studentData[1].class}`}>{studentData[1].class}</Link></MenuItem>
                                            {/* <MenuItem value={studentData[1].class} >{studentData[0].class}</MenuItem>
                                            <MenuItem value={studentData[2].class} >{studentData[0].class}</MenuItem>
                                            <MenuItem value={studentData[3].class} >{studentData[0].class}</MenuItem>
                                            <MenuItem value={studentData[4].class} >{studentData[0].class}</MenuItem>
                                            <MenuItem value={studentData[5].class} >{studentData[0].class}</MenuItem>
                                            <MenuItem value={studentData[6].class} >{studentData[0].class}</MenuItem>
                                            <MenuItem value={studentData[7].class} >{studentData[0].class}</MenuItem>
                                            <MenuItem value={studentData[8].class} >{studentData[0].class}</MenuItem>
                                            <MenuItem value={studentData[9].class} >{studentData[0].class}</MenuItem> */}



                                        </Select>

                                    </FormControl>

                                </Dialog>
                            </div>
                        </Box>
                        <Box sx={{ color: "white", display: "flex", justifyContent: 'center', alignItems: 'center', width: "50%", borderTop: '1px solid white' }}>


                            <input defaultValue={defaultValue} type='date' sx={{ '& input': { color: 'white' }, width: "65%" }} />


                        </Box>
                    </Box>
                </AppBar>

                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >

                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Button onClick={handleModalOpen}> Create Class</Button>
                                </ListItemIcon>
                                <ListItemText />
                            </ListItemButton>
                        </ListItem>

                    </List>
                    <Divider />

                </Drawer>
                <Main open={open}>
                    <DrawerHeader />

                </Main>
            </Box>

            {/* code for pop  */}

            

        </>
    )
}

export default Navbar
