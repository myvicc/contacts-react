import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useContext, useState} from "react";
import {DataUser} from "./index";

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const {setUser} = useContext(DataUser);
    const [valueName, setValueName ] = useState("");
    const [valueLastName, setValueLastName ] = useState("");
    const [valuePhone, setValuePhone ] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const CreateContact = () => {
        
        setUser((prevState) => {
            return [
                ...prevState,
                {
                    id: crypto.randomUUID(),
                    name: valueName,
                    lastname: valueLastName,
                    phone: valuePhone,
                }
            ]
        })
        setValueName("");
        setValuePhone("");
        setValueLastName("");
        setOpen(false);
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create new contact
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Creating new contact</DialogTitle>
                <DialogContent onSubmit={(event) => {
                    event.preventDefault();
                }}>
                    <DialogContentText>
                        Please, enter information about new contact
                    </DialogContentText>
                    <TextField
                        value = {valueName}
                        name = "name"
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={({target:{value}}) => {
                            setValueName(value);
                        }}
                    />
                    <TextField
                        name = "lastname"
                        value = {valueLastName}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Lastname"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={({target:{value}}) => {
                            setValueLastName(value);
                        }}
                    />
                    <TextField
                        name = "phone"
                        value = {valuePhone}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Phone"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={({target:{value}}) => {
                            setValuePhone(value);
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={CreateContact}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}