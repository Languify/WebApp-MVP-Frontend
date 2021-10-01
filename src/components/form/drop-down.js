import React from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(({ theme }) => ({
  root: {
    'label + &': {
      marginTop: theme?.spacing(3),
    },
    backgroundColor: '#ffffff',
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme?.palette.background.paper || '#000000',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme?.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(({ theme }) => ({
  margin: {
    margin: theme?.spacing(1),
  },
}));

const DropDown = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.margin}>
        {/* <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel> */}
        <NativeSelect
          onChange={handleChange}
          input={<BootstrapInput />}
          sx={{
            width: '125px'
          }}
        >
          {/* <option aria-label="None" value="" /> */}
          <option value={5} selected>Last 5 days</option>
          <option value={5}>Last 5 days</option>
          <option value={5}>Last 5 days</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default DropDown;
