import React from 'react'
import ReactDOM from 'react-dom'
import Header  from './components/Header'
import { StrictMode } from "react";



// CSS
import './scss/section-header.scss'
// setup vars

function SectionHeader() {
	return (
		<div className="section-header">
			<Header />
		</div>
	)
}
ReactDOM.render(
	<StrictMode>
		<SectionHeader/>
	</StrictMode>, 
		document.getElementById('header'))

