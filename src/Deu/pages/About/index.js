import React from 'react';
import './index.css'
import { BiLike } from "react-icons/bi";
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div className="contents">
            <div className="container-contents">
                <div>
                    <h1 className='about titlePage'>About</h1>
                    <p className='txt'>
                        Hi there! My name is AS-Irfani &amp; welcome to <strong>DEU.com</strong> My friend
                        johar and I co-own this website together. We both became interested in
                        fitness from a relatively young age, and when I began to learn
                        programming as a hobby, Jake convinced me to build this site because he
                        thought it would be a fun project! He was so right… I love running this
                        site and I LOVE reading all the email I get from folks saying how much
                        it has helped them. If you are one of those people I'd love to hear from
                        you too.
                    </p>
                    <p className='txt' style={{ marginTop: '10px' }} >
                        It might not seem like it, but DEU.com has thousands of lines
                        of code powering it and it's quite popular! Jake likes design and I do
                        all the coding as well as make sure the site is fast. If it's running
                        slow or you have any suggestions, please <NavLink className="a" to={'/contact'}>contact us</NavLink>.
                    </p>
                    <h2 className='about subTitle'>About This Site</h2>
                    <p className='txt'>
                        <NavLink className="a" to={'/'}>DEU.com</NavLink> currently gets about 500,000+ visitors per month
                        (and growing rapidly!) from other sites who link to us, from people who
                        share it on Facebook, &amp; from the search engines. If you find it
                        useful we hope you will share it around too!</p>
                    <div className='icon'>
                        <span className='lsbtn'><BiLike style={{ marginLeft: '3px' }} /><span>Like</span></span>
                        <span className='lsbtn'>Share</span>
                        <span className='txtbtn'>&lt;-- this really helps!</span>
                    </div>

                    <p className='txt'>
                        Disclosure: DEU.com is a participant in the Amazon Services
                        LLC Associates Program, an affiliate advertising program designed to
                        provide a means for sites to earn advertising fees by advertising and
                        linking to amazon.com. If you buy any products from Amazon after
                        clicking a link on this website, we will earn a small commission which
                        helps us pay for the costs associated with running this site. Please
                        read our <NavLink className="a" to={'./privacy'}>Privacy Policy</NavLink>.
                    </p>
                    <h2 className='about subTitle2 '>Formulas Used</h2>
                    <p className='txt'>
                        At its core, DEU.com uses the <a className='a' href='https://pubmed.ncbi.nlm.nih.gov/15883556/'>Mifflin-St Jeor</a> formula to
                        calculate an estimate of your <a className='a' href='https://en.wikipedia.org/wiki/Basal_metabolic_rate'>Basal Metabolic</a> Rate, and then we adjust
                        the numbers to take your activity level into account.
                    </p>
                    <h3 className='about subTitle3'>Mifflin-St Jeor Equation</h3>
                    <div className='formulas'>
                        <p className='txt'>
                            Mifflin = (10.m + 6.25h - 5.0a) + s
                            <br />
                            m is mass in kg, h is height in cm, a is age in years, s is +5 for males
                            and -151 for females
                        </p>
                    </div>
                    <h3 className='about subTitle3'>Katch-McArdle Equation</h3>
                    <p className='txt'>
                        Optionally, if you fill out the body fat percentage field, the calculator
                        will instead use the Katch-McArdle Formula, which is the most accurate
                        formula of all. If you don't know your body fat %, you can pick up a pair
                        of cheap body fat calipers on Amazon, or find a place (try University
                        health departments) that offers DEXA scans. DEXA scans are the gold-standard
                        in determining your body fat percentage and generally cost between $50 - $100.
                    </p>
                    <div className='formulas'>
                        <p className='txt'>
                            Katch = 370 + (21.6 * LBM)
                            <br />
                            where LBM is lean body mass
                        </p>
                    </div>
                    <h3 className='about subTitle3'>Revised Harris-Benedict Equation</h3>
                    <p className='txt'>
                        The revised Harris-Benedict equation has been in use since 1984, and we
                        calculate this as well for those who want it.
                    </p>
                    <div className='formulas'>
                        <p className='txt'>
                            Harris-Benedict = (13.397m + 4.799h - 5.677a) + 88.362 (MEN)
                            <br />
                            Harris-Benedict = (9.247m + 3.098h - 4.330a) + 447.593 (WOMEN)
                            <br />
                            m is mass in kg, h is height in cm, a is age in years
                        </p>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default About;
