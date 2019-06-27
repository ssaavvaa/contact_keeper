import React, { Fragment } from 'react'
import '../../styles/spinner.css';

const Spinner = () => {
    return (
        <Fragment>
        <img src = 'https://media.giphy.com/media/GWbbdCgJhLRC0/giphy.gif'
        alt='loading' 
        className="spinner" />
        </Fragment>

    )
}

export default Spinner;
