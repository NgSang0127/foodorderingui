import React, { useEffect, useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardHeader,
    Chip,
    MenuItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AvatarGroup } from "@mui/lab";
import Menu from "@mui/material/Menu";
import { fetchRestaurantsOrder, updateOrdersStatus } from "../../State/Restaurant Order/Action"; // Correct import

const orderStatus = [
    { label: "Pending", value: "PENDING" },
    { label: "Completed", value: "COMPLETED" },
    { label: "Out For Delivery", value: "OUT_FOR_DELIVERY" },
    { label: "Delivered", value: "DELIVERED" },
];

const OrderTable = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const open = Boolean(anchorEl);

    const dispatch = useDispatch();
    const jwt = localStorage.getItem('jwt');
    const { restaurant, restaurantOrder } = useSelector(store => store);

    useEffect(() => {
        if (restaurant?.userRestaurant?.id) {
            dispatch(fetchRestaurantsOrder({ restaurantId: restaurant.userRestaurant.id, jwt }));
        }
    }, [dispatch, restaurant?.userRestaurant?.id, jwt]);

    const handleClick = (event, orderId) => {
        setAnchorEl(event.currentTarget);
        setSelectedOrderId(orderId);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setSelectedOrderId(null);
    };

    const handleUpdateOrder = (orderId, orderStatus) => {
        dispatch(updateOrdersStatus({ orderId, orderStatus, jwt }));
        handleClose();
    };

    return (
        <Box>
            <Card className="mt-2">
                <CardHeader
                    title={"All Orders"}
                    sx={{ pt: 2, alignItems: "center" }}
                />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell align="right">Image</TableCell>
                                <TableCell align="center">Customer</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Ingredients</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Update</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {restaurantOrder.orders.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.id}
                                    </TableCell>
                                    <TableCell align="center">
                                        <AvatarGroup>
                                            {item.items.map((orderItem) => (
                                                <Avatar key={orderItem.food?.id} src={orderItem.food?.images[0]} />
                                            ))}
                                        </AvatarGroup>
                                    </TableCell>
                                    <TableCell align="center">{item.customer?.fullName}</TableCell>
                                    <TableCell align="center">{item.totalPrice}</TableCell>
                                    <TableCell align="center">
                                        {item.items.map((orderItem) => (
                                            <p key={orderItem.food?.id}>{orderItem.food?.name}</p>
                                        ))}
                                    </TableCell>
                                    <TableCell align="center">
                                        {item.items.map((orderItem) => (
                                            <div key={orderItem.food?.id}>
                                                {orderItem.ingredients.map((ingredient) => (
                                                    <Chip key={ingredient} label={ingredient} className="mr-1" />
                                                ))}
                                            </div>
                                        ))}
                                    </TableCell>
                                    <TableCell align="center">{item.orderStatus}</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            id={`basic-button-${item.id}`}
                                            aria-controls={open && selectedOrderId === item.id ? 'basic-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open && selectedOrderId === item.id ? 'true' : undefined}
                                            onClick={(event) => handleClick(event, item.id)}
                                        >
                                            Update
                                        </Button>
                                        <Menu
                                            id="basic-menu"
                                            anchorEl={anchorEl}
                                            open={open && selectedOrderId === item.id}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': `basic-button-${item.id}`,
                                            }}
                                        >
                                            {orderStatus.map((status) => (
                                                <MenuItem key={status.value} onClick={() => handleUpdateOrder(item.id, status.value)}>
                                                    {status.label}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </Box>
    );
};

export default OrderTable;
