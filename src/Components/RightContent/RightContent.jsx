import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import zone_1 from '../../assets/qZone1.png'
import zone_2 from '../../assets/qZone2.png'
import zone_3 from '../../assets/qZone3.png'

const RightContent = () => {
  return (
    <div>
      <h1 className="font-bold">Login With</h1>
      <div className=" border-2 flex justify-center rounded-lg mt-2 hover:bg-slate-100 hover:text-cyan-400 py-2">
        <div className=" flex items-center gap-3 ">
          <FaGoogle></FaGoogle>
          <h1>Login With Google</h1>
        </div>
      </div>
      <div className=" border-2 flex justify-center rounded-lg mt-2  hover:bg-slate-100 hover:text-cyan-400 py-2">
        <div className=" flex items-center gap-3">
          <FaGithub></FaGithub>
          <h1>Login With Github</h1>
        </div>
      </div>

      <div className="mt-7">
        <h1 className="mb-5 font-bold">Find Us On</h1>
        <div className=" flex items-center gap-3 border-2 p-4">
          <div className="bg-slate-300 p-2 rounded-full">
            <FaFacebook></FaFacebook>
          </div>
          <h1>Facebook</h1>
        </div>
        <div className=" flex items-center gap-3 border-x p-4">
          <div className="bg-slate-300 p-2 rounded-full">
            <FaInstagram></FaInstagram>
          </div>
          <h1>Instagram</h1>
        </div>
        <div className=" flex items-center gap-3 border-2 p-4">
          <div className="bg-slate-300 p-2 rounded-full">
            <FaTwitter></FaTwitter>
          </div>
          <h1>Twitter</h1>
        </div>
      </div>

      <div className="p-4 bg-slate-200 rounded-lg mt-5">
        <h1 className="font-bold">Q-Zone</h1>

        <div className="mt-5 mb-5">
          <img className="w-full" src={zone_1} alt="" />
        </div>
        <div className="mb-5">
          <img className="w-full" src={zone_2} alt="" />
        </div>
        <div>
          <img className="w-full" src={zone_3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightContent;
