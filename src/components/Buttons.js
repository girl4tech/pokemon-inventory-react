import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons(props) {
  const { ItemName, addItemToBag, classes, url } = props;
  console.log(props)
  return (
    <div>
      <Button variant="contained" color="secondary" className={classes.button}
        onClick={()=> addItemToBag(ItemName, url)} key={props.key}>{ItemName}
      </Button>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
