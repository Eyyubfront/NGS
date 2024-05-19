import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'

const PageContainer = ({children}) => {
  return (
   <>
   <Header/>
   {children}
   <Footer/>
   </>
  )
}

export default PageContainer