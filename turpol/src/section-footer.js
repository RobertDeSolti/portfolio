import React from 'react'
import ReactDOM from 'react-dom'
import Footer  from './components/Footer'


// CSS
import './scss/section-footer.scss'
// setup vars

function SectionFooter() {
	return (
		<div className="section-footer">
				<Footer /> 
		</div>
	)
}




ReactDOM.render(<SectionFooter />, document.getElementById('footer'));
