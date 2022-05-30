import { observer } from 'mobx-react'
import React from 'react'
import FieldStore from '../../../../Stores/FieldStore'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Body = observer(() => {
  return (
    <div className="body">
        <div className="body-content">
            <Header />
            <button id="btn-add" onClick={FieldStore.addingChecker}>New field</button>
            <Main />
            <Footer />
        </div>
    </div>
  )
})

export default Body