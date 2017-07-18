import React from 'react';

class SimpleForm extends React.Component {
  constructor() {
    super();
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <form onSubmit={ this.handleSubmit }>
          Name:
          <input
            type="text"
            value={ this.state.value }
            onChange={ this.handleChange }
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SimpleForm;
