import { observer } from 'mobx-react'
import React from 'react'

const Product = observer(() => {
  return (
    <>
        <label htmlFor="product">Product</label>
        <input type="text" name='product' />
    </>
  )
})

export default Product