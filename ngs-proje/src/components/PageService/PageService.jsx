import React from 'react'
const PageService = () => {
    return (
        <div id='pageservice'>
            <div className="pageservice__container">
                    <p className='pageservicenames'>Xidmətlərimiz</p>
                <div className="pageservice__top">
                    <div className="pageservice__cardone">
                        <div className="card__text">
                            <p>Sənədlərin hazırlanması</p>
                        </div>
                    </div>
                    <div className="pageservice__cardtwo">
                        <div className="card__text">
                            <p>SƏTƏM İdarəetmə Sisteminin qurulması</p>
                        </div>
                    </div>
                    <div className="pageservice__cardthree">
                        <div className="card__text">
                            Audit (təftiş) aparılması
                        </div>
                    </div>
                </div>
                <div className="pageservice__buttom">
                    <div className="pageservice__cardfoor">
                        <div className="card__text">
                        <p>Təmir və tikinti</p>
                        </div>
                    </div>
                    <div className="pageservice__cardfive">
                        <div className="card__text">
                            <p>Təmizlik</p>
                        </div>
                    </div>
                    <div className="pageservice__cardsix">
                        <div className="card__text">
                            <p>Digər xidmətlər</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageService