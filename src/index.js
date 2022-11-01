/**
 * Every source component needs to have index.js 
 * 
 * and import the important Modules
 */


import React from 'react'
import ReactDOM  from 'react-dom'

import App from './App'

/** 
 * ReactDOM.render(<App />, document.getElementById('')) 
 * 
 * <App /> is the component we want to render 
 * 
 * document.getElementById('root') - this is going to trigger
 * our div and inject our entire react application inside it
 * (look at index.html for the root)
 */

ReactDOM.render(<App />, document.getElementById('root')) 