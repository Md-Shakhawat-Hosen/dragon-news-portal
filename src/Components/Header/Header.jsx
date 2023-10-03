import logo from '../../assets/logo.png'
import moment from "moment";
const Header = () => {
    return (
      <div className="flex justify-center">
        <div className='space-y-4'>
          <img src={logo} alt="" />
          <p className="text-center">Journalism Without Fear or Favour</p>
          <p className='text-center'>{moment().format("LLLL")}</p>
        </div>
      </div>
    );
};

export default Header;