import React, { Component } from 'react';

function WithState(stateName, stateUpdaterName, initialValue) {
  return function (Comp) {
    const factory = React.createFactory(Comp);
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {
          [stateName]:
            typeof initialValue === 'function'
              ? initialValue(this.props)
              : initialValue,
        };
      }

      stateUpdaterName = (updateFn) => {
        this.setState(({ prevState }) => ({
          [stateName]:
            typeof updateFn === 'function' ? updateFn(prevState) : updateFn,
        }));
      };

      render() {
        return factory({
          ...this.props,
          [stateName]: this.state,
          [stateUpdaterName]: this.stateUpdaterName,
        });
      }
    };
  };
}

export default WithState;
