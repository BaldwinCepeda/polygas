import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios, { Axios } from 'axios'

function createData(protocolName, one_DayFees, seven_DayFees) {
    return { protocolName, one_DayFees, seven_DayFees };
}


const rows = [
    createData('Error', -1, -1), //speak with some of the engineer of the protocol if you have trouble 
];



export default function BasicTable() {

    const url = 'https://api.cryptostats.community/api/v1/fees/oneDayTotalFees/2022-10-04?metadata=false';


    const [priceData, setPriceData] = useState("");

    const getData = () => {

        axios.get(url).then((response) => {
            console.log("HERE__GET DATA FUNCTION");
            setPriceData(response.data);
            console.log(priceData.data);
            console.log("CREATING DATA");
            //rows.push(createData('Error', -1, -1, -1, -1));
            rows.push(createData(priceData.data[0].id, priceData.data[0].results.oneDayTotalFees, -1))
            //console.log(priceData.data[0].results.oneDayTotalFees);

        })
            .catch(err => console.log("loading"));

    }


    useEffect(() => {

        getData();

    }, [])


    //more useEffect priceData as depencency


    // useEffect(() => {
    //     getData();
    // }, [priceData])

    // useEffect(() => {
    //     return () => {

    //         axios.get(url)
    //             .then(response => {
    //                 setPriceData(response);

    //                 //debuggin ignore 

    //                 //Instanciate and initiazing with values 

    //                 //Get name of protcol
    //                 console.log("Name of Protocol");
    //                 //console.log(price.data[0].results.id);

    //                 // //get 1 day fee
    //                 // console.log(response.data.data[0].results.oneDayTotalFees);

    //                 // //get 7 day fee

    //                 // //adding them to the array 
    //                 // console.log("adding them to the array ");
    //                 // console.log("Num items before: " + rows.length);

    //                 // rows.push(response.data.data[0].id, -1, -1, -1, -1);
    //                 // console.log("Num items after: " + rows.length);

    //             })
    //     };
    // }, [url])



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
