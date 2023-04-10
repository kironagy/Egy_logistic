import Footer from '../footer/footer'
import './contact.scss'


function Contact(){
    return(
        <div className='Contact'>
            <div className='content'>
                    <div className='details'>
                                <h2>Contact Support</h2>

                                <p>
                                    <p> 12 El Fariq Mahmoud Shokry St., Floor 1 Flat 105, </p>
                                    <p>Hadayek el kobba, Cairo Behind Ministry Of Defense </p>
                                    <p>& Military Production.Hadayek el </p>
                                    <p> kobbaCairo11646Egypt. </p>
                                    <p>0224442316 - 0224442358 - 01223035758</p>
                                    <p><b>Website</b>: http://www.egylogistics.com</p>
                                    <p><b>Email</b>: info@egylogistics.com</p>
                                </p>
                                <div className='buttons'>
                                    <img src='../img/facebook.svg'></img>
                                    <img src='../img/whatsapp.svg'></img>
                                    <img src='../img/twitter.svg'></img>
                                </div>
                    </div>

                    <div className='Resources'>
                        <div>
                        <p id='bold1'>Resources</p>
                        <p id='bold'>IMPORTANT RESOURCES</p>
                        <p>Incoterms</p>
                        <p>Container Types and Sizes</p>
                        <p>Customs Terms</p>
                        <p>Special Shipping Terms</p>
                        <p>Other Important Resources</p>
                        <p id='bold'>CONTACT EGY LOGISTICS</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                        <p>Help center</p>
                        <p>Life Support</p>
                        </div>
                    </div>
            </div>
        

            <Footer></Footer>
        </div>
    )
}

export default Contact