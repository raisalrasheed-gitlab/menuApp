import { MdAddIcCall } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiFacebook } from 'react-icons/fi';
import { CiTwitter } from 'react-icons/ci';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import image from '../../assets/Logo.png';
const Footer = () => {
  return (
    <>
      <div className="xl:h-[250px] bg-black grid xl:grid-cols-3 justify-center items-center justify-items-center gap-4 pb-2 ">
        <div className="w-[330px] h-[128px] md:w-[373px] md:h-[134px] border-2 border-white rounded-2xl flex flex-col justify-evenly items-center order-2 ">
          <h1 className="text-blue-500 font-medium">CONNECT WITH US</h1>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="flex items-center gap-2">
              <MdAddIcCall className="text-yellow-600 text-xl" />
              <h2 className="text-yellow-700">+91 9567843340</h2>
            </h3>
            <h3 className="flex items-center gap-2">
              <MdOutlineMailOutline className="text-yellow-600 text-xl" />
              <h2 className="text-yellow-700 capitalize">
                info@deepnetsoft.com
              </h2>
            </h3>
          </div>
        </div>
        <div className="w-[330px] h-[128px] md:w-[373px] md:h-[134px]  border-2 border-white rounded-2xl order-1 md:order-2 justify-center flex flex-col gap-2 items-center relative">
          <img src={image} className="absolute -top-10"></img>
          <div>
            <h2 className="text-blue-500 text-[30px]">
              DEEP<span className="text-white">NET</span>
              <span className="text-gray-500">SOFT</span>
            </h2>
            <div className="text-gray-200 flex justify-center gap-2">
              <FiFacebook />
              <CiTwitter />
              <FaYoutube />
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="w-[330px] h-[128px] md:w-[373px] md:h-[134px] border-2 border-white rounded-2xl flex flex-col justify-evenly items-center order-3">
          <h1 className="text-blue-500 font-medium">FIND US</h1>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="flex items-center gap-2">
              <FaLocationDot className="text-yellow-600 text-xl" />
              <h2 className="text-yellow-700 w-50">
                First floor, Geo infopark, Infopark EXPY, Kakkanad
              </h2>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
