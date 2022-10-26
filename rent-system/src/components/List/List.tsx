import React from 'react';
import styles from './list.module.scss';
import Card from '../Dashboard/Card';

export const List = () => {
    return <div className={styles.list}>
        <Card />
        <Card />
        <Card />
    </div>;
}

export default List;
