import React from "react";
import Slider from "react-slick";
import Img from "../../assets/Side.png";
import AbCard from "./AbCard";

import Photo from "../../assets/Services.png";
import Photo1 from "../../assets/Services1.png";
import Photo2 from "../../assets/Services2.png";
import Photo3 from "../../assets/Services3.png";

import AbCard2 from "./AbCard2";
import Ph from "../../assets/man1.png";
import Ph2 from "../../assets/woman2.png";
import Ph3 from "../../assets/man2.png";
import SupportDetails from "../../Components/Supports/SupportDetails";

const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <><div className="container ">


            <div className="md:flex justify-between">
                <div className=" p-5 md:pt-65 md:w-[525px] flex flex-col gap-10 ">
                    <h1 className="text-[54px] font-semibold leading-16 tracking-[6%] ">
                        Our Story
                    </h1>
                    <p className="leading-7">
                        Launced in 2015, Exclusive is South Asia’s premier online shopping
                        makterplace with an active presense in Bangladesh. Supported by wide
                        range of tailored marketing, data and service solutions, Exclusive
                        has 10,500 sallers and 300 brands and serves 3 millioons customers
                        across the region.{" "}
                    </p>
                    <p className="leading-7">
                        Exclusive has more than 1 Million products to offer, growing at a
                        very fast. Exclusive offers a diverse assotment in categories
                        ranging from consumer.
                    </p>
                </div>

                <div className="py-34">
                    <img src={Img} alt="" />
                </div>
            </div>


            <div className="flex flex-col items-center gap-5  md:flex md:flex-row md:gap-0 md:justify-between">
                <AbCard Photo={Photo} h1={"10.5k "} p={"Sallers active our site"} />
            <AbCard Photo={Photo1} h1={"33k "} p={"Mopnthly Produduct Sale"} />
                <AbCard
                    Photo={Photo2}
                    h1={"45k "}
                    p={"Customer active in our site"}
                />
                <AbCard
                    Photo={Photo3}
                    h1={"25k "}
                    p={"Anual gross sale in our site"}
                />
            </div>

            {/* slider content */}
            <div className="sl py-34 ">
                <div className="slider-container p-[30px] md:p-0">
                    <Slider className="" {...settings}>
                        <div>
                            <AbCard2 Img={Ph} h1={"Tom Cruise"} p={"Founder & Chairman"} />
                        </div>
                        <div>
                            <AbCard2 Img={Ph2} h1={"Emma Watson"} p={"Managing Director"} />
                        </div>
                        <div>
                            <AbCard2 Img={Ph3} h1={"Will Smith"} p={"Product Designer"} />
                        </div>
                        <div>
                            <AbCard2 Img={Ph} h1={"Tom Cruise"} p={"Founder & Chairman"} />
                        </div>
                        <div>
                            <AbCard2 Img={Ph2} h1={"Emma Watson"} p={"Managing Director"} />
                        </div>
                        <div>
                            <AbCard2 Img={Ph3} h1={"Will Smith"} p={"Product Designer"} />
                        </div>
                        <div>
                            <AbCard2 Img={Ph} h1={"Tom Cruise"} p={"Founder & Chairman"} />
                        </div>
                        <div>
                            <AbCard2 Img={Ph2} h1={"Emma Watson"} p={"Managing Director"} />
                        </div>
                        <div>
                            <AbCard2 Img={Ph3} h1={"Will Smith"} p={"Product Designer"} />
                        </div>
                        <div>
                            <AbCard2 Img={Ph} h1={"Tom Cruise"} p={"Founder & Chairman"} />
                        </div>
                        <div>
                            <AbCard2 Img={Ph2} h1={"Emma Watson"} p={"Managing Director"} />
                        </div>
                        <div>
                            <AbCard2 Img={Ph3} h1={"Will Smith"} p={"Product Designer"} />
                        </div>
                        <div>
                            <AbCard2 Img={Ph} h1={"Tom Cruise"} p={"Founder & Chairman"} />
                        </div>
                        <div>
                            <AbCard2 Img={Ph2} h1={"Emma Watson"} p={"Managing Director"} />
                        </div>
                        <div>
                            <AbCard2 Img={Ph3} h1={"Will Smith"} p={"Product Designer"} />
                        </div>
                        <div>
                            <AbCard2 Img={Ph} h1={"Tom Cruise"} p={"Founder & Chairman"} />
                        </div>
                        <div>
                            <AbCard2 Img={Ph2} h1={"Emma Watson"} p={"Managing Director"} />
                        </div>
                        <div>
                            <AbCard2 Img={Ph3} h1={"Will Smith"} p={"Product Designer"} />
                        </div>
                    </Slider>
                </div>
            </div>

            <div className="">
                <SupportDetails />
            </div>
        </div>
            {/* slider dot styling */}
            <style jsx>{`
        .slick-dots {
          bottom: -80px !important;
        }

        .slick-dots li.slick-active button:before {
          opacity: 100 !important;
          color: #9d1515 !important;
        }
        .slick-dots li button:before {
          font-size: 12px !important;
        }
      `}</style>
        </>
    );
};

export default About;
