import React from 'react'
import { observer } from 'mobx-react'

const PaginateScroll = observer(({ store }) => {
    return (
        <>
            { store.itemsLenght < 5 ? 'No more data to show' : 
                <button className="btn-scroll" onClick={() => store.nextItems()}>More</button>    
            }
        </>
    )
})

export default PaginateScroll