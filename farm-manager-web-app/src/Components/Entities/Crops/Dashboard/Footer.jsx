import { observer } from 'mobx-react'
import React from 'react'
import CropsStore from '../../../../Stores/CropsStore'
import PaginateScroll from '../../../PaginateScroll'

const Footer = observer(() => {
  return (
    <div className="body-content__foot">
        { CropsStore.crops.length > 0 ? <PaginateScroll store={CropsStore}/> : null }
    </div>
  )
})

export default Footer