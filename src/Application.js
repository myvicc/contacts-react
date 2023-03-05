import React from "react";
import {Contacts} from "./Contacts";
import FormDialog from "./CreateContact";
import {Box, Stack} from "@mui/material";


export  const Application = () => {
    return (
        <Box>
            <Stack spacing={2}>
                <Contacts />
                <FormDialog />
            </Stack>
        </Box>
    )
}