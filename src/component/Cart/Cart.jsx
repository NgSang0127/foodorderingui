import React, {Fragment, useEffect} from 'react';
import {Box, Button, Card, Divider, Grid, Modal, TextField, Typography} from "@mui/material";
import CartItem from "./CartItem";
import AddressCart from "./AddressCart";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {findCart} from "../../State/Cart/Action";
import {createOrder} from "../../State/Order/Action";

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    p: 4,
};
const initialValues={
    streetAddress:"",
    state:"",
    pincode:"",
    city:""
};
const validationSchema=Yup.object().shape({
    streetAddress:Yup.string().required("Street address is required"),
    state:Yup.string().required("State is required"),
    pincode:Yup.number().required("Pin code is required"),
    city:Yup.string().required("City is required")
});
const Cart = () => {
    const createOrderUsingSelectedAddress = () => {

    }
    const handleOpenAddressModal = () => {
        setOpen(true);
    };
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const { cart, auth } = useSelector((store) => store);


    const handleClose = () => setOpen(false);
    const handleSubmit=(values)=>{
        const data ={
            jwt:localStorage.getItem("jwt"),
            order:{
                restaurantId:cart.cartItems[0].food?.restaurant.id,
                delivery:{
                    fullName: auth.user?.fullName,
                    streetAddress: values.streetAddress,
                    city: values.city,
                    state:values.state,
                    postalCode:values.pincode,
                    country:"Viet Nam"

                }
            }
        }
        dispatch(createOrder(data));
    };

    useEffect(() => {
        dispatch(findCart(localStorage.getItem("jwt")));
        console.log("cart",cart);
    }, []);

    return (
        <Fragment>
            <main className="lg:flex justify-between">
                <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
                    {
                        cart.cartItems.map((item) => (
                            <CartItem item={item} />
                        ))
                    }
                    <Divider/>
                    <div className="billDetails px-5 text-sm">
                        <p className="font-extralight py-5">Bill Details</p>
                        <div className="space-y-3">
                            <div className=" flex justify-between text-gray-300">
                                <p>Item Total</p>
                                <p>{cart.cart.total}$</p>
                            </div>
                            <div className=" flex justify-between text-gray-300">
                                <p>Delivery Fee</p>
                                <p>10.000 VND</p>
                            </div>
                            <div className=" flex justify-between text-gray-300">
                                <p>GST and Restaurant Charges</p>
                                <p>100.000 VND</p>
                            </div>
                            <Divider/>
                        </div>
                        <div className="flex justify-between text-gray-400">
                            <p>Total pay</p>
                            <p>{cart.cart.total}$</p>
                        </div>

                    </div>
                </section>
                <Divider orientation="vertical" flexItem/>
                <section className="lg:w-[70%] flex justify-between px-5 pb-10 lg:pb-0">
                    <div>
                        <h1 className="text-center font-semibold text-2xl py-10">
                            Choose Delivery Address
                        </h1>
                        <div className="flex gap-5 flex-wrap justify-center">
                            {
                                [1, 1, 1, 1, 1].map((item) => (
                                    <AddressCart handleSelectedAddress={createOrderUsingSelectedAddress} item={item}
                                                 showButton={true}/>
                                ))
                            }

                            <Card className="flex gap-5 w-64 p-5 ">
                                <AddLocationIcon/>
                                <div className="space-y-3 text-gray-500">
                                    <h1 className="font-semibold text-lg text-white">Add New Address</h1>
                                    <Button variant="outlined" fullWidth
                                            onClick={handleOpenAddressModal}>Add</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik initialValues={initialValues}
                            validationSchema={
                        validationSchema
                            }
                            onSubmit={handleSubmit}
                    >
                        <Form>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Field
                                    as={TextField}
                                    name="streetAddress"
                                    label="Street Address"
                                    fullWidth
                                    variant="outlined"
                                    // error={Boolean(<ErrorMessage name="streetAddress" />)}
                                    // helperText={
                                    // <ErrorMessage name="streetAddress"}>
                                    //     {(msg)=><span className="text-red-600">{msg}</span>}
                                    // </ErrorMessage>
                                    // }
                                >

                                </Field>
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    as={TextField}
                                    name="state"
                                    label="State"
                                    fullWidth
                                    variant="outlined"
                                    // error={Boolean(<ErrorMessage name="state" />)}
                                    // helperText={
                                    // <ErrorMessage name="state"}>
                                    //     {(msg)=><span className="text-red-600">{msg}</span>}
                                    // </ErrorMessage>
                                    // }
                                >

                                </Field>
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    as={TextField}
                                    name="pincode"
                                    label="Pin Code"
                                    fullWidth
                                    variant="outlined"
                                    // error={Boolean(<ErrorMessage name="pincode" />)}
                                    // helperText={
                                    // <ErrorMessage name="pincode"}>
                                    //     {(msg)=><span className="text-red-600">{msg}</span>}
                                    // </ErrorMessage>
                                    // }
                                >

                                </Field>
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    as={TextField}
                                    name="city"
                                    label="City"
                                    fullWidth
                                    variant="outlined"
                                    // error={Boolean(<ErrorMessage name="city" />)}
                                    // helperText={
                                    // <ErrorMessage name="city"}>
                                    //     {(msg)=><span className="text-red-600">{msg}</span>}
                                    // </ErrorMessage>
                                    // }
                                >

                                </Field>
                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" type="submit" color="primary">Delivery Here</Button>
                            </Grid>
                        </Grid>
                        </Form>
                    </Formik>
                </Box>
            </Modal>
        </Fragment>
    );
};

export default Cart;
