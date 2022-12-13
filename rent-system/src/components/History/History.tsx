import * as React from 'react';
import styles from './history.module.scss';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name: string, period: string, price: number) {
    return { name, period, price };
}

const rows = [
    createData('City', '2022-10-23 10:40 - 2022-10-23 13:40', 30),
    createData('Mountain', '2022-10-24 10:40 - 2022-10-25 10:40', 50),
    createData('Freeride', '2022-11-30 17:00 - 2022-11-30 17:30', 5),
    createData('BMX', '2022-12-01 09:00 - 2022-12-01 13:40', 35),
    createData('City', '2022-10-23 10:40 - 2022-10-23 13:40', 20)
];

export const History = () => {
    return (
        <section className={styles.history}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dviracio pavadinimas</TableCell>
                            <TableCell align="right">Nuomos laikotarpis</TableCell>
                            <TableCell align="right">Kaina</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.period}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="right">{row.period}</TableCell>
                                <TableCell align="right">{row.price} €</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    );
}

export default History;
