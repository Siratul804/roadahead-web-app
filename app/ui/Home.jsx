import Image from "next/image";
import Link from "next/link";
import { TiLocationArrow } from "react-icons/ti";
import { PiMapPinSimpleFill } from "react-icons/pi";

function Home() {
  return (
    <>
      <section className="bg-black">
        <div className="lan_one flex justify-around p-[8vh] ">
          <div className="pt-[16vh]">
            <p className="text-white font-extrabold	font-serif text-[6vh] p-2 ">
              Go anywhere with <br /> Road
              <span className="text-[#70ABBB]">Ahead</span>
            </p>
            <p className="text-white text-[2vh] pt-5 ">
              Wanna go outside then hop in, and watch.
            </p>
            <div className="  pt-4  ">
              <Link href="/pages/map">
                <div className="bg-white rounded-md w-full pt-3 pb-3 pl-5 pr-5 flex justify-between  ">
                  <p className="text-slate-400">Enter Location</p>
                  <TiLocationArrow size={26} color="black" />
                </div>
              </Link>
            </div>

            <div className=" relative">
              <div className="border-l-2 border-b-white h-[2vh] ml-4 "></div>
              <Link href="/pages/map">
                <div className="bg-white rounded-md w-full pt-3 pb-3 pl-5 pr-5 flex justify-between  ">
                  <p className="text-slate-400">Enter Destination</p>
                  <PiMapPinSimpleFill size={24} color="black" />
                </div>
              </Link>
            </div>
            <div className="pt-4">
              <Link href="/pages/map">
                <button class="bg-white hover:bg-gray-100 text-slate-600 hover:text-black font-bold py-2 px-4 border border-white rounded-lg w-[14vh] shadow ">
                  See map
                </button>
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/road.png"
              width={500}
              height={500}
              alt="RoadImg"
              className="rounded-sm"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
