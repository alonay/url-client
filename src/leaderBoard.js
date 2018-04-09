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
    fetch('http://localhost:3000/links')
      .then(res => res.json())
      .then(json => this.showLeaders(json))
  }


  render() {
    return (
      <ol>
        {
          this.state.links.map((link, index) => {
            return (
              <li>{index + 1} - {link.long}</li>
            )
          })
        }
      </ol>
    )
  }
}

export default LeaderBoard
