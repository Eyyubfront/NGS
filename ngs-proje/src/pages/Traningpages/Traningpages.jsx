import React from 'react';
import PageContainer from '../../components/PageContainer';
import Cerfitacion from '../../components/Certifaciton/cerfitacion';
import Frame from "../../assets/images/Frame.png";
import { Container} from '@mui/material';

import Traningcontainer from '../../components/Traningcontainer/Traningcontainer';
const Traningpages = () => {
    return (
        <>
            <PageContainer>
                <div id='traningpages'>
                    <div className="traning__top">
                        <img className='framesphoto' src={Frame} alt="" />
                        <div className="traningphoots__text">
                            <h2 className='toptraningsnames'>Təlimlər, tədbir və elanlar</h2>
                            <p className='traningreportext'>
                                Lorem ipsum dolor sit amet consectetur. Quis odio fermentum lacus porta tristique nunc pretium. Pulvinar montes sed elementum sed viverra integer fermentum.
                            </p>
                        </div>
                    </div>
                    <Container>
                        <div className="traning__container">
                            <div className="traning__containernames">
                                <p>Tarix</p>
                                <p>Mövzu</p>
                            
                            </div>
                    <Traningcontainer/>
                        </div>
                    </Container>
                </div>
                <Cerfitacion />
            </PageContainer>
        </>
    );
};

export default Traningpages;
