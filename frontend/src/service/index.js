import { useState, useEffect } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import './index.css'
import { Link } from "react-router-dom";

export const HotDeals = (props) => {
    const { placeName, placeId, promo, imgSrc } = props
    return (
        <Link to={`/cowork/${placeId}`} style={{ textDecoration: 'none' }}>
            <div className="hotplace"
                style={
                    {
                        backgroundImage: `url(${imgSrc})`,
                        backgroundSize: 'cover'
                    }}
            >
                <p className="promodesc">{promo}</p>
            </div>
            <p className="hotname">{placeName}</p>
        </Link>

    );
}

export const RecommendCowork = (props) => {
    const { placeName, placeId, imgSrc } = props
    return (
        <Link to={`/cowork/${placeId}`} style={{ textDecoration: 'none' }}>
            <div className="autorec"
                style={
                    {
                        backgroundImage: `url(${imgSrc})`,
                        backgroundSize: 'cover'
                    }}>
                <p className="recname">{placeName}</p>
            </div>
        </Link>
    )
}

function Service() {
    const [recommendCowork, setRecommendCowork] = useState(null);

    useEffect(() => {
        console.log('fetching data...');
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:4000/cowork/random/`);
                const data = await response.json();

                if (data.success) {
                    setRecommendCowork(data.list);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    if (!recommendCowork) {
        return (
            <DefaultLayout>
                <div>now loading..</div>
            </DefaultLayout>
        )
    }

    return (
        <DefaultLayout>
            <img
                src={`${process.env.PUBLIC_URL}/wave2.png`}
                alt="wave3"
                className="wave3"
            />
            <div className="service">
                <div className="recommend">
                    <h3>Recommended</h3>
                    <RecommendCowork
                        placeName={recommendCowork[0].placeName}
                        placeId={recommendCowork[0].placeId}
                        imgSrc={recommendCowork[0].image}
                    />
                </div>
                <div className="deal">
                    <div className="hotdeal">
                        <h3>HOT DEALS</h3>
                        <div className="coworkdeal">
                            {/* {hotdeal("50 BAHT DISCOUNT")}
                            {hotdeal("30 % OFF FOR DRINK")}
                            {hotdeal("3 HOURS FREE 1 HOUR")} */}
                            <HotDeals promo="50 BAHT DISCOUNT" placeName="Too Fast To Sleep" placeId="13" imgSrc="https://m1r.ai/9/lr0vi.jpg"/>
                            <HotDeals promo="30 % OFF FOR DRINK" placeName="WYH.Boutique and Design Hostel" placeId="16" imgSrc="https://m1r.ai/9/zmqja.jpg"/>
                            <HotDeals promo="33 HOURS FREE 1 HOUR" placeName="Punspace" placeId="8" imgSrc="https://m1r.ai/9/1sb16.jpg" />
                        </div>
                    </div>
                    <div className="onlykohub">
                        <h3>ONLY AT KOHUB</h3>
                        <div className="exclusive">
                            <Link to='/subscription'>
                                <div className="coupon">
                                    <img src={`${process.env.PUBLIC_URL}/exclusiveduck.png`} alt="deal" className="exdeal" />
                                </div>
                            </Link>
                            <div className="coupon">
                                <img src={`${process.env.PUBLIC_URL}/duckvoucher.png`} alt="deal" className="exdeal" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}


export default Service;