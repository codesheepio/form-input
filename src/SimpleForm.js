import React from 'react';

class SimpleForm extends React.Component {
  constructor() {
    super();
    this.state = { value: '' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`submitted: ${ this.state.value }`);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={ e => this.handleSubmit(e) }>
          Name:
          <input
            type="text"
            value={ this.state.value }
            onChange={ e => this.handleChange(e) }
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SimpleForm;
