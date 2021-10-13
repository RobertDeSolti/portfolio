import React from "react";  
// import { useState } from "react";
// import PropTypes from 'prop-types';
import './modal.scss';


export const Modal = ({content,link,share, ...props}) => {
    return(
        <div className='modal'>
            <div className="tittle">
                <h1 className="modal-name">Tittle Name</h1>
            </div>
            <div className="modal-content">
                <div className="modal-content__section1">
                    <img src="#!" alt="#!" />
                </div>
                <div className="modal-content__section2">
                    <article>content</article>
                </div>
                <div className="modal-content__section3">
                    <div className="share">
                        <button>inst</button>
                        <button>tele</button>
                        <button>goo</button>
                        <button>what</button>
                    </div>
                </div>
                <div className="modal-content__section4">
                <button className="prev">Previous</button>
                <button className="next">Next</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;