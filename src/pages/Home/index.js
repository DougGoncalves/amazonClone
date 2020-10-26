import React from 'react'
import './Home.css'
import Product from '../../components/Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner" className="home__image"/>
        <div className="home__row">
          <Product 
            title="The Lean Startup" 
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41nnVZbC+eL._SY344_BO1,204,203,200_.jpg"
            rating={5} />
          <Product 
            id="495338094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen MMixer with K-beater, dough Hook and Whisk, 5 Litre Glass Bowl" 
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4} />
        </div>
        <div className="home__row">
          <Product 
            id="495338094"
            title="New Apple iPad Pro (12.9 inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
            price={589.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4} />
            <Product 
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3} />
            <Product 
            id="495338094"
            title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric" 
            price={98.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400"
            rating={5} />
        
        </div>
        <div className="home__row">
          <Product 
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" 
            price={1094.98}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4} />
        </div>
      </div>
    </div>
  )
}

export default Home
