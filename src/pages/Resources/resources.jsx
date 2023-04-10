import Footer from '../footer/footer';
import './resources.scss'

function Resources(){
    return(
        <div className='Resources'>
            <div className='content'>
                <h2>Useful Resources</h2>
                <p>
                Egy Logistics Company: One of the best freight co. in Egypt. EGY Logistics offers best 
                International freight services for Air, Sea, And customs clearance with a very competitive 
                rates.
                <br></br>
                <br></br>

                Egy Logistics provides Useful Resources.: A growing number of organizations and 
                institutions operate their Web sites. We are pleased to provide links to some of them. Below 
                you will find a list of links that will connect you to various government and industry web sites 
                with useful information on logistics, transportation, international trade, import/export issues, 
                and outsourcing trends.

                <br></br>
                <br></br>

                Useful information and resources about logistics, transportation, international trade, import 
                and export issues!
                </p>
                <div className='list'>
                    <ul>
                        <li>Incoterms</li>
                        <li>Glossary of Terms</li>
                        <li>Special Shipping Terms</li>
                        <li>Other Important Resources</li>
                    </ul>
                </div>
            </div>
     
            <Footer></Footer>
        </div>
    )
}

export default Resources;