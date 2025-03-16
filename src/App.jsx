import React from 'react';
import Header from './Header';
import ContactInfo from './ContactInfo';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-1">
          <h1>WELCOME TO GLAM JEWELS</h1>
          <p>
            Unveil the magic of handcrafted jewelry, where artistry meets
            individuality. Every piece, a labor of love, is meticulously crafted
            to adorn your unique story. From delicate, ethereal designs to bold,
            statement-making pieces, our collection is a symphony of style and
            substance. Immerse yourself in a world of exquisite craftsmanship,
            where tradition blends seamlessly with contemporary trends. Discover
            the allure of bespoke jewelry, personalized to your desires.
          </p>
        </div>
        <div className="col-1">
          <img
            src="360_F_501006064_7JanoMo1Tl5qMpfPcIfUnDJUb6oDcJx4.jpg"
            alt="Jewels"
          />
        </div>
      </div>
      <ContactInfo />
      <footer className="end-text">
        <p>Copyright &copy; 2024. All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
