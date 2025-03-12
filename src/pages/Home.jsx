import HomeMap from "../components/maps/HomeMap/HomeMap.jsx"

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center pb-60">
        <h1 className="text-3xl">mapStep</h1>
        <p className="p-8 text-center">your primary tool in decoding land laws in the 
        <br></br>United States and streamlining permit acquisition.</p>
        <p className="italic font-extralight">locations serviced:</p>
        <HomeMap />
        <div id="home-buttons" className="flex flex-row pt-2">
            <button className="round-button">Log In</button>
            <button className="round-button">Sign Up</button>
        </div>
    </main>
  )
}

export default Home