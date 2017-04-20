import React, { Component } from 'react';
import { SortablePane, Pane } from 'react-sortable-pane';

const style = {
  fontSize: "40px",
  textAlign:"center",
  paddingTop:"60px",
  height:"400px",
  border: "solid 1px #ccc",
  backgroundColor: "#fff"
};

class MySortablePane extends Component {
  constructor(props) {
    super(props)

    this.state = {
      draggedWidth: 0,
      panes: [
        {
          id: 1,
          height: 200,
          width: 200,
          virtualWidth: 200,
          text: "A"
        },
        {
          id: 2,
          height: 200,
          width: 200,
          virtualWidth: 200,
          text: "B"
        }
      ]
    }

    this.updatePane = this.updatePane.bind(this)
  }

  updatePane({id, dir, size, rect}) {
    const panes = this.state.panes.map(pane => {
      if(pane.id == id) {
        pane.virtualWidth = size.width
        pane.width = (pane.virtualWidth % 50 == 0) ? pane.virtualWidth : pane.width
        size.width = pane.width
        let el = document.getElementsByClassName(`js-pane-id-${id}`)[0]
        el.style.width = `${size.width}px`
      }
      return pane
    })
    this.setState({ panes: panes })
    let pane = this.state.panes.find(pane => pane.id == id)
    console.log("size", size.width)
    console.log("pane.width", pane.width)
    console.log("pane.virtualWidth", pane.virtualWidth)
  }

  render() {
    let panes = this.state.panes.map(item => (
      <Pane
         className={`js-pane-id-${item.id}`}
         id={item.id}
         width={item.width}
         height={item.height}
         style={style}
      >
        {item.text}
      </Pane>
    ))

    return (
      <SortablePane
          direction="horizontal"
          margin={10}
          onResize={this.updatePane}
      >
        {panes}
      </SortablePane>
    );
  }
}

export default MySortablePane
