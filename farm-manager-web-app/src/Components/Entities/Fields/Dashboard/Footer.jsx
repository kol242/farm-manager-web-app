import { observer } from 'mobx-react'
import React from 'react'
import FieldStore from '../../../../Stores/FieldStore'
import PaginateScroll from '../../../PaginateScroll'

const Footer = observer(() => {
  return (
    <div className="body-content__foot">
        { FieldStore.Fields.length > 0 ? <PaginateScroll store={FieldStore}/> : null }
    </div>
  )
})

export default Footer