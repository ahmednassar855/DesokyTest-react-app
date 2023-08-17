import React from "react";
import screen1 from "../../../public/screen1.png";
import screen2 from "../../../public/screen2.png";
import screen3 from "../../../public/screen3.png";
import screen4 from "../../../public/2.png";

const Home = () => {
  return (
    <>
      <div className="w-11/12 m-auto pt-28">
        <section className="grid grid-cols-2 gap-6  justify-center  pt-10 pb-10">
          <div className="leftSection grid-cols-2  pb-16 px-[100px]">
            <h1 className="text-[#003366] text-6xl font-extrabold">
              Constructing the future just the way you envision it
            </h1>
            <p className="text-2xl font-bold pt-10 ">
              Discover a world where craftsmanship meets innovation - welcome to
              a construction experience that transforms dreams into reality.
            </p>
          </div>
          <div className="rightSection flex space-x-6">
            <div className="">
              <img src={screen1} alt="" className="w-[100%] h-[100%]" />
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="">
                <img src={screen2} alt="" className="w-[100%] h-[100%]" />
              </div>
              <div className="">
                <img src={screen3} alt="" className="w-[100%] h-[100%]" />
              </div>
            </div>
          </div>
        </section>


{/* about us */}
        <section className="aboutUs w-11/12 m-auto pt-10">
          <div className="pb-6">
            <h2 className="font-extrabold text-2xl  w-fit border-b-4 border-black">
              About us
            </h2>
          </div>

          <div className="flex gap-4">
            <div className="w-1/3 gap-6 justify-center">
              <img src={screen4} alt="" className="h-[100%] w-[100%]" />
            </div>
            <div className="w-2/3">
              <div className="pb-16">
                <p className="text-2xl font-bold">
                  Desoky Industrial Constructions Company is specialized in the
                  field of industrial construction and infrastructure.
                  Established in 2005, the company has been commited to
                  delivering the highest levels of quality and innivation in the
                  construction industry. The company possesses a team of
                  experienced engineers and technicianfa-spincapable of
                  executing divers and complex projects.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-[#003366] p-4 py-6 text-center text-white text-2xl font-bold">
                  <div>
                    <h3>200</h3>
                    <h3>Engineers</h3>
                  </div>
                </div>
                <div className=" rounded-xl bg-[#003366] p-4 py-6  text-center text-white text-2xl font-bold">
                  <div>
                    <h3>1500</h3>
                    <h3>Workers</h3>
                  </div>
                </div>
                <div className=" rounded-xl bg-[#003366] p-4 py-6  text-center text-white text-2xl font-bold">
                  <div>
                    <h3>150</h3>
                    <h3>Residential Project</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* galler */}
        <section className="galler w-11/12 m-auto pt-10">
          <div className="pb-6">
            <h2 className="font-extrabold text-2xl  w-fit border-b-4 border-black">
              Gallery
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3 grid-cols-2">
            <div className="h-[400px] w-[400px] relative">
              <img
                src={screen1}
                alt=""
                className="h-[100%] w-[100%] rounded-xl"
              />
              <p className="absolute bottom-10 font-bold text-4xl text-white p-4">
                Harbor View Residences
              </p>
            </div>

            <div className="h-[400px] w-[400px] relative">
              <img
                src={screen1}
                alt=""
                className="h-[100%] w-[100%] rounded-xl"
              />
              <p className="absolute bottom-10 font-bold text-4xl text-white p-4">
                City Height plaza
              </p>
            </div>

            <div className="h-[400px] w-[400px] relative">
              <img
                src={screen1}
                alt=""
                className="h-[100%] w-[100%] rounded-xl"
              />
              <p className="absolute bottom-10 font-bold text-4xl text-white p-4">
                Skyline tower
              </p>
            </div>

            <div className="h-[400px] w-[400px] relative">
              <img
                src={screen1}
                alt=""
                className="h-[100%] w-[100%] rounded-xl"
              />
              <p className="absolute bottom-10 font-bold text-4xl text-white p-4">
                Metroloft Tower
              </p>
            </div>
          </div>
        </section>

        {/* teamwork */}

        <section className="pt-16">
          <div className="pb-6">
            <h2 className="font-extrabold text-2xl  w-fit border-b-4 border-black">
              Team Work
            </h2>
          </div>
          <div className="card flex justify-center ">
            <div className=" text-center text-white bg-[#003366] w-[600px] relative p-11 m-auto rounded-[80px]">
              <img
                src={screen2}
                alt=""
                className="w-[140px] h-[140px] absolute top-0 -translate-y-[50%] left-[50%] -translate-x-[50%] rounded-full outline-4 border-4 border-white"
              />
              <h1 className="text-6xl font-extrabold pt-6">Mahmoud Farouk</h1>
              <h2 className="text-4xl font-bold py-6">Technician - 27</h2>
              <p className="text-2xl text-left">
                The heart of any industial endever is in the mechanics
              </p>
            </div>
          </div>
        </section>

        {/* collaboratio  */}
        <section className="pt-16">
          <div className="pb-6">
            <h2 className="font-extrabold text-2xl  w-fit border-b-4 border-black">
              Collaboration
            </h2>
          </div>
          <div className="brands flex justify-between gap-7">
            <div className="w-[200px] h-[200px] bg-gray-500"></div>
            <div className="w-[200px] h-[200px] bg-gray-500"></div>
            <div className="w-[200px] h-[200px] bg-gray-500"></div>
            <div className="w-[200px] h-[200px] bg-gray-500"></div>
          </div>
        </section>

        {/* future work */}
        <section className="aboutUs w-11/12 m-auto py-20">
          <div className="pb-6">
            <h2 className="font-extrabold text-2xl  w-fit border-b-4 border-black">
              Future work
            </h2>
          </div>

          <div className="flex gap-4">
            <div className="w-1/3 gap-6 justify-between">
              <img src={screen4} alt="" className="h-[100%] w-[100%]" />
            </div>
            <div className="w-2/3 px-28">
              <div className="pb-16 ">
                <h1 className="text-6xl font-extrabold pb-5">Sky Nova Tower</h1>
                <p className="text-3xl font-bold">
                  SkyNova tower is a visionary architecturla marvel that transcends the boundires of moden design and sustaib=nable living. Soaring high above the skyline, skynova is more than just a tower; it's a symbol of the furture.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div>
                    <h3 className="text-3xl font-bold">Collaboration with</h3>
                    <div className="w-[200px] h-[200px] bg-gray-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
