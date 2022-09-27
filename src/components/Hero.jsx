const Hero =({text, backdrop}) =>{
  return(
    <>
      <header className="bg-dark text-white p-5 my-4 hero-container">
        <h1 className="hero-text headt"> {text} </h1>
        <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
      </header>
    </>
  )
}
export default Hero