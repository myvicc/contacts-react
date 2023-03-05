import React, {useContext} from "react";
import {
    Table,
    TableBody,
    TableRow,
    TableCell,
    TableHead,
    TableContainer,
    Button,
    Stack,
    Container,
    Typography
} from "@mui/material";
import {DataUser} from "./index";

export function Contacts() {

    const {user, setUser} = useContext(DataUser);
    return (
        <Container>
            <Typography variant="h6" color="darkblue">Contacts
                <Stack spacing={3}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Lastname</TableCell>
                                    <TableCell>Phone number</TableCell>
                                    <TableCell><Button variant="outlined">Delete</Button></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                { user.map(({id, name, lastname, phone}) => (

                                    <TableRow key={id}>
                                        <TableCell>{name}</TableCell>
                                        <TableCell>{lastname}</TableCell>
                                        <TableCell>{phone}</TableCell>
                                        <TableCell><Button variant="outlined" onClick={() => {
                                            setUser((prevState) => {
                                                return prevState.filter((item) => item.id !== id);
                                            })
                                        }}>Delete</Button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Typography>
        </Container>
    )
}