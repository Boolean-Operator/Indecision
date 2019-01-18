const appRoot = document.getElementById('app')

let hide = true

const onToggleViz = () => {
  hide = !hide
  renderApp()
}

// Solution 1
const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggleViz}>
        {hide ? 'Hide Details' : 'Show Details'}
      </button>
      {hide && (
        <div>
          <p>Message Details</p>
        </div>
      )}
    </div>
  )

  ReactDOM.render(template, appRoot)
}
renderApp()

// Solution 2
// const renderApp = () => {
//   const template = (
//     <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={onToggleViz}>
//       {hide ? 'Show Details' : 'Hide Details'}
//     </button>
//     <p hidden={hide}>Message Details </p>
//     </div>
//   )
//   ReactDOM.render(template, appRoot)
// }
// renderApp()
