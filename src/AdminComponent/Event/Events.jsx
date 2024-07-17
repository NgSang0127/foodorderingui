import React, {useState} from 'react';
import {Box, Button, Grid, Modal, TextField} from "@mui/material";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {useDispatch, useSelector} from "react-redux";
import {createEventAction} from "../../State/Restaurant/Action";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const initialValues = {
    image: "",
    location: "",
    name: "",
    startedAt: null,
    endAt: null,
}

const Events = () => {
    const [open, setOpen] = useState(false);
    const [formValues, setFormValues] = useState(initialValues);
    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const {restaurant} = useSelector(store => store);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createEventAction({reqData: formValues, jwt, restaurantId: restaurant.userRestaurant.id}))
        console.log("submit", formValues);
        setFormValues(initialValues);
    };

    const handleFormChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value});
    };

    const handleDateChange = (date, dateType) => {
        const formattedDate = dayjs(date).format("DD/MM/YYYY hh:mm A");
        setFormValues({...formValues, [dateType]: formattedDate});
    };

    return (
        <div>
            <div className="p-5">
                <Button onClick={handleOpen} variant="contained">
                    Create New Event
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        name="image"
                                        label="Image URL"
                                        variant="outlined"
                                        fullWidth
                                        value={formValues.image}
                                        onChange={handleFormChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="location"
                                        label="Location"
                                        variant="outlined"
                                        fullWidth
                                        value={formValues.location}
                                        onChange={handleFormChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="name"
                                        label="Event Name"
                                        variant="outlined"
                                        fullWidth
                                        value={formValues.name}
                                        onChange={handleFormChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                            renderInput={(props) => <TextField {...props} />}
                                            label="Start Date and Time"
                                            value={formValues.startedAt}
                                            onChange={(newValue) => handleDateChange(newValue, "startedAt")}
                                            inputFormat="DD/MM/YYYY hh:mm A"
                                            className="w-full"
                                            sx={{width: "100%"}}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateTimePicker
                                            renderInput={(props) => <TextField {...props} />}
                                            label="End Date and Time"
                                            value={formValues.endAt}
                                            onChange={(newValue) => handleDateChange(newValue, "endAt")}
                                            inputFormat="DD/MM/YYYY hh:mm A"
                                            className="w-full"
                                            sx={{width: "100%"}}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" fullWidth>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default Events;
