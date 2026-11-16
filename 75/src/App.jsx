import Address from '../address.js'
import './App.css'

function App() {
  const name = 'John Doe'
  const john = {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345',
  }

  const currentYear = new Date().getFullYear()

  return (
    <main className="page">
      <h1>Hello {name}!</h1>
      <p>Here is my address:</p>
      <Address
        street={john.street}
        city={john.city}
        state={john.state}
        zip={john.zip}
      />
      <footer>&copy; {currentYear}</footer>
    </main>
  )
}

export default App
