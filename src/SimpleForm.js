import React from 'react';

class SimpleForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      citizenid: '',
      biblio: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'citizenid':
        const numbers = value.replace(/[^\d]/g, '');
        if (numbers.length > 13)
          break;

        const groups = /(\d{0,1})(\d{0,4})(\d{0,5})(\d{0,2})(\d{0,1})/.exec(numbers);
        const citizenid = groups.slice(1).reduce(
            (result, group) => result.length > 0 && group.length > 0
              ? `${result} ${group}`
              : `${result}${group}`,
            ''
          );

        this.setState({ citizenid })
        break;

      default:
        this.setState({ [name]: value })
        break;
    }
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
          <h2>Citizen ID:</h2>
          <input
            name="citizenid"
            value={ this.state.citizenid }
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
