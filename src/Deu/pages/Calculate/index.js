import React from 'react'
import './index.css'
import { AiTwotoneLike } from "react-icons/ai";

const Calculate = () => {

    const activity = [
        'Sedentary',
        'Light Exercise',
        'Moderate Exercise',
        'Heavy Exercise',
        'Athlete',
    ];
    return (
        <div className="contents">
            <div className="container-contents">
                <div>
                    <hr />
                    {/* top container */}
                    <div className='startState'>
                        <h1>YOUR STATS</h1>
                        <div className='iconsFace'>
                            <span className='iconBtn'><AiTwotoneLike className='like' size={16} style={{ color: '#fff', paddingTop: '3px' }} />Like 58k</span>
                            <span className='iconBtn share'>Share</span>
                        </div>
                        <p><em>Questions or comments?</em> Email me at rob@tdeecalculator.net</p>

                    </div>
                    {/* form updated */}
                    <div className='state-form'>
                        <form>
                            <span>You're a</span><input className='state-input' type='text' placeholder='12' />
                            <span> y/o </span>
                            <select name="gender" id="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>

                            <span>who is </span><input className='state-input' type='text' placeholder="2" />
                            <span>cm tall & weighs </span><input className='state-input' type='text' placeholder="kg" />
                            <span>kg being  </span>
                            <select name="activity" id="activity">

                                {activity.map((h) => (
                                    <option key={h} value={h}>
                                        {h}
                                    </option>
                                ))}

                            </select>

                            <div className='fatBody'>
                                <p className='p1'>bodyfat</p>
                                <input className='state-input' />
                                <p className='p2'>optional</p>
                            </div>
                            <span>%</span>
                            <button>Re-Calculate</button>
                        </form>
                    </div>

                    {/* calories-contianer */}
                    <div className='calories-contianer'>
                        <div className='maintenance'>
                            <h3>Your Maintenance Calories</h3>
                            <div className='maintenance-calories'>
                                <div className='calories-perday'>
                                    <h1>568</h1>
                                    <p>calories per day</p>
                                </div>
                                <div className='calories-perweek'>
                                    <h1>3,973</h1>
                                    <p>calories per week</p>
                                </div>
                            </div>
                        </div>
                        <div className='maintenanceTxt'>
                            <p>Based on your stats, the best estimate for your maintenance calories is
                                <strong> 568</strong> calories per day based on the Katch-McArdle Formula, which is widely known to be the most accurate when body fat is provided. The table below shows the difference if you were to have selected a different activity level.</p>
                            <table className='maintenanceTxt-table'>
                                <tr>
                                    <td>Basal Metabolic Rate</td>
                                    <td>413 calories per day</td>
                                </tr>
                                <tr>
                                    <td>Sedentary</td>
                                    <td>495 calories per day</td>
                                </tr>
                                <tr>
                                    <td>Light Exercise</td>
                                    <td>568 calories per dayy</td>
                                </tr>
                                <tr>
                                    <td>Moderate Exercise</td>
                                    <td>640 calories per day</td>
                                </tr>
                                <tr>
                                    <td>Heavy Exercise</td>
                                    <td>712 calories per day</td>
                                </tr>
                                <tr>
                                    <td>Athlete</td>
                                    <td>413 calories per day</td>
                                </tr>

                            </table>
                        </div>
                    </div>

                    {/* Weight and score container */}
                    <div className='calories-contianer'>
                        <div className='maintenanceTxt'>
                            <h3>Ideal Weight: -110--26 kg</h3>
                            <p>
                                Your ideal body weight is <u>estimated</u> to be between -110--26 kg based on the various formulas listed below. These formulas are based on your height and represent averages so don't take them too seriously, <strong>especially if you lift weights</strong>.
                            </p>
                            <table className='maintenanceTxt-table'>
                                <tr>
                                    <td>G.J. Hamwi Formula (1964)</td>
                                    <td>-110 kg</td>
                                </tr>
                                <tr>
                                    <td>B.J. Devine Formula (1974)</td>
                                    <td>-84 kg</td>
                                </tr>
                                <tr>
                                    <td>J.D. Robinson Formula (1983)</td>
                                    <td>-59 kg</td>
                                </tr>
                                <tr>
                                    <td>D.R. Miller Formula (1983)</td>
                                    <td>-26 kg</td>
                                </tr>
                            </table>
                        </div>
                        <div className='maintenanceTxt'>
                            <h3>BMI Score: 1,875.0</h3>
                            <p>Your <strong>BMI</strong> is <strong>1,875.0</strong>, which means you are classified as <strong>Obese</strong>…</p>
                            <p>🔥 People who use this simple tool from Amazon lose significantly more weight versus people who don't.</p>
                            <table className='maintenanceTxt-table'>
                                <tr>
                                    <td>18.5 or less</td>
                                    <td>Underweight</td>
                                </tr>
                                <tr>
                                    <td>18.5 – 24.99</td>
                                    <td>Normal Weight</td>
                                </tr>
                                <tr>
                                    <td>25 – 29.99</td>
                                    <td>Overweight</td>
                                </tr>
                                <tr>
                                    <td>30+</td>
                                    <td>Obese</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    {/* musculat container*/}
                    <div className='Muscular-container'>
                        <h3>Maximum Muscular Potential</h3>
                        <p>
                            How ripped could you get? According to Martin Berkhan's formula, your maximum muscular potential is -96 kg at 5% body fat. Most people have no desire to be 5% body fat though, so you'd be <strong>-101 kg</strong> at 10% body fat & <strong>-106 kg</strong> at 15% body fat. These numbers are good goals to aim for if you are bulking up!
                        </p>
                        <h3>Macronutrients</h3>
                    </div>

                    {/* nav container */}
                    <nav className='muscular-nav'>
                        <a href="/">Maintenance</a>
                        <a href="/">Cutting</a>
                        <a href="/">bulking</a>
                        <span>30/35/35 means 30% protein, 35% fats, 35% carbs</span>
                    </nav>

                    <div className="nav-containverTxt">
                        <p>These macronutrient values reflect your maintenance calories of <strong>568</strong> calories per day.</p>
                        <div className='carb'>
                            <div className='moderate'>
                                <p>Moderate Carb (30/35/35)</p>
                                <div className='carb-container'>
                                    <div>
                                        <h3>43g</h3>
                                        <p>protein</p>
                                    </div>
                                    <div>
                                        <h3>22g</h3>
                                        <p>fats</p>
                                    </div>
                                    <div>
                                        <h3>50g</h3>
                                        <p>carbs</p>
                                    </div>
                                </div>
                            </div>
                            <div className='lower'>
                                <p>Lower Carb (40/40/20)</p>
                                <div className='carb-container'>
                                    <div>
                                        <h3>43g</h3>
                                        <p>protein</p>
                                    </div>
                                    <div>
                                        <h3>22g</h3>
                                        <p>fats</p>
                                    </div>
                                    <div>
                                        <h3>50g</h3>
                                        <p>carbs</p>
                                    </div>
                                </div>
                            </div>
                            <div className='higher'>
                                <p>Higher Carb (30/20/50)</p>
                                <div className='carb-container'>
                                    <div>
                                        <h3>43g</h3>
                                        <p>protein</p>
                                    </div>
                                    <div>
                                        <h3>22g</h3>
                                        <p>fats</p>
                                    </div>
                                    <div>
                                        <h3>50g</h3>
                                        <p>carbs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p style={{ alignSelf: "center" }}>There are 4 calories per gram of both protein and carbohydrates, and 9 calories per gram of fats.</p>

                        <p>Not sure what to eat? EatThisMuch.com will automatically generate perfect meal plans for you 💪</p>
                        <h2>Calorie Tracking Tools</h2>
                        <p>There are only 3 tools required for tracking your calories effectively…</p>

                        <div>

                        </div>
                        <h3>2 Supplements Every Man Should Take</h3>
                        <p>Want to optimize your vitamin intake? This tool will provide you with personalized recommendations.</p>
                        <hr />
                        <div>
                            <h3>Share on FB:</h3>
                        </div>

                    </div>

                </div >

            </div >

        </div >
    );
}

export default Calculate;