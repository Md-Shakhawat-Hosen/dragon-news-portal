import Header from "../../Components/Header/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../../Components/Navbar/Navbar";
import LeftContent from "../../Components/LeftContent/LeftContent";
import RightContent from "../../Components/RightContent/RightContent";
import MiddleContent from "../../Components/MiddleContent/MiddleContent";


const Home = () => {
    return (
      <div className="max-w-screen-xl mx-auto px-4">
        <Header></Header>

        <div className="bg-slate-300 pr-5 rounded-lg mt-7">
          <div className="flex">
            <span className="bg-red-500 text-white p-4 rounded-lg">Latest</span>
            <Marquee>
              <p>
                Match Highlights: Germany vs Spain — as it happened ! Match
                Highlights: Germany vs Spain as... বর্ষা মৌসুমে ভোগান্তি বাড়ে।
                নদীর স্রোতে সাঁকো ভেসে যায়। কলার ভেলা হয় নদী পারাপারের একমাত্র
                অবলম্বন।
              </p>
            </Marquee>
          </div>
        </div>

        <Navbar></Navbar>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <LeftContent></LeftContent>
          </div>
          <div className="col-span-2">
            <h1 className="font-bold mb-5">Dragon News Home</h1>
            <MiddleContent></MiddleContent>
          </div>

          <div className="">
            <RightContent></RightContent>
          </div>
        </div>
      </div>
    );
};

export default Home;