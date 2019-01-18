console.log('Build-it-visibility.js');

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visibility: false,
    }
  }
  handleToggleVisibility() {
    console.log('ToggleVisibility');
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      }
    })
  }
  
  render() {
    return (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick = {this.handleToggleVisibility}>
        {this.state.visibility ? 'Hide Details' : 'Show Details'}
      </button>
      {this.state.visibility && (
        <div>
          <p>Message Details</p>
        </div>
      )}
    </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
