import React from 'react';

class SimpleForm extends React.Component {
  constructor() {
    super();
    this.state = { name: '', biblio: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submitted:', this.state);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={ this.handleSubmit }>
          <h2>Name:</h2>
          <input
            name="name"
            value={ this.state.name }
            onChange={ this.handleChange }
          />
          <h2>Bibliography:</h2>
          <textarea
            name="biblio"
            value={ this.state.biblio }
            onChange={ this.handleChange }
            rows={5}
            style={{width: '100%'}}
          />
          <hr/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SimpleForm;
