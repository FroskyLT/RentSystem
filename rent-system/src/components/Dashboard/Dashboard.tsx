import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { List } from '../List/List';

interface IDashboardProps {
    loggedIn: boolean;
}

export const Dashboard = (props: IDashboardProps) => {
    let navigate = useNavigate();

    useEffect(() => {
        if (!props.loggedIn)
            return navigate("/login");
    }, [props.loggedIn, navigate]);

    return <div>
        <List />
    </div>;
}

export default Dashboard;
