import Address from "./address.js";
function App() {
    const name = "John Doe";
    const john ={
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    }
    return <main>
        <h1>hello {name}!</h1>
        <p>here is my address</p>
        <Address street={john.street} city={john.city} state={john.state} zip={john.zip} />
        
    </main>
}
   export default App;