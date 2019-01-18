console.log("app.js is running!");

const appObj = {
  title: 'Better Call Saul',
  subtitle: 'Mo Cheeba',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault()

  const option = e.target.elements.option.value

  if(option) {
    appObj.options.push(option)
    e.target.elements.option.value = ''
    console.log(appObj.options);
    renderApp()
    
    
  }
}

const removeAll = () => {
  appObj.options = []
  console.log(appObj.options);
  
  renderApp()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random()* appObj.options.length)
  const option = appObj.options[randomNum]
  alert(option)
}

const appRoot = document.getElementById('app')

const renderApp = () => {

  const template = (
    <div>
    <h1>Show : {appObj.title.toUpperCase()}</h1>
    {appObj.subtitle  && <p>Episode: {appObj.subtitle}</p>}
    <p>{(appObj.options && appObj.options.length > 0) ? "Here are your optons :"  : 'No Options available'}</p>
    <button disabled={appObj.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
    <button onClick={removeAll}>Remove All</button>
    <ol>
      {appObj.options.map((option) => <li key= {option}> {option} </li>)}
    </ol>
    <form onSubmit={onFormSubmit}>
    <input type="text" name="option" />
    <button>Add Option</button>
    </form>
    </div>
  )
  
  
  
  ReactDOM.render(template, appRoot)
  
}

renderApp()