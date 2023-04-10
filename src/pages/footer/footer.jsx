import './footer.scss'
function Footer(){
    return(
        <footer>
            <div className='logo'>
                <img src='../img/logo.png'></img>
            </div>
            <div className='links'>
                <ul>
                    <p>Egy Logistics Co.</p>
                    <li>
                    About Egy Logistics
                    </li>
                    <li>
                    Company Teamwork
                    </li>
                    <li>
                    Vision and Mission
                    </li>
                    <li>
                    Available Jobs
                    </li>
                </ul>

                <ul>
                    <p>Main Services.</p>
                    <li>
                        Sea & Air Freight
                    </li>
                    <li>
                        Door-To-Door services
                    </li>
                    <li>
                        Inland Transportation services
                    </li>
                    <li>
                        Customs Clearance Services
                    </li>
                </ul>

                <ul>
                    <p>Useful Resources</p>
                    <li>
                        Incoterms
                    </li>
                    <li>
                        Glossary of Terms
                    </li>
                    <li>
                        Special Shipping Terms
                    </li>
                    <li>
                        Other Important Resources
                    </li>
                </ul>

                <ul>
                    <p>Contact Support</p>
                    <li>
                        FAQ
                    </li>
                    <li>
                        Contact
                    </li>
                    <li>
                        Help center
                    </li>
                    <li>
                        Life Support
                    </li>
                </ul>
            </div>


            <div className='copyRight'>
                <p><b>Egy Logistics</b> Company for Logistics Services © Copyright All rights reserved for their respective owners</p>
                <p><b>Powered By</b> Egy Logistics Company.</p>
            </div>
    </footer>
    )
}

export default Footer;