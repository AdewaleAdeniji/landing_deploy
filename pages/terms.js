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
    const Page_Title = 'Terms and Conditions';
    return (
        <Layout pageTitle={`${Page_Title} : Moneymie, digital bank for African migrants`}>
            <HeaderNavBar/>
            <div className="col-md-12 herosection">
            <Bounce left>
                <div className="col-md-6 termspage herotextarea">
                
                <div className="hero-title-text">
                    {Page_Title}
                </div>
                <div className="hero-sub-text">
                    
                        <p>
                        When you access www.moneymie.com, our mobile applications, and our other online services and websites (collectively, the “Platform”) you are agreeing to be bound by the following Terms and Conditions, as well as the Moneymie Privacy Policy linked here, all of which may be updated by us from time to time. Please review them carefully when you visit our websites and mobile applications.
                        </p>
                        <b>General Information</b>
                        <p>
                        Moneymie website and mobile applications are operated and managed by Moneymie LLC, a limited liability company registered in the United States with its headquarter in Texas. In general, references to “Moneymie” on the Platform refer to “Moneymie LLC”. However, for purposes of these Terms and Conditions, the term “Moneymie” refers collectively to Moneymie LLC as well as their respective affiliates, partners, agents, and employees.
                        </p>

                        <b>Electronic Fund Transfers (“EFTs”) and Account Balances. 
                        </b>
                        <p>By creating a Moneymie Account and initiating bank deposits or withdrawals (i.e., EFTs), you agree to the Terms of Service and Privacy Policy of our financial software provider, Sila Inc. (together, the “Sila ToS”). You must comply with the Sila ToS when creating or using your Moneymie Account. The Sila ToS may be modified from time to time, and the governing version is incorporated by reference into these Terms of Service. Any term not defined in this [paragraph, section, or addendum] but defined in the Sila ToS assumes the meaning as defined in the Sila ToS. IT IS YOUR RESPONSIBILITY TO READ AND UNDERSTAND THE SILA ToS BECAUSE IT CONTAINS TERMS AND CONDITIONS CONCERNING YOUR MONEYMIE ACCOUNT, INCLUDING BUT NOT LIMITED TO LIMITATIONS, REVERSAL, AND ARBITRATION PROVISIONS, AND YOUR RELEVANT RIGHTS AND LIABILITIES.
                        </p>

                        <b>Use of the Platform</b>
                        <p>
                        The Platform is intended solely for individuals who are age 18 or older. Any access to or use of the Platform by anyone under 18 is unauthorized, unlicensed, and in violation of these Terms and Conditions. By accessing or using the Platform, you represent and warrant that you are 18 or older.
                        The Platform is only intended for use by persons located in the United States. Moneymie makes no representation that the Platform is appropriate or available for use outside the United States. Similarly, Moneymie makes no representations that accessing the Platform from locations outside the United States is legal or permissible under local law.
                        By using the Moneymie platform and its services, you warrant that you are aware some of the products and services provided by us are provided by other companies referred to herein as “Partners” with their own agreements that might be applicable to you. The use of the Partner’s services shall be governed by Partner Agreements that constitute a separate agreement between you and our Partners.
                        </p>
                        <b>Your Responsibility</b>
                        <p>
                        You agree as a condition to using;’ Moneymie services, to complete the necessary KYC requirements and supply accurate data while setting up your Moneymie account. Moneymie’s product and service offerings will be provided to you upon completion and verification of your account through our mobile or web applications.

                        As a Moneymie user and customer, you are responsible for choosing and safeguarding PIN/password to your account. You are advised not to divulge confidential information relating to your Moneymie account such as debit or credit cards to any third party.  You bear the sole responsibility for the use of your Moneymie account (including for fraudulent purposes. If you suspect that your Moneymie account details have been compromised, you must contact us via email at support@moneymie.com or using the chat function on the Moneymie App and website.
                        </p>
                        <b>Promotion and Reward</b>
                        <p>
                        Moneymie promotional offers and rewards are available to users who meet the promotion requirements and comply with the Moneymie Terms and Conditions. These offers and rewards are subject to limitations, modifications and termination without notice. Moneymie in its sole discretion reserves the right to delay, remove, cancel or revoke any customer’s reward or promotional offer.
                        </p>
                        <b>
                        Access to the Platform
                        </b>
                        <p>
                        Moneymie reserves the right, in its sole discretion, to deny you access to the Platform, or any portion of the Platform, without notice and without reason. For the avoidance of doubt, your access to and use of the publicly available portions of the Platform shall be governed by these Terms and Conditions, and the provision of any. You are not allowed to resell Moneymie services to any third party.
                        External Links
                        The Platform links to certain content created by third parties that are not affiliated with Moneymie. Moneymie is not responsible for such content and does not endorse or approve it. Such content may contain terms and conditions, privacy provisions, confidentiality provisions, or other provisions that differ from the terms and conditions applicable to the Platform. Moneymie assumes no responsibility or liability whatsoever for the accuracy, reliability, or opinions contained in such content. If you decide to access such content, you do so at your own risk.
                        </p>
                        <b>
                        Conditions of Use
                        </b>
                        <p>
                        You agree that you will comply with all applicable laws, including, without limitation, privacy laws, intellectual property laws, anti-spam laws, export control laws, tax laws, and regulatory requirements. You further agree that you will use the Platform solely for your personal, non-commercial use and will not attempt to interfere with the functioning of the Platform in any way.
                        </p>
                        <b>
                        Access and Interference
                        </b>
                        <p>
                        <i>You agree not to engage in any of the following:</i>
                        <ul>
                        <li>
                            Use any robot, spider, scraper, deep link or other similar automated data gathering or extraction tools, program, algorithm or methodology to access, acquire, copy or monitor the Platform or any portion of the Platform, other than via software that sends queries to the Platform to index or rank a website for search and location purposes, without Moneymie’s express written consent, which may be withheld in Moneymie’s sole discretion.
                        </li>
                        <li>
                        Use or attempt to use any engine, software, tool, agent, or other device or mechanism (including without limitation browsers, spiders, robots, avatars or intelligent agents) to navigate or search the Platform, other than the search engines and search agents available through the Platform and other than generally available third-party web browsers (such as Microsoft Explorer).
                        </li>
                        <li>
                        Post or transmit any file which contains viruses, worms, Trojan horses, or any other contaminating or destructive features, or that otherwise interfere with the proper working of the Platform.
                        </li>
                        <li>
                        Attempt to decipher, decompile, disassemble, or reverse-engineer any of the software comprising or in any way making up a part of the Platform.
                        </li>
                        </ul>
                        </p>
                        <b>
                        Intellectual Property Rights and Licences
                        </b>
                        <p>
                        Our license granted to you to use the Moneymie services upon agreeing and abiding by our Terms and Conditions are non-exclusive, non-transferable, non-sublicensable and revocable. 
                        All ownership to the Software, applications, websites or, to the extent applicable, other parts of the Services and any copies and derivative works thereof (regardless of form or media in or on which the original or other copies may exist), including but not limited to patents, design rights, copyrights, trademarks, trade-secrets and proprietary know-how, shall be owned by and vested in Moneymie (or our Partners, to the extent applicable), or any third party licensors, and nothing in these Terms shall constitute or be interpreted as a transfer of any such rights from Moneymie to you or anyone else.
                        </p>
                        <b>
                        Secured Areas
                        </b>
                        <p>
                        Access to and use of password protected and/or secure areas of the Platform is restricted to authorized users only. Unauthorized persons attempting to access these areas of the website may be subject to legal action.
                        </p>
                        <b>
                        Communications with Moneymie
                        </b>
                        <p>
                        Authorized employees or agents of Moneymie may monitor and record all or portions of your telephone calls, emails, text messages, chats and other communications with Moneymie for quality control, customer service, employee training, security, legal, compliance, and other lawful purposes. You hereby consent to such recording. That consent is ongoing and need not be confirmed prior to, or during, such monitoring or recording, except to the extent applicable law expressly requires otherwise. Moneymie may also archive your communications with Moneymie for regulatory and other purposes.
                        </p>
                        <b>
                        Limited Liability
                        </b>
                        <p>
                        NEITHER Moneymie NOR ANY OF ITS OFFICERS, DIRECTORS, EMPLOYEES OR AGENTS SHALL BE LIABLE IN ANY WAY FOR ANY DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, INDIRECT, SPECIAL, PUNITIVE, CONSEQUENTIAL, OR INCIDENTAL DAMAGES (INCLUDING, WITHOUT LIMITATION, LOST PROFITS, COST OF PROCURING SUBSTITUTE SERVICE, OR LOST OPPORTUNITY) ARISING OUT OF OR IN CONNECTION WITH THE PLATFORM OR THE USE OF THE PLATFORM OR A LINKED WEBSITE (INCLUDING BUT NOT LIMITED TO THE DELAY OR INABILITY TO USE THE PLATFORM OR A LINKED WEBSITE). THIS LIMITATION SHALL APPLY REGARDLESS OF WHETHER THE DAMAGES ARE FORESEEABLE OR WHETHER MONEYMIE HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. THE FOREGOING LIMITATION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW IN THE APPLICABLE JURISDICTION. IN NO EVENT SHALL Moneymie’s CUMULATIVE LIABILITY TO YOU EXCEED U.S. $100.
                        </p>
                        <b>
                        Disclosure of Information
                        </b>
                        <p>
                        Moneymie reserves the right to disclose any of the information (as contained under Moneymie Privacy Policy linked here) supplied to us while using any of our services in compliance with applicable State and Federal laws, court order and legal investigations.
                        </p>
                        <b>
                        No Warranties
                        </b>
                        <p>
                        To the maximum extent permitted by applicable law, all products, services, and content on the website or App are provided “as is” without warranty of any kind, express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, security, or accuracy. Moneymie specifically disclaims any duty to update the information on the Platform and it is your responsibility to evaluate the accuracy, reliability, timeliness, and completeness of any information available on the Platform. Moneymie does not guarantee that the Platform will operate error-free or that the platform, its servers, or the content are free of computer viruses or similar contamination or destructive features. If you choose to use the Platform, or rely on the information presented on it, you do so solely at your own risk. Additionally, you also understand that we cannot guarantee that information or communications transmitted in relation to the use of Services will not be subject to interception by law enforcement officials or other third parties.
                        Some states or jurisdictions do not allow the exclusion of certain warranties. Accordingly, some of the above exclusions may not apply to you.
                        </p>
                        <b>
                        Indemnification and Hold Harmless
                        </b>
                        <p>
                        You agree to indemnify, defend, and hold Moneymie harmless from any liability, loss, claim and expense, including attorney’s fees, related to your violation of these Terms and Conditions or use of the Platform. Nothing in these terms of use shall affect any non-waivable statutory rights that apply to you. Moneymie reserves the right to assume the exclusive defense and control (at your expense) of any matter that is subject to indemnification under this section. In such a case, you agree to cooperate with any reasonable requests assisting Moneymie’s defense of such matter.
                        </p>
                        <b>
                        Choice of Law
                        </b>
                        <p>
                        All Website activity or use and these Terms and Conditions are governed by the laws of the United States of America and the applicable laws of the State of Texas State, without regard to conflict of law principles.
                        </p>
                        <b>
                        Waiver and Severability
                        </b>
                        <p>
                        Any waiver of any provision contained in these Terms and Conditions shall not be deemed to be a waiver of any other right, term, or provision of these Terms and Conditions. If any provision in these Terms and Conditions is determined to be wholly or partially invalid, illegal or unenforceable, such provision shall be enforced to the extent it is legal and valid and the validity, legality and enforceability of the remaining provisions shall in no way be affected or impaired thereby.
                        </p>
                        <b>
                        Assignment
                        </b>
                        <p>
                        You may not assign these Terms and Conditions (by operation of law or otherwise) without the prior written consent of Moneymie, and any prohibited assignment will be null and void. Moneymie may assign these Terms and Conditions or any rights hereunder without your consent.
                        </p>
                        <b>
                        Platform and Terms Subject to Change
                        </b>
                        <p>
                        We reserve the right to change these Terms and Conditions by posting a revised agreement. If you dont agree with these changes, you must stop using the Platform. The information on the Platform is subject to change without notice.
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