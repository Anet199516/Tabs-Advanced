import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTabContext: 'Tab is not selected yet',
      currentTabIndex: -1,
      currentTabTitle: '...',
    };
  }

  render() {
    const { children } = this.props;
    const { currentTabContext, currentTabIndex, currentTabTitle } = this.state;

    return (
      <div>
        <h2 className="tabs-title">
          Current Tab is {(currentTabTitle)}
        </h2>
        <div className="Tabs">
          {children.map((child, index) => (
            <TabHeader
              key={index}
              title={child.props.title}
              isActiveTab={index === currentTabIndex}
              onClick={() => {
                this.setState({
                  currentTabContext: child.props.children,
                  currentTabIndex: index,
                  currentTabTitle: child.props.title,
                });
              }}
            />
          ))}
        </div>

        <div className="tabs-content">{currentTabContext}</div>

      </div>
    );
  }
}

const Tab = () => {};

const TabHeader = ({ title, onClick }) => (
  <button type="button" className="tab-button" onClick={onClick}>
    {title}
  </button>
);


export { Tabs, Tab };
