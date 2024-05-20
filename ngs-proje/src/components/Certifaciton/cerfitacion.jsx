import React from 'react'
const Cerfitacion = () => {
  return (
    <div id='cerfitacion'>
        <div className="cerfitacion__container">
            <div className="certifacion__top">
                <h3>Sertifikatınızı yoxlayın:</h3>
            </div>
            <div className="certifacion__buttom">
                <input className='certifacnumber' type="text" placeholder='Sertifikatın nömrəsi' />
               
               <button className='certifactcheck'>
                Yoxla
               </button>
            </div>
        </div>
    </div>
  )
}

export default Cerfitacion