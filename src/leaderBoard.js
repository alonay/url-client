import React from "react"

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      links: []
    }
  }

  componentDidMount() {
    this.getLinks()
  }

  showLeaders = (json) => {
    this.setState({
      links: json,
    })
  }

  getLinks = () => {
    fetch(process.env.REACT_APP_API_URL + '/links')
      .then(res => res.json())
      .then(json => this.showLeaders(json))
  }


  render() {
    return (
      <ol>
        {
          this.state.links.map((link, index) => {
            return (
              <li key={link.long + index}>{link.long}</li>
            )
          })
        }
      </ol>
    )
  }
}

export default LeaderBoard
