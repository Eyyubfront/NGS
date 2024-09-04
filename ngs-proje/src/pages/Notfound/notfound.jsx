import React from 'react'
import notfound from "../../assets/images/notfound/notfound.png"
import PageContainer from '../../components/PageContainer'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'
const Notfound = () => {
    return (
        <>
            <PageContainer>
                <div id="notfounds">
                    <Container>
                    <div className="notfound__container">
                        <div className="notfound__left">
                            <h2 className='notfound__top'>Xəta baş verdi.</h2>
                            <p className='notfound__info'>Təəssüf ki bu səhifə mövcud deyil və ya dəyişdirilib.
                                Zəhmət olmasa yenidən cəd edin.</p>
                                <Link style={{textDecoration:"none",cursor:"pointer"}} to="/">
                                <p className='notfound__links'>Ana səhifəyə geri dön</p>
                                </Link>
                        </div>
                        <div className="notfound__right">
                            <img className='notfoundimg' src={notfound} alt="" />
                        </div>
                    </div>
                    </Container>
                </div>
            </PageContainer>
        </>
    )
}

export default Notfound