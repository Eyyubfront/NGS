import React from 'react';
import pageserviceone from "../../assets/images/homephoto/pageserviceone.png"
import pageservicetwo from "../../assets/images/homephoto/pageservicetwo.png"
import pageservicethree from "../../assets/images/homephoto/pageservicethree.png"
import pageservicefoor from "../../assets/images/homephoto/pageservicefoor.png"
import pageservicefive from "../../assets/images/homephoto/pageservicefive.png"
import pageservicesix from "../../assets/images/homephoto/pageservicesix.png"
const services = [
    { id: 1, text: 'Sənədlərin hazırlanması', image: pageserviceone },
    { id: 2, text: 'SƏTƏM İdarəetmə Sisteminin qurulması', image:pageservicetwo  },
    { id: 3, text: 'Audit (təftiş) aparılması', image:pageservicethree },
    { id: 4, text: 'Təmir və tikinti', image:pageservicefoor },
    { id: 5, text: 'Təmizlik', image:pageservicefive },
    { id: 6, text: 'Digər xidmətlər', image: pageservicesix },
];

const PageService = () => {
    return (
        <div id='pageservice'>
            <div className="pageservice__container">
                <p className='pageservicenames'>Xidmətlərimiz</p>
                <div className="pageservice__top">
                    {services.slice(0, 3).map(service => (
                        <div
                            key={service.id}
                            className={`pageservice__card`}
                            style={{ backgroundImage: `url(${service.image})` }}
                        >
                            <div className="card__text">
                                <p>{service.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pageservice__buttom">
                    {services.slice(3).map(service => (
                        <div
                            key={service.id}
                            className={`pageservice__card`}
                            style={{ backgroundImage: `url(${service.image})` }}
                        >
                            <div className="card__text">
                                <p>{service.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageService;
