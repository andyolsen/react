import React from 'react'
import ReactDOM from 'react-dom'

import RetailerDirectory from './components/RetailerDirectory'
import retailersData from '../data/retailersData'

// Add React into window object, so it can be used throughout our code.
window.React = React

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RetailerDirectory 
        title="Totally Awesome Retailers" 
        retailers={retailersData}
    />
)
