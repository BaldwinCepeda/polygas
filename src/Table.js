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



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}


export default function BasicTable() {

    const [priceData, setPriceData] = useState([]);

    useEffect(() => {


        async function fetchData() {


            const request = await axios.get(URL);
            // console.log("My data")
            setPriceData(request.data.data);

            console.log(priceData);
            // rows.push(createData(priceData[0].id, priceData[0].results.oneDayTotalFees, 0));
            //rows.push(createData(priceData[1].id, priceData[1].results.oneDayTotalFees, 0));
            return request;

        }


        fetchData();
        console.log(priceData);

        //If [] is empty we are saying "run once when the table loads, and don't run again" will only run on page load.
    }, [URL])

    const rows = [
        createData(priceData[0].id, priceData[0].results.oneDayTotalFee, 6.0, 24, 4.0),
        createData(priceData[1].id, 237, 9.0, 37, 4.3),
        createData(priceData[2].id, 262, 16.0, 24, 6.0),
        createData(priceData[3].id, 305, 3.7, 67, 4.3),
        createData(priceData[4].id, 356, 16.0, 49, 3.9),
    ];




















    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Protocol Name</TableCell>
                        <TableCell align="right">One Day Fees</TableCell>
                        <TableCell align="right">Seven Day Fees</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
