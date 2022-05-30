import { observer } from 'mobx-react'
import React from 'react'
import CropsStore from '../../../../Stores/CropsStore'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Body = observer(() => {
  return (
    <div className="body">
        <div className="body-content">
            <Header />
            <button id="btn-add" onClick={CropsStore.addingChecker}>New crop</button>
            <Main />
            <Footer />
        </div>
    </div>
  )
})

export default Body