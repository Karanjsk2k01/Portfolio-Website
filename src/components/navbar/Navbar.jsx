import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <span>Karan Jayabalan</span>
        <div className="social">
          <a href=""><img src="/facebook.png" alt="facebook" /></a>
          <a href=""><img src="/instagram.png" alt="instragram" /></a>
          <a href=""><img src="/youtube.png" alt="youtube" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar