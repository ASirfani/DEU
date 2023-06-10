import React, { useState } from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

const Faq = () => {

    const [faqData, setFaqData] = useState([
        {
            question: 'How accurate is the TDEE estimation?',
            answer: "People who actually track their calories say my calculator is extremely accurate, and it's a big reason why it's so popular. In numbers, the calorie estimations should be within ~10% IF you are honest about your activity level. If someone needs about 2,300 calories per day, the calculator could be off by 230ish calories. Over the course of 1 month, this is equal to ~7,000 calories (2lbs). Most people, however, overestimate how much they work out (ie they choose 'Heavy Exercise' when they should choose 'Light Exercise'). You should use the TDEE calculator as a reasonable estimate to start with, and adjust your calories up or down based on your weight change over time."
        },
        {
            question: 'Which activity level should I choose?',
            answer: "There are 5 selections you can make: Sedentary, Light Exercise (1-2 days per week), Moderate (3-5 days per week), Heavy (6-7 days per week), and Athlete (2x per day). Actual scientists came up with these figures, and until a better way is proven (by scientists), this is what my calculator will use. It's also important to understand that workouts mean REAL LEGIT workouts. If you work out 7 days per week but take it super easy, this does not qualify you as 'Heavy Exercise'. You will need to be honest with yourself on which activity level you belong to. Regardless, the calculator will show you ranges in calories to help you narrow in on your calorie target. Skew low if you want to lose weight, or skew high if you want to build muscle. Or just use exactly what the calculator says, it's what most people do and you'll be far ahead of the game. After a few weeks, and based off your weight, fine-tune your calories up or down :)"
        },
        {
            question: "I'm not losing weight, why?",
            answer: "You're eating too many calories. If youwere eating at a sufficient deficit, you would have lost weight. For starters, you need to start using a food scale and tracking your calories with precision. Most people are blown away by how far off their estimates are compared to reality. Also, be aware that losing weight takes time, so be patient and pay attention to how many calories you are eating per day - and decrease your daily calories if you haven't lost any weight for 4 weeks. It's also true that your weight loss can stall. When your weight stalls, I've personally found the most effective course of action is to fast for 2-3 days. When you fast for a few days, it seems your body will finally 'let go' of those lbs (remember, this is just my opinion and this is not medical advice, see a doctor if you are having issues). Another thing you can and should do - increase your calories to your maintenance calories for a few weeks and allow your body's hormones to normalize. I advocate eating at your maintenance calories once per week when you're cutting to keep your hormones in check, then creating the caloric deficit during the other 6 days of the week."
        },
        {
            question: "I think I'm fit but my BMI score says I'm overweight",
            answer: "The Body Mass Index (BMI) formula is based on average weight for your height. People come in all shapes and sizes, just think about the football players at your school growing up. Some of them are not especially tall, yet they weigh more because they have lots of muscle. BMI has frustrated weight lifters for many years. Just understand that the more muscle you have, the more that the BMI scale with skew high. BMI was designed to be good for population groups as a whole, not individuals."
        },
        {
            question: 'What is the best macronutrient ratio to follow?',
            answer: "There is no 'best' macronutrient ratio, but what's important is that you eat enough Protein and get the vitamins and minerals that your body needs from real, whole foods. High protein is important particularly on a cut, and most people I've met enjoy eating high protein diets better anyways. My opinion of the perfect diet would probably be: Steamed Veggies with Beans, Chicken, Fish and Fruits. You don't have to be 'perfect' either… follow an awesome diet like 4 or 5 days per week and you can screw around the other 2-3 days (just don't get crazy). If you're an athlete looking for peak performance, then sticking 100% to a proper diet will be more important for you.",
        },
        {
            question: 'How accurate is the ideal weight estimation?',
            answer: "For most people, at least 1 of the formulas should be reasonably accurate. But just like with BMI, the more muscle you have compared to the average person, the less accurate it will be. Don't stress out about this number, it's a general estimate for populations at large, not individuals."
        },
        {
            question: 'Do I have to work out to lose weight?',
            answer: "Nope. You can lose almost as much weight as you want through diet alone. You will, however, be much healthier and look better if you work out. Working out is for general health, calorie intake is for weight. If you're intimidated about the idea of going to the gym and people seeing you, just focus on calories for awhile and lose weight. And then, work out at home when you're ready. I highly recommend the Beachbody programs - you don't even have to finish them to get awesome results. If you can only do 10 minutes per day, even though the full workout is 60 minutes, it's okay. Your fitness will improve until the day you can do the full 60 minutes. The key is to just get started and do something, no matter how small. 1 minute per day is better than 0."
        },

    ]);


    const toggleAnswer = (index) => {
        const updatedFaqData = [...faqData];
        updatedFaqData[index].isOpen = !updatedFaqData[index].isOpen;
        setFaqData(updatedFaqData);
    };


    return (
        <div className="contents">
            <div className="container-contents">
                <div>
                    <h1 className='about titlePage'>FAQ</h1>
                    <p className='txt'>
                        Don't see your question? Please submit your question on the <NavLink className="a" to={'/contact'}>contact page</NavLink>.
                    </p>
                    {faqData.map((faq, index) => (
                        <div className='container-question' key={index} onClick={() => toggleAnswer(index)}>
                            <div className='question'>
                                <h3>{faq.question}</h3>
                            </div>
                            {faq.isOpen && (
                                <div className='answer'>
                                    <p>{faq.answer.split(' ').map((word, index) =>
                                        (
                                            ['fine-tune', '4', 'weeks.', 'average', 'weight.', 'height.', 'lots of muscle.'].includes(word)
                                        ) ? (
                                            <strong key={index}>{word} </strong>
                                        ) : (
                                            <React.Fragment key={index}>{word} </React.Fragment>
                                        )
                                    )}</p>
                                </div>
                            )}
                        </div>
                    ))}




                </div>
            </div>
        </div>
    );
}

export default Faq;