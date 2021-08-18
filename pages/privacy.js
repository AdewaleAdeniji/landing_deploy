import Head from 'next/head'
import Image from 'next/image'
import React, {  useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Layout from './components/Layout';
import HeaderNavBar from './components/Header';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Footer from './components/footer';

const Terms = (props) => {
    const Page_Title = 'Privacy and Policy';
    return (
        <Layout pageTitle={`${Page_Title} : Moneymie, digital bank for African migrants`}>
            <HeaderNavBar/>
            <div className="col-md-12 herosection">
            <Bounce left>
                <div className="col-md-6 termspage herotextarea">
                
                <div className="hero-title-text">
                    {Page_Title}
                </div>
           <div className='hero-sub-text'>

                                                
                    <p>
                    Welcome to Moneymie. We work hard to protect your personal information and ensure your information is kept private and secure. The following privacy policy outlines the types of personal information that Moneymie LLC collects, including through Moneymie’s websites (www.moneymie.com), and our mobile applications for iOS and Android devices. It also explains why we collect your information and how we use it. By using this website and our applications, you accept our Terms of Use and Privacy Policy. 
                    </p>

                    <b>Our Commitment</b>
                    <p>
                    According to Federal regulations, we are required to tell you how we collect, share, and protect your personal information. When you visit our website at www.moneymie.com, Moneymie application and any other services accessed through the Moneymie App or website, we are committed to:
                    <ul>
                    <li>Ensuring the safety and privacy of your personal information</li>
                    <li>Allowing you to chose and opt-out of marketing programs </li>
                    <li>
                    Never sell your personal information.
                    </li>
                    </ul>

                    To ensure the safety of the personal information you have provided to us from authorized access and use, Moneymie works diligently to protect your personal information. We employ several physical and electronic safeguards to keep your information safe. We use the strongest available browser encryption, store all of our data on servers in secure facilities, and implement systematic processes and procedures for securing and storing data. We limit access to your personal and financial information to only those employees with authorized access who need to know the information in order to perform their jobs, and we require third parties who perform services for Moneymie to agree to keep your information confidential. Furthermore, if you choose to close your account or your account is terminated with us, we will continue to adhere to the privacy policies and practices outlined here. If you maintain a Moneymie account that you access through our website or mobile application, you are responsible for protecting and maintaining the confidentiality of your account and password and restricting access to your computer and/or device.
                    </p>

                    <b>Electronic Fund Transfers (“EFTs”) and Account Balances</b>
                    <p> Moneymie LLC has partnered with financial services software company Sila Inc. to offer you EFTs. When you create a Moneymie Account, you might also be prompted to sign up for a Sila Account. You authorize Moneymie to share your identity and banking information with Sila Inc. to open and support your Moneymie Account. It is your responsibility to make sure the data you provide us is accurate and complete. You must comply with Sila Inc.’s privacy policy (the “Sila Privacy Policy”) when creating or using your Moneymie Account. The Sila Privacy Policy may be modified from time to time, and the governing version is incorporated by reference into this Privacy Policy. Any term not defined in this [paragraph, section, or addendum] but defined in the Sila Privacy Policy assumes the meaning as defined in the Sila Privacy Policy.
                    </p>
                    <b>What we Collect and Share</b>
                    <p>
                    <i>The personal information we collect from you may include:</i>
                    <ul>
                        <li>Your name, address, date of birth, government-issued identification, Social Security Number, BVN or any uniquely identifying information.</li>
                        <li>Your email address, phone number and details of your device (device model, operating system, device ID)</li>
                        <li>Identification documents such as National ID, Photograph of yourself, Utility Bill and other verification documents provided.</li>
                        <li>Technical information such as Internet Protocol (IP) address, login information, browser information, App version, mobile network information etc.</li>
                        <li>If enabled, location information using GPS technology and IP address.</li>
                        <li>Information of your usage of the Moneymie App.</li>
                        <li>Transaction information such as inflow and outflow of payments as well as the date, time, exchange rate, beneficiary details, IP address of sender and receiver, payment references and payment method.</li>
                        <li>If enabled, access your contacts information and media files.</li>
                        <li>Your browser Cookies and Pixels </li>
                        <li>Customer support and social media correspondence.</li>
                        <li>Other information provided while completing forms, surveys, promotion, competition and other reasons.</li>
                    </ul>

                    </p>
                    <b>Legal Basis for Collecting and Sharing Your Information</b>
                    <ul>
                        <li>The personal information collected from you is needed to provide you with our products and services. This information helps us to constantly innovate and improve the quality of services offered to you.</li>
                    <li>In some cases, we have a legal obligation to collect and share some of your personal information in responses to a court order and legal investigations.</li>
                    <li>We sometimes collect and share your personal information in joint marketing or service improvement programs with other organizations because we have legitimate reasons to do so and is reasonable when balanced against your privacy rights.</li>
                    <li>By using the Moneymie App or when you checked a box giving your consent for us to use your personal information.</li>
                    <li>We collect and share your personal information in order to offer you our unique products and services, ensure the safety and security of your Moneymie account, respond to court orders and legal investigations, or report to credit bureaus.</li>
                    </ul>

                    <b>How Your Information is Used</b>
                    <p>
                    To provide you with an excellent service experience, update you with new features and services and meet our legal obligations, we collect your personal information.
                    </p>
                    <b>
                    Providing and Improving Our Services
                    </b>
                    <p>
                    The personal information collected upon signing up to any of the Moneymie products and services as part of our KYC process is used to verify your identity and decide whether our services can be provided to you. When you become a Moneymie user and customer, your information is used to facilitate our service offerings. We also use your information to develop new products and to provide you with customized services and promotional contents that help you have a unique service experience. Additionally, your personal information is used to contact you via phone or email for customer support services. Correspondence via email, chat or phone calls may be archived and recorded for internal training and quality assurance purposes. 
                    </p>
                    <b>
                    Fraud Protection
                    </b>
                    <p>
                    We use the information provided by you and technical information from your device to protect against financial frauds, confirm your eligibility for our services and comply with financial crime laws.
                    </p>
                    <b>
                    Marketing and Promotions
                    </b>
                    <p>
                    Personal information provided to us by you is used to make customized service recommendations based on previous services you have used. This information may or may not include promotions from our partners that might be of interest to you and location-based services.<br/>
                    By using our services, you accept to be contacted by postal services, email and phone with customized promotions and offers. You can opt out of receiving some or all of these promotions.<br/>
                    Your information may also be used for internal analytics purposes to measure the impact of our promotions and advertisements. This information may include information provided by you and technical information from your device.
                    </p>
                    <b>
                    Service Optimization
                    </b>
                    <p>
                    Your supplied information is used to manage, troubleshoot, research, and test features and services offered on Moneymie. We use these activities to constantly improve your service experience and ensure the security of the Moneymie platform. 
                    <br/>
                    Cookies and Pixels are also used to measure viewing of a webpage and often are used in connection with cookies. We use these technologies to customize Moneymie and improve your experience with the site. We may store some personal information in a cookie and/or pixel, such as the site that you visited immediately prior to visiting Moneymie and relevant financial information that allows us to enhance your user experience and for marketing purposes. Additionally, we may use a cookie and/or pixel that only stores anonymous information to track visitors across websites or devices to better customize our marketing and advertising campaigns. <br/>
                    Cookies, pixels, and similar technologies are not required for site functionality. You are not required to accept any cookies or pixels to use this site. However, refusing to accept cookies or pixels will make the use of Moneymie more cumbersome and less accessible.
                    </p>
                    <b>
                        Limit to Sharing
                    </b>
                    <p>
                    In accordance with Federal law, you only have the right to limit sharing for information about your creditworthiness, partners and non-partner promotion and marketing.
                    </p>
                    <b>
                    How You Can Access or Change Your Personal Information That We Have Collected
                    </b>
                    <p>
                    Once you have registered with Moneymie, you can access your profile, review the information that is stored, and revise that information. If you have any problems, you may also contact us at support@moneymie.com.
                    </p>
                    <b>
                    Other Important Information
                    </b>

                    <b>Former Customers</b>
                    <br/>
                    <p>
                    If you are a former customer, these policies also apply to you; we treat your information with the same care as we do information about current customers.
                    </p>
                    <b>
                    How We Respond to Do Not Track Signals
                    </b>
                    <p>
                    Online tracking is the collection of data about an individual’s Internet activity used to deliver targeted advertisements and for other purposes. Customers using certain modern browsers have the ability to activate a “Do Not Track” signal. Moneymie does not currently respond to the “Do Not Track” signal.
                    </p>
                    <b>
                    How You Accept This Policy
                    </b>
                    <p>
                    By using and continuing to use the Moneymie websites, mobile apps and/or services, or otherwise providing us with personal information (such as an email address) you agree to the terms and conditions of this privacy policy and any updates thereto. This policy may change from time to time. This is our entire and exclusive privacy policy and it supersedes any earlier version. Our Terms and Conditions take precedence over any conflicting privacy policy provision.
                    </p>
                    <b>
                    Changes to the Policy
                    </b>
                    <p>
                    We may modify this privacy policy over time without prior notice by posting a new version of this privacy policy, which is your responsibility to review. Any changes to the privacy policy will be reflected on this page and will become effective immediately upon posting. Notification of changes to this privacy policy will also be communicated to customers. We encourage you to periodically review this privacy policy to stay informed about how we are protecting the personally identifiable information we collect. If changes to the privacy policy are material, we will do our best to notify you via email or through a notification on the site or app. Please check the effective date below to determine if there have been any changes since you have last reviewed the Moneymie privacy policy.
                    </p>
                    <b>
                    Children
                    </b>
                    <p>
                    Our service is not directed towards anyone under the age of 18. If a parent or guardian becomes aware that his or her child under the age of 18 has created an account with Moneymie and/or provided us with personally identifiable information, please contact us at support@moneymie.com. Additionally, if we become aware at any point that a child under the age of 18 is using our service, we will terminate his or her account.
                    </p>
                    <b>
                    California Privacy Rights
                    </b>
                    <br/>
                    If you are a resident of the State of California, under the California Consumer Privacy Act (CCPA), you have the right to request information on how to exercise your disclosure choice options from companies conducting business in California.  Specifically:

                    <ul>
                        <li>Exercising the right to know. You may request, up to twice in a 12-month period, the following information about the personal information we have collected about you during the past 12 months:<br/>
                            <ul>
                                <li>The categories and specific pieces of personal information we have collected about you;</li>
                                <li>The categories of sources from which we collected the personal information;</li>
                                <li>The business or commercial purpose for which we collected the personal information;</li>
                                <li>The categories of third parties with whom we shared the personal information; and</li>
                                <li>The categories of personal information about you that we disclosed for a business purpose, and the categories of third parties to whom we disclosed that information for a business purpose.</li>
                            </ul>
                        </li>
                        <li>Exercising the right to delete. You may request that we delete the personal information we have collected from you, subject to certain limitations under applicable law.</li>
                        <li>Exercising the right to opt-out from a sale. You may request to opt-out of any “sale” of your personal information that may take place.
                    Non-discrimination. The CCPA provides that you may not be discriminated against for exercising these rights.</li>

                    </ul>
                    <p>
                    To submit a request to exercise any of the rights described above, you may contact Moneymie either via email to support@moneymie.com or contact us via postal mail, proper postage prepaid, at:<br/>
                    Moneymie LLC<br/>
                    16701 Tomcat Dr, Round Rock, <br/>
                    Texas 78681<br/>
                    Attn: Your California Privacy Rights<br/>
                    Please indicate your preference as to how you would like us to respond to your request (i.e., email or postal mail).  Your request should specify your full name and email address you used in submitting your personal information to us
                    All requests sent via postal mail must be labelled “Your California Privacy Rights” on the envelope or postcard and clearly stated on the actual request. For all requests, please include your name, street address (if you would like a response via postal mail), city, state, and zip code. We may need to verify your identity before responding to your request, such as verifying that the email address or contact information from which you send the request matches your email address or contact information that we have on file. Authentication based on a government-issued and valid identification document may be required. We will not accept requests via telephone or fax. We are not responsible for notices that are not labelled or sent properly or do not have complete information.
                    </p>
                    <b>
                    Your Rights as a Vermont Resident
                    </b>
                    <p>
                    We do not share nonpublic personal financial information we collect about Vermont residents to non-affiliated third parties except for our everyday business purposes or as otherwise permitted by law. If you wish to revoke any authorization to share your nonpublic personal financial information, which you have provided to us by entering into our Customer Agreement, please contact us at <a href="mailto:support@moneymie.com">support@moneymie.com</a>. Please note, however, that we will not be able to provide you with services through Moneymie without the ability to share this financial information.
                    </p>
                    <b>Transfer of Information</b>
                    <p>We may transfer personal information to other countries, for example, for customer service or to process transactions.</p>
                    <b>Questions</b>
                    <p>
                    If you have any questions on the privacy policy, please contact us at:
                    <a href="mailto:support@moneymie.com">support@moneymie.com</a>
                    </p>



                            
                        </div>
            </div>
            </Bounce>
            
            </div>
            <Footer/>
        </Layout>
    )
}
export default Terms;