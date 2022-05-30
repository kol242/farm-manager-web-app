import { observer } from 'mobx-react'
import React from 'react'
import AnimalStore from '../../../../Stores/AnimalStore'
import PaginateScroll from '../../../PaginateScroll'

const Footer = observer(() => {
  return (
    <div className="body-content__foot">
        { AnimalStore.Animals.length > 0 ? <PaginateScroll store={AnimalStore}/> : null }
    </div>
  )
})

export default Footer