import Image from "next/image";

function Home() {
  return (
    <>
      <section className="bg-black">
        <div className="lan_one flex justify-around p-[8vh] ">
          <div className="pt-[10vh]">
            <p className="text-white font-extrabold	font-serif text-[6vh] p-2 ">
              Go anywhere with <br /> Road
              <span className="text-[#70ABBB]">Ahead</span>
            </p>
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
