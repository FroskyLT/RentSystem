import { useState, useEffect } from 'react';
import styles from './dashboard.module.scss';

import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Card from './Card';
import { AddBike } from '../AddBike/AddBike';
import { IBike } from '../../model/interfaces';

interface IDashboardProps {
    loggedIn: boolean;
    isAdmin: boolean;
}

const bikeList: IBike[] = [{
    bikeId: 1,
    name: "Mountain",
    status: "Laisvas",
    type: "Kalnu",
    price: 15
}, {
    bikeId: 2,
    name: "City",
    status: "Laisvas",
    type: "Miesto",
    price: 10
}, {
    bikeId: 3,
    name: "Sport",
    status: "Laisvas",
    type: "Sporto",
    price: 20
}, {
    bikeId: 4,
    name: "City",
    status: "Uzimtas",
    type: "Miesto",
    price: 10
}, {
    bikeId: 5,
    name: "Mountain",
    status: "Laisvas",
    type: "Kalnu",
    price: 15
}];

export const Dashboard = (props: IDashboardProps) => {
    let navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!props.loggedIn)
            return navigate("/login");
    }, [props.loggedIn, navigate]);

    const openHandler = () => {
        setIsOpen(true);
    };
    const closeHandler = () => {
        setIsOpen(false);
    };

    const cardList = bikeList.filter(bike => props.isAdmin || bike.status === "Laisvas").map(bike => <Card
        key={bike.bikeId}
        isAdmin={props.isAdmin}
        bike={bike}
    />);

    return <div className={styles.dashboard}>
        {props.isAdmin && <Button
            color='primary'
            variant='contained'
            onClick={openHandler}
            startIcon={<AddIcon />}
        >Pridėti dviratį</Button>
        }
        <AddBike isOpen={isOpen} handleClose={closeHandler} />
        <div className={styles.list}>
            {cardList}
        </div>
    </div>;
}

export default Dashboard;
