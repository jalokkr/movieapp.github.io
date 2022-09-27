import { useNavigate, Link } from 'react-router-dom'

const NavBar =({ searchText, setSearchText }) => {
  const navigation = useNavigate()
  
  const updateSearchText = (e) =>{
      navigation('/search')
      setSearchText(e.target.value)
    };
  
  return (
    <>
      <div>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand navdangers" to="/">MovieApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link navdangers" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navdangers" to="/about">About</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={updateSearchText}/>
      </form>
    </div>
  </div>
</nav>
      </div>
    </>
  )
}
export default NavBar