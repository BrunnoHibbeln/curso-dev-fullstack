import React from 'react'

import Header from './Header'
import Nav from './Nav'

const Template = ({ children, activePage, pages, onChangePage }) => {

    const title = pages[activePage].text

    return (
        <>
            <Header title={title} />
            <Nav pages={pages} onChangePage={onChangePage} />
            { children }
        </>
    )
}

export default Template