import ContextProvider from './context/AuthContextProvider'
import Footer from './pages/Footer'
import Header from './pages/Header'

function App() {
  return (
    <ContextProvider>
      <div>
        <Header />
        <Footer />
      </div>
    </ContextProvider>
  )
}

export default App
