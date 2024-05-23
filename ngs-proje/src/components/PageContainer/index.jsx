import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import  { useState, useEffect } from 'react';
const PageContainer = ({children}) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
   <>
   <Header/>
   {children}
   
   <div className="App">
      <div style={{ height: '25px' }}> 
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="scroll-to-top">
          ⬆️
        </button>
      )}
    </div>
   <Footer/>
   </>
  )
}

export default PageContainer