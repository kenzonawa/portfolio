import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"

const styles = {
  root: {
    background: "white",
  },
  input: {
    color: "black",
  },
}

function CustomTextField(props) {
  const { classes } = props

  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      name="password"
      label="Password"
      type="password"
      name="password"
      id="password"
      autoComplete="current-password"
      className={classes.root}
      InputProps={{
        className: classes.input,
      }}
    />
  )
}

CustomTextField.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CustomTextField)
