import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Modal from "../components/modal"

class ModalExample extends React.Component {
  removeElementByID(id) {
    const tileContainer = document.getElementById(id)
    tileContainer.parentNode.removeChild(tileContainer)
  }

  openModal = () => {
    window.gsap
      .timeline()
      .to(
        "#tile-container-below",
        { display: "block" }
      )
      .to(
        "#tile-container",
        { display: "block" }
      )
      .to("#myModal", { display: "block", opacity: 1, duration: 0.4 })
      .call(() => {
        const modal = document.getElementById('modal-content')
        console.log('1111111111111111111', modal.offsetHeight, modal.offsetWidth)
      })
      .addLabel("blueGreenSpin")
      .to(
        ".tile-below",
        { backgroundColor: "white", stagger: 0.001 },
        "blueGreenSpin"
      )
      .to(
        ".tile",
        { opacity: 0, y: -5, duration: 0.3, stagger: 0.001 },
        "blueGreenSpin"
      )
      .to(
        "#modal-content",
        { color: "black", duration: 0.5 },
        "blueGreenSpin+=2"
      )
      .to(
        "#myModal",
        { backgroundColor: "rgba(0,0,0,0.4)", duration: 0.5 },
        "blueGreenSpin+=2.5"
      )
      .to(
        "#modal-content-container",
        { backgroundColor: "white" }
      )
      .to(
        "#tile-container-below",
        { display: "none" }
      )
      .to(
        "#tile-container",
        { display: "none" }
      )
  }

  closeModal = () => {
    window.gsap
      .to("#myModal", { display: "none", opacity: 0, duration: 0.4 })
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <button onClick={this.openModal}>Open modal</button>
        <Modal close={this.closeModal} />
      </Layout>
    )
  }
}

export default ModalExample

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
