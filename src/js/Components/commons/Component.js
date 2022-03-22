class Component {
  constructor({ $target, props }) {
    this.$target = $target;
    this.props = props;
    this.setState();
  }
  setState(setState = null) {
    if (setState) setState();
    this.render();
  }
  render(render) {
    console.log("==== this ====", this)
    console.log(render)
    // render at thisTime
    // render();
    this.didEffect();
  }
  didEffect(didEffect = null) {
    if (!didEffect) return;
    // like componentDidMount, componentDidUpdate
    // API call if you want
    didEffect();
  }
}

export default Component;
