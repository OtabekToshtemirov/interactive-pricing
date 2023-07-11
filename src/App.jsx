import {useState} from 'react'
import './App.css'

function App() {

    const [rangeValue, setRangeValue] = useState(8);
    const [isYearly, setIsYearly] = useState(false);
    const [views, setVievs] = useState("10K")
    const [range, setRange] = useState(1);




    const handleRangeChange = (e) => {
        setRange(e.target.value);
        const price = e.target.value;
        const rangeValues = [8.00, 12.00, 16.00, 24.00, 36.00];
        const views = ["10K", "50K", "100K", "500K", "1M"];
        const index = parseInt(price) - 1;
        if (!isYearly) {
            setRangeValue(rangeValues[index]);
            setVievs(views[index]);
        } else {
            setRangeValue(rangeValues[index] * 0.75);
            setVievs(views[index]);
        }
    }

    const changeCheckbox = () => {
        setIsYearly(!isYearly);
        if (isYearly) {
            setRangeValue(rangeValue / 0.75);
        }
        else {
            setRangeValue(rangeValue * 0.75);}
    }


return (
        <div className={'wrapper'}>
            <div className="component">
                <div className="component-bg">
                    <h1>
                        Simple, traffic-based pricing
                    </h1>
                    <p>
                        Sign-up for our 30-day trial. No credit card required.
                    </p>
                </div>
                <div className="main-component">
                    <div className="prices">
                        <p>
                            {views} PAGEVIEWS
                        </p>
                        <p>
                            <h1>
                                ${rangeValue}.00
                            </h1>
                            / month
                        </p>
                    </div>
                    <div className="slider">
                        <input type="range"
                               value={range}
                               min={"1"}
                               max={"5"}
                               step={"1"}
                               onChange={handleRangeChange}
                        />
                    </div>
                    <div className="billing">
                        <div className="billing-item">
                            <p>
                                Monthly <span className={'discount-text'}>Billing</span>
                            </p>
                            <label className="switch">
                                <input type="checkbox"
                                       id={'yearly'}
                                       checked={isYearly}
                                        onChange={changeCheckbox}

                                />
                                <span className=" round"></span>
                            </label>
                            <p>
                                Yearly <span className={'discount-text'}>Billing</span>
                            </p>
                            <p className={'discount'}>
                                25% <span
                            className={'discount-text'}
                            >discount</span>
                            </p>
                        </div>   
                        <hr/>
                        <div className="billing-item2">
                            <ul>
                                <li>
                                    <p>
                                        Unlimited websites
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        100% data ownership
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Email reports
                                    </p>
                                </li>
                            </ul>
                            <a href="#" className="button">
                                Start my trial
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default App
