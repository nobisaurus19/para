import DefaultLayout from "../layout/DefaultLayout";
import './index.css'
import { Link } from "react-router-dom";

function Subscription(){
    return(
        <DefaultLayout>
            <img
                src={`${process.env.PUBLIC_URL}/wave.png`}
                alt="wave4"
                className="wave4"
            />
            <div className="homeinfo">
                <div className="introduceteam">
                    <h1 className="exduck">What is <span style={{color: '#F5BC18'}}>EXCLUSIVE DUCK</span> ?</h1>
                    <p className="exdesc">  Exclusive ducks are privileges that are enhanced for more 
                        convenient use.  more fast  and access to good deals more than
                        anyone else  Whether it's a noble duck member who will give more 
                        specials than a normal duck member  Or even better with a royal duck
                        that is like the king of ducks!</p>
                </div>
            <div className="subscription">
                    <div class="noble">
                        <div className="duckmascot">
                            <img src={`${process.env.PUBLIC_URL}/noble.png`} alt='mascot' className="mymascot" />
                            <p className="subname">NOBLE DUCK</p>
                            <p className="subfee">$14.99 per month</p>
                        </div>
                        <div className="duckdetail">
                            <p className="ducklist">
                            <img src={`${process.env.PUBLIC_URL}/checklist.png`} alt='icon' className="iconlist" />
                                Over 1,000 Deal
                            </p>
                            <p className="ducklist">
                            <img src={`${process.env.PUBLIC_URL}/checklist.png`} alt='icon' className="iconlist" />
                                Prioritize your queue
                            </p>
                            <p className="ducklist">
                            <img src={`${process.env.PUBLIC_URL}/checklist.png`} alt='icon' className="iconlist" />
                                Car parking for noble
                            </p>
                            <p className="ducklist">
                            <img src={`${process.env.PUBLIC_URL}/checklist.png`} alt='icon' className="iconlist" />
                                Prioritize your queue
                            </p>
                            <p className="ducklist">
                            <img src={`${process.env.PUBLIC_URL}/checklist.png`} alt='icon' className="iconlist" />
                                Cancel anytime
                            </p>
                        </div>
                    </div>
                    <div class="royal">
                        <div className="duckmascot">
                            <img src={`${process.env.PUBLIC_URL}/royal.png`} alt='mascot' className="mymascot2" />
                            <p className="subname2">ROYAL DUCK</p>
                            <p className="subfee">$19.99 per month</p>
                        </div>
                        <div className="duckdetail">
                            <p className="ducklist">
                            <img src={`${process.env.PUBLIC_URL}/checklist.png`} alt='icon' className="iconlist" />
                                Over 1,600 Deal
                            </p>
                            <p className="ducklist">
                            <img src={`${process.env.PUBLIC_URL}/checklist.png`} alt='icon' className="iconlist" />
                                Prioritize your queue
                            </p>
                            <p className="ducklist">
                            <img src={`${process.env.PUBLIC_URL}/checklist.png`} alt='icon' className="iconlist" />
                                Car parking for royal
                            </p>
                            <p className="ducklist">
                            <img src={`${process.env.PUBLIC_URL}/checklist.png`} alt='icon' className="iconlist" />
                                Intelligent booking memory  
                            </p>
                            <p className="ducklist">
                            <img src={`${process.env.PUBLIC_URL}/checklist.png`} alt='icon' className="iconlist" />
                                Premium Quarantee
                            </p>
                            <p className="ducklist">
                            <img src={`${process.env.PUBLIC_URL}/checklist.png`} alt='icon' className="iconlist" />
                                Cancel anytime
                            </p>
                        </div>
                    </div>
            </div>
      </div>
        </DefaultLayout>
    )
}
export default Subscription;
