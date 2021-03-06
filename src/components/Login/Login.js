import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../../services/auth"
import Layout from "../Layout/layout"
import styles from "./login.module.css"
import TextField from "@material-ui/core/TextField"
import Button from "../Button/Button"
import UnlockIcon from "../../assets/unlock.svg"

class Login extends React.Component {
  state = {
    password: ``,
  }
  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }
  render() {
    if (isLoggedIn()) {
      navigate(`/app/intuit`)
    }
    return (
      <Layout>
        <div className={styles.center}>
          <h1>Ahoy, matey!</h1>
          <img height="128" src="https://i.imgur.com/lz3yOQt.png" />
          <p>
            Ye found a secret stash. You're gonna need the right password to
            open it
          </p>
          <form
            method="post"
            onSubmit={event => {
              this.handleSubmit(event)
              navigate(`/app/intuit`)
            }}
            className={styles.form}
          >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              name="password"
              onChange={this.handleUpdate}
              id="password"
              autoComplete="current-password"
            />
            <br />
            <Button primary type="submit">
              <UnlockIcon className={styles.unlock} />
              Unlock
            </Button>
          </form>
        </div>
      </Layout>
    )
  }
}
export default Login
