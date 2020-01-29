const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js"></script>,
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/CSSRulePlugin.min.js"></script>,
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/EaselPlugin.min.js"></script>,
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/MotionPathPlugin.min.js"></script>,
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/EasePack.min.js"></script>,
  ])
}
