import React from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function SettingComponent() {
    let id = 0;
    const createData = (name, calories, fat, carbs, protein) => {
        id += 1;
        return { id, name, calories, fat, carbs, protein };
    };
    const rows = [
        createData(
            "Frozen yoghurt sdafdfdssfdfsdsdsfdsfdsfsfdfsd sd fsdfsdfsdsfdsfd",
            159,
            6.0,
            24,
            4.0
        ),
        createData(
            "Ice cream sandwichdsfsdfsdf dfssdfsdafsad asffsd asfds df",
            237,
            9.0,
            37,
            4.3
        ),
        createData(
            "Eclairsdfas fdsdfsadfasfd fs dafsd fsdsfdafdsfds fsd sf dsfd asfd sfdasdfsfd",
            262,
            16.0,
            24,
            6.0
        ),
        createData(
            "Cupcakesad fasdffsdasfdfsdsfdfsdfsdfdfsdfsdfsdfsdfsdsfd",
            305,
            3.7,
            67,
            4.3
        ),
        createData(
            "Gingerbread af ffdsfds sfdfsa adfs afsdfsadfsdafdsfsadasfdfad s",
            356,
            16.0,
            49,
            3.9
        )
    ];
    return (
        <div>
            <h1 className="title">Material UI - Responsive Table</h1>
            <Paper className="container">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell numeric>Calories</TableCell>
                            <TableCell numeric>Fat (g)</TableCell>
                            <TableCell numeric>Carbs (g)</TableCell>
                            <TableCell numeric>Protein (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(({ id, name, calories, fat, carbs, protein }) => (
                            <TableRow key={id}>
                                <TableCell component="th" scope="row">
                                    {name}
                                </TableCell>
                                <TableCell numeric>{calories}</TableCell>
                                <TableCell numeric>{fat}</TableCell>
                                <TableCell numeric>{carbs}</TableCell>
                                <TableCell numeric>{protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}
