import {createContext} from 'react'

const CartContext = createContext({
  cartList: [],
  addCartItem: () => {},
  removeAllCartItems: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
})

export default CartContext
