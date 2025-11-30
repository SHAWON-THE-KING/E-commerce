import React from "react";
import Section from "../Common/Section";
import ArrivalButton from "../Common/ArrivalButton";
import playstaion from '../../assets/playstaion.png';
import woman from '../../assets/woman.png';
import speaker from '../../assets/speaker.png';
import perfume from '../../assets/perfume.png';

const NewArrival = () => {
  return (
    <>
      <div className="container mx-auto pt-30 ">

        <Section section="Our Products" />

                <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 md:gap-24">
                    <h2 className="text-xl mt-4 sm:mt-7 sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                        Explore Our Products
                    </h2>
                </div>

        <section className="w-full mx-auto pt-15">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-1 md:gap-y-2 ">
            <div className="md:col-span-2">
              <div className="relative">
                <div className="absolute bottom-0 left-0">
                  <ArrivalButton
                    h={"PlayStation 5"}
                    p={"Black and White version of the PS5 coming out on sale."}
                  />
                </div>
                <img
                  src={playstaion}
                  alt="PlayStation 5"
                  className="w-full h-150 object-fill rounded-2xl shadow-lg "
                />
              </div>
            </div>

            <div className="grid grid-rows-2 gap-2 ">
              <div className="relative">
                <img
                  src={woman}
                  alt="Fashion Model"
                  className="w-full h-full mt-1 object-cover rounded-2xl shadow-lg"
                />
                                <div className="absolute bottom-0 left-0">
                  <ArrivalButton
                    h={"Women’s Collections"}
                    p={"Featured woman collections that give you another vibe."}
                  />
                </div>
              </div>
              

              <div className="grid grid-cols-2 gap-2">
                <div className="">
                  <div className="relative">
                    <div className="absolute bottom-0 left-0">
                      <ArrivalButton
                        h={"Speakers"}
                        p={"Amazon wireless speakers"}
                      />
                    </div>
                    <img
                      src={speaker}
                      alt="Amazon Echo"
                      className="w-full h-73 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute bottom-0 left-0">
                    <ArrivalButton h={"Perfume"} p={"GUCCI INTENSE OUD EDP"} />
                  </div>
                  <img
                    src={perfume}
                    alt="Gucci Perfume"
                    className="w-full h-73 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewArrival;
