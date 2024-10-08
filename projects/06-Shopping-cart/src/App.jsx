import { useState } from 'react'
import Products from './components/Products/Products'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { products as initialState } from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/cart'

function App() {

  const [products] = useState(initialState)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header></Header>
      <Cart></Cart>
      <Products products={filteredProducts}></Products>
      <Footer></Footer>
    </CartProvider>
  )
}

export default App
