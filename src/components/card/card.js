import React from 'react'
import defaultImage from '../../images/default.jpg'
import report from '../../images/report.svg'
import menu from '../../images/menu.svg'
import vcr from '../../images/vcr.svg'
import impression from '../../images/impression.svg'
import './card.css'

export const STATUS_RUNNING = "RUNNING";
export const STATUS_PAUSED = "PAUSED";
export const STATUS_STOPPED = "STOPPED";

function Card(props) {
    const {
        image,
        status,
        nameOfCompany,
        advertiser,
        compaignDates,
        budgetTotal,
        budgetSpent,
        averageCPM,
        currentVCR,
        uniqueReach,
        frequency,
        totalImpressions
    } = props;

    const renderStatus = () => {
        if (status === STATUS_RUNNING) {
            return (
                <div className="status running">
                    <span>Running</span>
                </div>
            );
        } else if (status === STATUS_PAUSED) {
            return (
                <div className="status paused">
                    <span>Paused</span>
                </div>
            );
        } else if (status === STATUS_STOPPED) {
            return (
                <div className="status stopped">
                    <span>Stopped</span>
                </div>
            );
        } else {
            return (
                <div className="status">
                    <span>None</span>
                </div>
            );
        }
    };

    return (

        <div className="card">
            <div className="img">
                <img src={image ?? defaultImage} alt="img Of company" />
            </div>
            <div className="content">
                <div className="compamyProps">
                    {renderStatus()}
                    <div className="nameOfCompany">
                        <span>{nameOfCompany ?? "–"}</span>
                    </div>
                    <div className="nav">
                        <a href="#">
                            <h2>Report</h2>
                            <div className="reportIcon">
                                <img src={report} alt="report" />
                            </div>
                        </a>
                        <div className="menu">
                            <a href="#">
                                <img src={menu} alt="menu" />
                            </a>
                        </div>
                    </div>
                    <div className="img">
                        <img src={image ?? defaultImage} alt="img Of company" />
                    </div>
                </div>

                <div className="props">
                    {renderStatus()}
                    <div className="advert end">
                        <h3>Advertiser</h3>
                        <span>{advertiser ?? "–"}</span>
                    </div>
                    <hr className="border"></hr>
                    <div className="compaignDates">
                        <h3>Campaign dates (7 days left)</h3>
                        <span>{compaignDates ?? "–"}</span>
                    </div>
                    <div className="budget end">
                        <h3>Budget</h3>
                        <span>{budgetTotal ? `$${budgetTotal}` : "–"}</span>
                    </div>
                    <div className="spent">
                        <h3>Spent</h3>
                        <span>{budgetSpent ? `$${budgetSpent}` : "–"}</span>
                    </div>
                    <div className="cpm">
                        <h3>Average CPM </h3>
                        <span>{averageCPM ? `$${averageCPM}` : "–"}</span>
                    </div>
                    <div className="vcr end">
                        <h3>Current VCR</h3>
                        <div>
                            <span>{currentVCR ? `${currentVCR}%` : "–"}</span>
                            <img src={currentVCR ? `${vcr}` : " "} alt="" />
                        </div>
                    </div>
                    <div className="uniq">
                        <h3>Unique reach</h3>
                        <div>
                            <span>{uniqueReach ?? "–"}</span>
                            <img src={uniqueReach ? `${impression}` : " "} alt="" />
                        </div>
                    </div>
                    <div className="frequency">
                        <h3>Frequency</h3>
                        <span>{frequency ?? "–"}</span>
                    </div>
                    <div className="impressions end">
                        <h3>Total Impressions</h3>
                        <div>
                            <span>{totalImpressions ?? "–"}</span>
                            <img src={uniqueReach ? `${impression}` : " "} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Card;