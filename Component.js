const {MyMath} = require('./MyMath');
class Component {
  render() {
    console.log("render component");
  }
}
MyMath.sub(5,2);
exports.Component = Component;