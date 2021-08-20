import React, { Component } from 'react'

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.props.flipCellsAroundMe();
  }

  render() {
    let classes = "Cell" + (this.props.isLit ? "Cell-lit" : "");

    return (
      <div className="Cell">
        <td className={classes} onClick={this.handleClick}></td>
      </div>
    )
    
  }
}

export default Cell;