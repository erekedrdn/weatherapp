import React from "react"

class Form extends React.Component {
  state = {
    city: ''
  }

  handleChange = (e) => {
    this.setState({ city: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.weatherMethod(this.state.city);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="city"
          placeholder="Город"
          value={this.state.city}
          onChange={this.handleChange}
        />
        <button>Получить погоду</button>
      </form>
    )
  }
}

export default Form;