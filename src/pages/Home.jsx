import HomeMap from "../components/maps/HomeMap/HomeMap.jsx"

const Home = () => {
  return (
    <main>
        <h1 className="text-3xl">mapStep</h1>
        <p>your primary tool in decoding land laws in the 
        United States and streamlining permit acquisition.</p>
        <HomeMap />
        <div id="home-buttons" className="flex flex-row">
            <button className="round-button">Log In</button>
            <button className="round-button">Sign Up</button>
        </div>
    </main>
  )
}

export default Home