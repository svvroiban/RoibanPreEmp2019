import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: " ",
      lastName: " ",
      phone: "",
      email: " "
    };
  }
  handleChange = event => {
    console.log(event.target.name, event.target.value);
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      firstName: "aa ",
      lastName: " ",
      phone: "",
      email: " "
    });
    console.log("submit = ", this.handleSubmit);
  };
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
        </label>
        <label>
          Phone
          <input
            type="text"
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label>
        <label>
          <input type="submit" />
        </label>
      </form>
    );
  }
}
export default Form;
