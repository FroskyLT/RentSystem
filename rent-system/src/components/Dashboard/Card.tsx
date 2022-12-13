import * as React from 'react';
import styles from './dashboard.module.scss';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IBike } from '../../model/interfaces';
import Chip from '@mui/material/Chip';

export default function MediaControlCard({ isAdmin, bike }: { isAdmin: boolean, bike: IBike }) {
  return (
    <Card sx={{ display: 'flex', minWidth: '300px', justifyContent: "space-between" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Link to={`/bike/${bike.bikeId}`}>
            <Typography component="div" variant="h5">
              {bike.name}
            </Typography>
          </Link>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {bike.type}
          </Typography>
          <Chip className={styles.price} label={`${bike.price} €/val.`} color={bike.status !== "Laisvas" ? "error" : "primary"} />
        </CardContent>
        {isAdmin && <div style={{ padding: "0 0 5px 5px" }}>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
        </div>
        }
      </Box>
      <Box sx={{ width: "170px" }}>
        <CardMedia
          component="img"
          // sx={{ height: 168 }}
          image="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
          alt="Live from space album cover"
        />
      </Box>
    </Card>
  );
}
