import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { RecoilRoot } from 'recoil'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>, 
  document.getElementById('root')
)
