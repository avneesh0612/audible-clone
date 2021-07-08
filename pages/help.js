import Header from '../components/Header'
import Head from 'next/head'

function Help() {
    return (
        <div>
            <Head>
                <title>Audible - Help</title>
                <link rel="icon" href="https://www.audible.in/favicon.ico" />
            </Head>
            <Header />
            <br></br>
            <br></br>
            <img className='banner-image'  src="https://res.cloudinary.com/codegowdacloud/image/upload/v1625558739/Screenshot_2021-07-06_at_1.34.21_PM_kzvyv2.png" ></img>
            <h1 className='text-center trending-text ' ><strong>What's trending</strong></h1>
            <br></br>
            <br></br>
            <div className='flex flex-row'>
                <div className='help-box first-box' >
                    <img className=' help-logo ' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1625564245/Screenshot_2021-07-06_at_3.05.57_PM_irnrza.png' ></img>
                    <h1 className='special-needs hover-text '> Troubleshooting</h1>
                    <br></br>
                </div>
                <div className='help-box' >
                    <img className=' help-logo ' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1625635764/Screenshot_2021-07-07_at_10.58.43_AM_klwxg9.png' ></img>
                    <h1 className=' hover-text cursor-pointer'> Cancel</h1>
                    <br></br>
                </div>
                <div className='help-box' >
                    <img className=' help-logo ' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1625635764/Screenshot_2021-07-07_at_10.58.53_AM_ustnxb.png' ></img>
                    <h1 className=' hover-text  cursor-pointer'>Library</h1>
                    <br></br>
                </div>
                <div className='help-box' >
                    <img className=' help-logo ' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1625635764/Screenshot_2021-07-07_at_10.59.03_AM_s2ooej.png' ></img>
                    <h1 className=' hover-text cursor-pointer'> Credits</h1>
                    <br></br>
                </div>
            </div>
            <br/>
            <br/>
            <h1 className='popular-underline-text' >Popular</h1>
            <br/>
            <div className='flex flex-row' >
                <div className='faq-div' >
                    <br/>
                    <br/>
                    <p className='text-blue-700 ml-20 faq-questions-text margin-text' >How can I cancel my membership?</p>
                    <p className='text-blue-700 ml-20 faq-questions-text'>Why have I not been charged for my monthly subscription?</p>
                    <p className='text-blue-700 ml-20 faq-questions-text' >Will your audiobooks disappear after I cancel?</p>
                    <p className='text-blue-700 ml-20 faq-questions-text' >What happens to my credits if I cancel?</p>
                    <p className='text-blue-700 ml-20 faq-questions-text' >How can I return an audiobooks?</p>
                </div>
                <div className='recommendation-div' >
                    <p className=' rec-text' ><b>Explore best-selling Indian <br/> audiobooks and award-<br/>winning stories</b></p>
                    <p className=' rec-text' >We are always adding<br/>more titles, here <span className=' text-yellow-600 ' >></span></p>
                </div>
            </div>
            <br/>
            <br/>
            <img className='banner-image cursor-pointer ' src='https://res.cloudinary.com/codegowdacloud/image/upload/v1625678883/Screenshot_2021-07-07_at_10.57.37_PM_q3pj3o.png' ></img>
            <br />
            <div className='more-help flex flex-row' >
                <h1 className='text-white font-bold more-help-text' >Need More Help</h1>
                <button className='contact-button' >Contact Us</button>
            </div>
        </div>
    )
}

export default Help
