import React from "react"

class Maker extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      short: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    })
  }

  show = (json) => {
    this.setState({
      short: json.short,
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    fetch(process.env.REACT_APP_API_URL + '/links', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        long: this.state.input,
      })
    })
    .then(res => res.json())
    .then(json => { this.show(json) })
  }

  render() {
    return(
      <div>
        <h1>What link would you like to shorten?</h1>
        <form>
          <input type="text" name="fname" value= {this.state.input} onChange={this.handleChange}/>
          <button type="submit"onClick={this.handleFormSubmit}>Submit</button>
          <h2>{this.state.short}</h2>
        </form>
      </div>
    )
  }
}

export default Maker
