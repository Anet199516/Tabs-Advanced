import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.children().props.children[0].props.children,
    };
  }

  handleTabSelected(title, children) {
    this.setState({ activeTab: children });
  }

  render() {
    const { children } = this.props;
    const content = children({
      onClick: this.handleTabSelected.bind(this),
    });
    return (
      <div className="tabs">
        <div className="tab-list">{content}</div>
        <p className="tabs-content">{ this.state.activeTab }</p>
      </div>
    );
  }
}

Tabs.Tab = ({ title, children, onClick }) => (
  <button type="button" className="tab-button" onClick={() => onClick(title, children)}>
    {title}
  </button>
);

export default Tabs;
