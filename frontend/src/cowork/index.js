import DefaultLayout from "../layout/DefaultLayout";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";

function Cowork(props) {
    const [coworkData, setCoworkData] = useState(null);

    const { placeId } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:4000/cowork/get/${placeId}`);
                const data = await response.json();

                if (data.success) {
                    setCoworkData(data.data[0]);
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [placeId]);

    return (
        <DefaultLayout>
            {coworkData ? (
                <div className="cowork">
                    <div className="coworkimg">
                        <img
                            src={coworkData ? coworkData.image : `${process.env.PUBLIC_URL}/miku.jpeg`}
                            alt="sample"
                            className="duckrating"
                        />
                    </div>
                    <div className="coworkinfo">
                        <div className="coworkname">
                            <h1>{coworkData ? coworkData.placeName : "Loading..."}</h1>
                        </div>
                        <div className="coworkdesc">
                            <p className="info">{coworkData ? coworkData.descr : "Loading..."}</p>
                        </div>
                        <div className="coworkfacility">
                            <div className="facilitycheck">
                                <div className="facility">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/${coworkData && coworkData.parking ? 'yes' : 'no'}.png`}
                                        alt="check"
                                    />
                                    <p>Parking</p>
                                </div>
                                <div className="facility">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/${coworkData && coworkData.food ? 'yes' : 'no'}.png`}
                                        alt="check"
                                    />
                                    <p>Food</p>
                                </div>
                                <div className="facility">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/${coworkData && coworkData.meetingroom ? 'yes' : 'no'}.png`}
                                        alt="check"
                                    />
                                    <p>Meeting room</p>
                                </div>
                            </div>

                            <div className="facilitycheck">
                                <div className="facility">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/${coworkData && coworkData.freewifi ? 'yes' : 'no'}.png`}
                                        alt="check"
                                    />
                                    <p>Free WIFI</p>
                                </div>
                                <div className="facility">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/${coworkData && coworkData.bakery ? 'yes' : 'no'}.png`}
                                        alt="check"
                                    />
                                    <p>Bakery</p>
                                </div>
                                <div className="facility">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/${coworkData && coworkData.quietzone ? 'yes' : 'no'}.png`}
                                        alt="check"
                                    />
                                    <p>Quiet zone</p>
                                </div>
                            </div>

                            <div className="facilitycheck">
                                <div className="facility">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/${coworkData && coworkData.charging ? 'yes' : 'no'}.png`}
                                        alt="check"
                                    />
                                    <p>Charging</p>
                                </div>
                                <div className="facility">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/${coworkData && coworkData.drink ? 'yes' : 'no'}.png`}
                                        alt="check"
                                    />
                                    <p>Drink</p>
                                </div>
                                <div className="facility">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/${coworkData && coworkData.smokezone ? 'yes' : 'no'}.png`}
                                        alt="check"
                                    />
                                    <p>Smoke zone</p>
                                </div>
                            </div>
                        </div>
                        <div className="coworkfunction">
                            <div className="coworklocation">
                                <iframe
                                    src={coworkData.map}
                                    width="150"
                                    height="100"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                            <div className="coworkrating">
                                <div className="rating-gr">
                                    {coworkData && renderRatingStars(coworkData.rating)}
                                </div>
                                <h5>{coworkData ? `${coworkData.rating}/5 from review` : "Loading..."}</h5>
                            </div>
                            <div className="coworkseat">
                                <h3>{coworkData ? coworkData.seat : "Loading..."}</h3>
                                <h4>Available seat</h4>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="loading">
                    <h1>Loading...</h1>
                </div>
            )}
        </DefaultLayout>
    );
}

const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <img
                key={i}
                src={`${process.env.PUBLIC_URL}/${i <= rating ? "fullduck" : "emptyduck"}.png`}
                alt="star"
                className="duckrating"
            />
        );
    }
    return stars;
}

export default Cowork;