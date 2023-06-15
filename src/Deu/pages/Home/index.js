import React, { useContext, useState } from 'react';
import './index.css';
import imgs from '../../../images/chart.png';
import { MyContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    // const height = [
    //     '4ft 7in', '4ft 8in', '4ft 9in', '4ft 10in', '4ft 11in',
    //     '5ft 0in', '5ft 1in', '5ft 2in', '5ft 3in', '5ft 4in',
    //     '5ft 5in', '5ft 6in', '5ft 7in', '5ft 8in', '5ft 9in',
    //     '5ft 10in', '5ft 11in', '6ft 0in', '6ft 1in', '6ft 2in',
    // ];

    const activity = [
        'Sedentary (office job)',
        'Light Exercise (1-2 days/week)',
        'Moderate Exercise (3-5 days/week)',
        'Heavy Exercise (6-7 days/week)',
        'Athlete (2x per day)',
    ];

    const navigate = useNavigate()
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [selectedHeight, setSelectedHeight] = useState('');
    const [selectedActivity, setSelectedActivity] = useState('');
    const [bodyFat, setBodyFat] = useState('');
    const {setWeights,setHeights,setSedentary,setLight,setBmrs,setHeavy,setAthlete,setModerate} = useContext(MyContext);
    

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };

    const handleHeightChange = (e) => {
        setSelectedHeight(e.target.value);
    };

    const handleActivityChange = (e) => {
        setSelectedActivity(e.target.value);
    };

    const handleBodyFatChange = (e) => {
        setBodyFat(e.target.value);
    };

    const calculateTDEE = (e) => {
        e.preventDefault();
            const weightInKg = parseInt(weight, 10);
            const heightInCm = parseInt(selectedHeight, 10);
            const ageInYears = parseInt(age, 10);

            setHeights(heightInCm)
            setWeights(setWeights)
    
            //  (10 * weight in kg) + (6.25 * height in cm) - (5 * age in years) + 5
            // Calculate BMR based on the selected gender
            let bmr;
            if (gender === 'male') {
                bmr = 66 + 13.75 * weightInKg + 5 * heightInCm - 6.75 * ageInYears;
            } else {
                bmr = 655 + 9.56 * weightInKg + 1.85 * heightInCm - 4.68 * ageInYears;
            }
    
        setBmrs(bmr);
        let pal;
        for (let index = 0; index < activity.length; index++) {
            switch (activity[index]) {
                case 'Sedentary (office job)':
                    pal = 1.2;
                    setSedentary(Math.round(pal * bmr))
                    break;
                case 'Light Exercise (1-2 days/week)':
                    pal = 1.375;
                    setLight(Math.round(pal * bmr))
                    break;
                case 'Moderate Exercise (3-5 days/week)':
                    pal = 1.55;
                    setModerate(Math.round(pal * bmr))
                    break;
                case 'Heavy Exercise (6-7 days/week)':
                    pal = 1.725;
                    setHeavy(Math.round(pal * bmr))
                    break;
                case 'Athlete (2x per day)':
                    pal = 1.9;
                    setAthlete(Math.round(pal * bmr))
                    break;
                default:
                    pal = 1.2;
                    setSedentary(Math.round(pal * bmr))
            }
        }

        navigate("/calculate");
    };

    return (
        <div className="content">
            <div className="container-content">
                <h2 className="txtTitle">Learn How Many Calories You Burn Every Day</h2>
                <p className="txtp">
                    <strong>Use the DEU calculator to learn your Daily Energy Usage</strong>, a measure of how many calories you burn per day. This calorie calculator will also display your BMI, BMR, Macros & many other useful statistics!
                </p>
                <form className="container-form" onSubmit={calculateTDEE}>
                    <div className="contanier-form-btn">
                        <span className="spTxt">Imperial</span>
                        <span className="spTxt"> Metric</span>
                    </div>
                    <div className="container-form-input">
                        <label className="radio">
                            <span className="spTxt title">Gender</span>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={gender === 'male'}
                                onChange={handleGenderChange}
                            />
                            <span className="spTxt">male</span>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={gender === 'female'}
                                onChange={handleGenderChange}
                            />
                            <span className="spTxt">female</span>
                        </label>
                        <label className="age">
                            <span className="spTxt title">Age</span>
                            <input type="text" name="age" value={age} onChange={handleAgeChange} />
                        </label>
                        <label className="weight">
                            <span className="spTxt title">Weight</span>
                            <input type="text" placeholder="lbs" name="weight" value={weight} onChange={handleWeightChange} />
                        </label>
                        <label className="height">
                            <span className="spTxt title">Height</span>
                            <input type="text" placeholder="cm" name="heigt" value={selectedHeight} onChange={handleHeightChange} />
                       
                            {/* <select name="height" id="height" value={selectedHeight} onChange={handleHeightChange}>
                                {height.map((h) => (
                                    <option key={h} value={h}>
                                        {h}
                                    </option>
                                ))}
                            </select> */}
                        </label>
                        <label className="activity">
                            <span className="spTxt title">Activity</span>
                            <select
                                name="activity"
                                id="activity"
                                value={selectedActivity}
                                onChange={handleActivityChange}
                            >
                                {activity.map((h) => (
                                    <option key={h} value={h}>
                                        {h}
                                    </option>
                                ))}
                            </select>
                        </label>
                        <label className="bodyFat">
                            <span className="spTxt title">Body Fat</span>
                            <input type="text" name="bodyFat" value={bodyFat} onChange={handleBodyFatChange} placeholder="15" />
                            <span className="spTxt" style={{ marginLeft: '5px' }}> % (optional)</span>
                        </label>

                        <input type="submit" value="Calculate" />
                    </div>
                </form>
                <hr style={{ color: '#000', width: '100%' }} />
                <p className='txtp' >
                    <small>
                        Questions? Email me at Irfan@deu.com
                    </small>
                    <br />
                    <small>
                        ...and don't forget to check the FAQ
                    </small>
                </p>
            </div>

            <div className="container-outConten">
                <div className="outContent">
                    <div>
                        <h2 className='txtTitle'>How DEU Is Calculated</h2>
                        <p className='txtp' >
                            Your Daily Energy Usage (DUE) is an estimation of how many calories
                            you burn per day when exercise is taken into account. It is
                            calculated by first figuring out your Basal Metabolic Rate, then
                            multiplying that value by an activity multiplier.
                        </p>
                        <p className='txtp'>
                            Since your BMR represents how many calories your body burns when at rest, it is
                            necessary to adjust the numbers upwards to account for the calories
                            you burn during the day. This is true even for those with a sedentary
                            lifestyle. Our TDEE calculator uses the best formulas and displays
                            your score in a way that's easy to read and meaningful.
                        </p>
                    </div>
                    <div>
                        <img src={imgs} alt="Logo" />
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Home;
