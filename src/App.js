import './App.css';
import Card, { STATUS_RUNNING } from './components/card/card.js'
import './components/card/card.css'
import img from './images/Creative.png'

function App() {
    const props= {
        image: img,
        status: STATUS_RUNNING,
        nameOfCompany: 'Premium_Fit_1507114822_Mar_Bowl',
        compaignDates: '05 Mar 2020 - 05 Apr 2020',
        advertiser: 'Planet_Fitness',
        budgetTotal: 800,
        budgetSpent: 500,
        averageCPM: 55,
        currentVCR: 20,
        uniqueReach: 36000,
        frequency: 6,
        totalImpressions: 25000
    }
    return (
        <div className="App" >
            <div className="container">
                <Card {...props}></Card>
            </div>
        </div>
    );
}

export default App;