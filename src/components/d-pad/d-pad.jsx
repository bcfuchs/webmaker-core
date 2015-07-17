var React = require('react/addons');

module.exports = React.createClass({
  propTypes: {
    onDirectionClick: React.PropTypes.func, // External handler for button clicks
    isVisible: React.PropTypes.bool
  },
  getInitialState: function () {
    return {
      showUp: true,
      showDown: true,
      showLeft: true,
      showRight: true
    }
  },
  onButtonClick: function (direction, event) {
    this.props.onDirectionClick.call(this, direction)
  },
  bulkSetVisibility: function (newState) {
    this.setState(newState);
  },
  // TODO: Add "moon logic". Switch between moon and nub style buttons depending on available space.
  render: function () {
    return (
      <div className={'dPad' + (this.props.isVisible ? '' : ' hidden')}>
        <button className={'up' + (this.state.showUp ? '' : ' hidden')} onClick={this.onButtonClick.bind(this, 'up')}></button>
        <button className={'down' + (this.state.showDown ? '' : ' hidden')} onClick={this.onButtonClick.bind(this, 'down')}></button>
        <button className={'left moon' + (this.state.showLeft ? '' : ' hidden')} onClick={this.onButtonClick.bind(this, 'left')}></button>
        <button className={'right moon' + (this.state.showRight ? '' : ' hidden')} onClick={this.onButtonClick.bind(this, 'right')}></button>
      </div>
    );
  }
});
