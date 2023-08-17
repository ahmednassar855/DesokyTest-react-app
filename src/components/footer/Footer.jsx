import React from "react";
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill  ,BsInstagram} from "react-icons/bs";
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedinIn ,FaFacebookF} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer>
        <div className=" w-[100%] bg-[#003366] text-white flex justify-between p-10 px-32">
          <div className="left">
            <h2 className="text-6xl font-extrabold">Eldosoky</h2>
          </div>
          <div className="center text-left text-4xl ">
            <ul className="flex-col space-y-8">
              <li className="w-fit border-b-2 border-white">
                <div className="">Call us</div>
              </li>
              <li className="flex gap-4">
                <BsFillTelephoneFill/> 
                 <span>01201234567</span> 
              </li>
              <li className="w-fit border-b-2 border-white">
                <div className="">Email us</div>
              </li>
              <li className="flex gap-4">
                <HiOutlineMail/> 
                 <span>info@desoky_constructs.com</span> 
              </li>
            </ul>
          </div>

          <div className="right">
            <ul className="text-6xl flex-col space-y-8">
              <li>
                <FaLinkedinIn/>
              </li>
              <li>
                <BsInstagram/>
              </li>
              <li>
                <FaFacebookF/>
              </li>
            </ul>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;
