import './App.css';
import logo from './assets/ux/Logo .svg';
import restaurant from './assets/images/restaurant.png'

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
        <section id="home" className="about">
          <div className='text'>
            <h1>Litle Lemon</h1>
            <h2>New Zealand</h2>
            <p>Delight in our exclusive dining experience where each dish tells a story of flavors and passion. Reserve your table today and embark on a culinary journey that awaits.</p>
            <button> Reserve a Table</button>
          </div>
          <div className='restaurant-img'><img src={restaurant} className="restaurant" alt="Logo"></img></div>
        </section>
        <section id="menu" className="specials">Our Specials</section>
        <section id="testimonials" className="testimonials">Testimonials</section>
      </main>
      <footer>Test Footer</footer>
    </div>
  );
}

export default App;
