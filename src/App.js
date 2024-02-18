import './App.css';
import logo from './assets/ux/Logo .svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <img src={logo} className="App-logo" alt="Logo" />
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="#order">Online Order</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section id="home" className="about">About Us</section>
        <section id="menu" className="specials">Our Specials</section>
        <section id="testimonials" className="testimonials">Testimonials</section>
      </main>
      <footer>Test Footer</footer>
    </div>
  );
}

export default App;
