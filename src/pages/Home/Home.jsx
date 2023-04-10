import Footer from "../footer/footer";
import "./Home.scss";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles

function Home() {
  return (
    <section className="Home" id='Home'>
      <h1 id="title" data-aos="fade-right">
        <span>Discover</span> with our
      </h1>
      <h2 id="title" data-aos="fade-up">
        integrated <span>logistics</span>
      </h2>
      <div className="background">
        <img src="../img/wallpaper.webp"></img>
      </div>

      <div className="hello">
        <div className="wave1">
          <img draggable="false" src="../img/wave.svg"></img>
        </div>

        <div className="text">
          <h2 data-aos="fade-up">Hello There</h2>
          <p data-aos="fade-up">
            Welcome to Egy Logistics Company for Logistics Services. Feel free
            to explore our services, Sea freight services, Air Freight services,
            Inland Transportation services, Door To Door services, And Customs
            Clearance Services.. Company Brochure More informatio
          </p>
          <div>
            <button data-aos="fade-right">Company Brochure</button>
            <button data-aos="fade-left">More information</button>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="wave1">
          <img draggable="false" src="../img/wave.svg"></img>
        </div>
        <div className="pilot">
          <p>SERVICES</p>
          <img src="../img/pilot.png"></img>
        </div>
        <div className="list">
          <ul>
            <li data-aos="fade-up">Seafreight</li>
            <li data-aos="fade-up">Inland Freight</li>
            <li data-aos="fade-up">Trade Facilitation.</li>
            <li data-aos="fade-up">Insurance For Cargo</li>
            <li data-aos="fade-up">Personal Belongings</li>
            <li data-aos="fade-up">Storage , Distribution</li>
          </ul>
        </div>
      </div>

      <div className="services_cards">
        <div className="cards">
          <div className="card" data-aos="fade-up">
            <p id="number" data-aos="fade-up">
              01
            </p>
            <p id="title_card" data-aos="fade-up">
              Seafreight
            </p>
            <p id="content" data-aos="fade-up">
              Ocean freight division for worldwide import. export with real.
              time tracking, cost,effective routings, and complete logistical
              solutions. Also, professional trucking with own trucks, instant
              contact, and 24hour supervision.
            </p>
          </div>

          <div className="card" data-aos="fade-up">
            <p id="number" data-aos="fade-up">
              02
            </p>
            <p id="title_card" data-aos="fade-up">
              INLAND FREIGHT
            </p>
            <p id="content" data-aos="fade-up">
              Professional trucking company with own trucks, instant contact
              through mobile phones, and 24hour supervision for all pick .ups
              and deliveries. Avoids usual delays caused by sub .containers or
              truck dealers to guarantee top quality service.
            </p>
          </div>

          <div className="card" data-aos="fade-up">
            <p id="number" data-aos="fade-up">
              03
            </p>
            <p id="title_card" data-aos="fade-up">
              {" "}
              Trade facilitation.
            </p>
            <p id="content" data-aos="fade-up">
              EGY Logistics offers customs clearing facilities for Egyptian
              ports and airports. They handle all required documents and work
              efficiently to meet customer requirements, providing affordable
              and reliable services with quality assurance, cargo tracking, and
              timely deliver
            </p>
          </div>

          <div className="card" data-aos="fade-up">
            <p id="number" data-aos="fade-up">
              04
            </p>
            <p id="title_card" data-aos="fade-up">
              Insurance for cargo
            </p>
            <p id="content" data-aos="fade-up">
              Has over the years enjoyed a close working relationship with major
              insurance agencies. This mutual respect has resulted in Freight
              Solutions being in the position of being able to offer to its
              clients all risk policies for: Marine Insurance Transport
              Insurance Storages Insurance
            </p>
          </div>
          <div className="card" data-aos="fade-up">
            <p id="number" data-aos="fade-up">
              05
            </p>
            <p id="title_card" data-aos="fade-up">
              Personal belongings{" "}
            </p>
            <p id="content" data-aos="fade-up">
              We handle every relocation with the utmost care. From individually
              packing each piece of chinaware to custom crating of industry
              standard
            </p>
          </div>

          <div className="card" data-aos="fade-up">
            <p id="number" data-aos="fade-up">
              06
            </p>
            <p id="title_card" data-aos="fade-up">
              Storage , distribution
            </p>
            <p id="content" data-aos="fade-up">
              EGY Logistics offers well equipped warehouse facilities for
              storage and distribution, with benefits including fast tracking of
              services and on ,demand inventory updates. Their services cover
              raw materials and finished goods management, as well as cross
              docking for complete cargo handling.
            </p>
          </div>
        </div>

        <div className="btn" data-aos="fade-up">
          <button>Contact us</button>
        </div>
      </div>

      <div className="Features" data-aos="fade-up">
        <p id="title_features">
          The fastest, easiest way to get products to your customers
        </p>
        <p id="content_features">
          ShipStation includes an unparalleled buying and shipping experience
          with every order you send. All the tools you need to exceed your
          customers’ expectations
        </p>

        <div className="cards">
          <div className="card" data-aos="fade-right">
            <span>1</span>
            <img src="../img/import-more-orders-green.png"></img>
            <p id="title_cards">mport more orders from more places</p>
            <p>
              Import orders from over 100 marketplaces, carts and stores - more
              than any competitor
            </p>
          </div>

          <div className="card" data-aos="fade-up">
            <span>2</span>
            <img src="../img/instantly-rate-shop-green.png"></img>
            <p id="title_cards">Instantly rate shop your favorite carriers</p>
            <p>
              Rate shop and print labels for all carriers – get the best rate
              based on desired delivery time
            </p>
          </div>

          <div className="card" data-aos="fade-left">
            <span>3</span>
            <img src="../img/brandedtracking-green.png"></img>
            <p id="title_cards">Go way beyond ordinary tracking</p>
            <p>
              Real-time geo-tracking page featuring your brand, social links and
              messaging
            </p>
          </div>
        </div>
      </div>

      <div className="clients">
        <h2 id="title_clients" data-aos="fade-up">
          Connect to more carriers and selling channels
        </h2>
        <p id="content_clients" data-aos="fade-up">
          Save time and money when shipping your online orders. Access instant
          savings of up to 84% from carriers like UPS, DHL Express, USPS, and
          more!
          <span data-aos="fade-up">Contact us for learn more</span>
        </p>
        <div className="logos">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={4}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="card">
                <img alt="client_logo" src="../img/client1.png"></img>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img alt="client_logo" src="../img/client2.svg"></img>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img alt="client_logo" src="../img/logo_client.png"></img>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img alt="client_logo" src="../img/client3.png"></img>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img alt="client_logo" src="../img/client4.png"></img>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img alt="client_logo" src="../img/client5.png"></img>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <img alt="client_logo" src="../img/client6.png"></img>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <p id="content" data-aos="fade-up">
          one of the leading and reputed shipping companies in Egypt established
          in 2013 with more than 15 years experience in the Logistics field.
          Well cooperated with many famous shipping companies and shipping
          liners, we have played a sound performance in certain routes through
          our valueadded logistics planning and special rates. We are making an
          outstanding achievement in providing rates and services
        </p>
        <button data-aos="fade-up">Read more</button>
      </div>
      <Footer></Footer>
    </section>
  );
}

export default Home;
