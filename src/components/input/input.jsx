import React from 'react'
import { useDispatch} from 'react-redux';
import {setFilterDataActions} from '../../redux/actions';
import '../component.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 300,
    },
  },
}));


export default function Input() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const setFilterData = (value) => {
    dispatch(setFilterDataActions(value))
  };

  const searchData = (e) => {
    if (e.currentTarget.value) {
      setFilterData(e.currentTarget.value)
    } else {
      setFilterData('')
    }
  };
  
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-textarea"
        label="Search users"
        placeholder="Dr. Roberto"
        multiline
        variant="outlined"
        onChange={searchData}
        color = "white"
        size = 'small'
      />
    </form>
  )
}
