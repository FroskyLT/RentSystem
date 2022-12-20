import { useParams } from 'react-router-dom';

import { Button, Chip, Grid, Rating } from '@mui/material';
import { IBike } from '../../model/interfaces';
import styles from './bike.module.scss';
import { useState } from 'react';

export const Bike = ({ bikes }: { bikes: IBike[] }) => {
  const [isRenting, setIsRenting] = useState(false);

  const { id } = useParams();
  const bike = bikes?.find(bike => bike.bikeId === Number(id));

  const randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1) // random rating

  return (
    <Grid className={styles.bike} container>
      <Grid item xs={6} className={styles.left}>
        <img className={styles.image} alt="bike" src="https://www.freevector.com/uploads/vector/preview/30077/Bicylce_vector_2.jpg" />
      </Grid>
      <Grid item xs={6} className={styles.right}>
        <div className={styles.card}>
          <div className={styles.card__header}>
            <div className={styles.name}>{bike.name}</div>
            <div className={styles.chipContainer}>
              <Chip className={styles.status} label={bike.status} color={bike.status === "Laisvas" ? "success" : "error"} />
              <Chip className={styles.price} label={`${bike.price} €/val.`} color="primary" />
            </div>
          </div>
          <div className={styles.type}><strong>Dviračio tipas:</strong> {bike.type}</div>
          <Rating name="read-only" value={randomNumber} readOnly />
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed augue lectus. Vivamus tincidunt odio ut sagittis pellentesque. Phasellus ut sodales urna. Nunc id suscipit augue. Pellentesque vel lacus ac est vulputate feugiat. Curabitur imperdiet odio ex, sit amet feugiat diam efficitur hendrerit. Aliquam erat volutpat.</p>
        </div>
        <Button variant={!isRenting ? "contained" : "outlined"} onClick={() => setIsRenting(!isRenting)}>{isRenting ? "Baigti" : "Išsinuomoti"}</Button>
      </Grid>
    </Grid>
  );
}

export default Bike;
