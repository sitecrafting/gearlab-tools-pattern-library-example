import React from 'react'
import ReactDOM from 'react-dom'

import { ExampleComponent } from 'gearlab-tools-pattern-library'

const ExampleApp = () => {
  return <div><ExampleComponent /></div>
}

ReactDOM.render(
  <ExampleApp />,
  document.getElementById('example-app')
)
