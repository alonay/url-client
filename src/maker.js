import React from "react"

class Maker extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
      short: '',
      error: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    })
  }

  show = (json) => {
    if (json.error !== undefined) {
      this.setState({
        short: '',
        error: json.error.long[0]
      })
    } else {
      this.setState({
        short: json.short,
        error: ''
      })
    }

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

  valid = () => {
    if (this.state.error === ""){
      return
    }else{
      return false
    }
  }

  render() {
    const short = process.env.REACT_APP_API_URL + '/' + this.state.short

    return(
      <div className= "maker">
        <h1>What link would you like to shorten?</h1>
        <form>
          <input type="text" className="fname" value= {this.state.input} onChange={this.handleChange} placeholder="Type Site Here"/>
          <button type="submit" className="button" onClick={this.handleFormSubmit}>Generate</button>
          {this.state.short && <a href={short}>{short}</a>}
          {this.state.error}
        </form>
      </div>
    )
  }
}

export default Maker
