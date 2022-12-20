import { useState, useEffect } from 'react';
import styles from './dashboard.module.scss';

import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Card from './Card';
import { AddBike } from '../AddBike/AddBike';
import { IBike, IUser } from '../../model/interfaces';

interface IDashboardProps {
    loggedIn: boolean;
    bikes: IBike[];
    user?: IUser;
    addBike: (bike: IBike) => void;
    removeBike: (id: number) => void;
}

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

    const cardList = props.bikes.filter(bike => props.user?.admin || bike.status === "Laisvas").map(bike => <Card
        key={bike.bikeId}
        isAdmin={props.user?.admin}
        bike={bike}
        removeBike={props.removeBike}
    />);

    return <div className={styles.dashboard}>
        {props.user?.admin && <Button
            color='primary'
            variant='contained'
            onClick={openHandler}
            startIcon={<AddIcon />}
        >Pridėti dviratį</Button>
        }
        <AddBike isOpen={isOpen} handleClose={closeHandler} addBike={props.addBike} />
        <div className={styles.list}>
            {cardList}
        </div>
    </div>;
}

export default Dashboard;
