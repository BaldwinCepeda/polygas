import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from './axios.js';


const URL = "https://api.cryptostats.community/api/v1/fees/oneDayTotalFees/2022-10-04?metadata=false";
function createData(protocolName, one_DayFees, seven_DayFees) {
    return { protocolName, one_DayFees, seven_DayFees };
}


const rows = [
    createData('Error', -1, -1), //speak with some of the engineer of the protocol if you have trouble 
];

console.log("hello world I am here____________________________")



export default function BasicTable() {
    const [priceData, setPriceData] = useState([]);

    useEffect(() => {


        async function fetchData() {


            const request = await axios.get(URL);
            console.log("My data")
            setPriceData(request.data.data);

            console.log(priceData);
            rows.push(createData(priceData[0].id, priceData[0].results.oneDayTotalFees, -1));
            return request;

        }
        fetchData();



        //If [] is empty we are saying "run once when the table loads, and don't run again" will only run on page load.
    }, [])
    console.log("outside");
    console.log(priceData);





    return (


        <TableContainer component={Paper}>
            <Table sx={{
                minWidth: 650, flexDirection: 'column',
                height: '50vh', bgcolor: 'white',
            }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Protocol Name</TableCell>
                        <TableCell align="left">1 Day Fees</TableCell>
                        <TableCell align="left">7 Day Fees</TableCell>
                    </TableRow>
                </TableHead>


                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.protocolName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.protocolName}
                            </TableCell>
                            <TableCell align="left">{0.00}</TableCell>
                            <TableCell align="left">{0.00}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>


            </Table>
        </TableContainer >
    );
}
