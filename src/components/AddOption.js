import React from 'react';

// Add capitalization to first letter of input string
const capFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1)

class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault()
    let option = e.target.elements.option.value.trim()
    option = capFirst(option);
    const error = this.props.handleAddOption(option)
    
    this.setState(() => ( { error: error } ))
    if (!error) {
      e.target.elements.option.value = ''
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
        <input className="add-option__input" type="text" name="option"/>
        <button className="button">Add Option</button>
        </form>
      </div>
    )
  }
}

export default AddOption
