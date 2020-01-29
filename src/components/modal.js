import React from "react"

class Modal extends React.Component {
  render() {
    return (
      <div
        id="myModal"
        className="modal"
        style={{
          display: "none",
          opacity: 0,
          position: "fixed",
          zIndex: 1,
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          overflow: "auto",
          backgroundColor: "rgb(157, 152, 152)"
        }}
      >
        <div
          id="modal-content-container"
          style={{
            backgroundColor: "transparent",
            margin: "15% auto",
            padding: "20px",
            width: "80%",
            position: "relative",
          }}
        >
          <div
            id="tile-container-below"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: "100%",
              backgroundColor: "transparent",
              overflow: "hidden",
            }}
          >
            {[...Array(1000).keys()].map(index => (
              <div
                className="tile-below"
                key={index}
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "transparent",
                  float: "left",
                }}
              ></div>
            ))}
          </div>
          <div id="modal-content" style={{ color: "rgb(157, 152, 152)", position: "relative" }}>
            <span className="close" onClick={this.props.close}>&times;</span>
            <p>Some text in the Modal..</p>
          </div>
          <div
            id="tile-container"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: "100%",
              backgroundColor: "transparent",
              overflow: "hidden",
            }}
          >
            {[...Array(1000).keys()].map(index => (
              <div
                className="tile"
                key={index}
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "transparent",
                  float: "left",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
