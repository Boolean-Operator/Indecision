import React from 'react';
import AddOption from './AddOption.js'
import Header from './Header.js'
import Action from './Action.js'
import Options from './Options.js'
import OptionModal from './OptionModal.js'

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNum]
    this.setState(() => ( {
      selectedOption: option
    } ));
  };
  handleClearSelectedOption = () => { 
    this.setState(() => ( {
      selectedOption: undefined
    } ));
  };
  handleDeleteOptions = () => {
    this.setState(() => ( {
      options: [] 
    } ));
  };
  handleDeleteOption = (optionToRemove) => {
    console.log('hdo' );
    this.setState((prevState) =>  ( {
      options: prevState.options.filter((option) => optionToRemove !== option )
    } ));
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
  
    this.setState((prevState) => ( {
      options: prevState.options.concat(option)
    } ));
  };
  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
  
      if (options) {
        this.setState(() => ( {
          options: options
        } ));
      }
    } catch (e) {
      // if error do nothing
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length ) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }
  render() {
    const title = "Indecision"
    const subtitle = "Put your life in the hands of a computer, WCGQ?"

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <div className="container">
          <Action 
          hasOptions={this.state.options.length> 0}
          handlePick={this.handlePick}
          />
          <div className='widget'>
            <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption
            handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    )
  }
}


export default IndecisionApp