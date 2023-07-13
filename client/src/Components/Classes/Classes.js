import React from 'react'
import { Box, Button, Card, CardContent, Typography, Stack, Snackbar, Table, TableBody, TableContainer, TableHead, TableRow, Paper, Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import classData from '../../data/mokClassData.json'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const getMonthWeekday = (monthIndex, weekdayIndex, dayRank) => {
    // Helper to find for example the 3rd monday in Jun
    const today = dayjs();
    const firstDayOfMonth = today.month(monthIndex).startOf('month');
    const weekDay = firstDayOfMonth.day(); // 0 (Sunday) to 6 (Saturday)

    const deltaToFirstValidWeekDayInMonth =
        (weekDay > weekdayIndex ? 7 : 0) + weekdayIndex - weekDay;
    return firstDayOfMonth.add(
        (dayRank - 1) * 7 + deltaToFirstValidWeekDayInMonth,
        'day',
    );
};

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



function Calendar() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(panel);
    };

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleCalendar = (e) => {
        console.log('from', e);
    }

    const panel = 'panel'
    return (
        <Box sx={{ margin: "0px 5px", padding: "15px 5px", backgroundColor: "whitesmoke" }}>
            <Box  >
                <h4>Upcoming Classes</h4>
            </Box>
            <hr />
            {/* 
            <Box sx={{ margin: "10px 0px", padding: "10px  0" }}>
                <Typography sx={{color:'grey'}}>Create class from here</Typography>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert onClose={() => { }}>This is a success alert — check it out!</Alert>

                </Stack>
            </Box> */}

            <Box>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 100 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Class</StyledTableCell>
                                <StyledTableCell align="right">Time</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <StyledTableRow >
                                <StyledTableCell component="th" scope="row">
                                    ECE
                                </StyledTableCell>
                                <StyledTableCell align="right">9:00am - 11:00am</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow >
                                <StyledTableCell component="th" scope="row">
                                    CSE
                                </StyledTableCell>
                                <StyledTableCell align="right">9:00am - 11:00am</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow >
                                <StyledTableCell component="th" scope="row">
                                    IT
                                </StyledTableCell>
                                <StyledTableCell align="right">9:00am - 11:00am</StyledTableCell>
                            </StyledTableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>


            <Box className="mt-3" sx={{}}>
                <Card className='d-flex  p-3 ' sx={{justifyContent:'space-between'}}>
                    <Box>
                        Class : Ece
                    </Box>
                    <Box>
                        9:00 am - 11:00 am
                    </Box>
                </Card>
            </Box>

            <Box sx={{ margin: "10px 5px" }}>
                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Button variant="outlined" onClick={handleClick}>
                        Open success snackbar
                    </Button>
                    <Snackbar sx={{ margin: "0px" }} open={open} autoHideDuration={5000} onClose={handleClose}>
                        <Alert onClose={handleClose} sx={{ width: 500, height: 80, textAlign: "center" }}>
                            This is a success message!
                        </Alert>
                    </Snackbar>
                </Stack>
            </Box>


        </Box>
    )
}

export default Calendar
