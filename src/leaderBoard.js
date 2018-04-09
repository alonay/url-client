import React from "react"

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      links: [],
      showLeaders: false
    }
  }

  componentDidMount() {
    this.getLinks()
  }

  setLeaders = (json) => {
    this.setState({
      links: json,
    })
  }

  toggleLeaders = () => {
    this.setState({
      showLeaders: !this.state.showLeaders
    })
  }

  getLinks = () => {
    fetch(process.env.REACT_APP_API_URL + '/links')
      .then(res => res.json())
      .then(json => this.setLeaders(json))
  }

  render() {
    let list = <ol>
      {
        this.state.links.map((link, index) => {
          return (
            <li key={link.long + index}>{link.long}</li>
          )
        })
      }
    </ol>

    return (
      <div className="leaders">
        <button
          className="top"
          onClick={this.toggleLeaders}
        >
          See Top Links
        </button><br/><br/><br/><br/>
        {this.state.showLeaders && list}
      </div>
    )
  }
}

export default LeaderBoard
