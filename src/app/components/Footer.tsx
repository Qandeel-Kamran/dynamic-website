import React from "react"
import {LuSendHorizontal} from 'react-icons/lu'
import Image from 'next/image'
import { FiFacebook } from 'react-icons/fi';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer(){
    return(
        <>
        <div className="w= [127px] h-[440px] pt-[10%] bg-[#000000] flex justify-evenly
        " >
            <div><h2 className="h-24px text-[24px] mb-4 w-[118px] font-inter font-[700] text-[#FAFAFA] 3% " > Exclusive </h2>
            <h2 className="w-[101px] h-[28px] mb-3 font-poppins font-[500] text-[20px]  text-[#FAFAFA] " >Subscribe</h2>
            <p className="font-poppins text-[16px] mb-3 font-normal w-[226px] text-[#FAFAFA] h-[24px]  " >Get 10% OFF your first order</p>
            <button className="flex bg-[#000000] text-[#FAFAFA] w-[217px] gap-[10px] pl-[16px] pt-[12px] pb-[12px] border-[1.5px] h-[48px] rounded-[4px] " ><input type="e-mail" placeholder="Enter Your e-mail" className="bg-[#000000] text-[#FAFAFA] w-[150px]  " /><LuSendHorizontal className="w-[20px] h-[18px] " /></button>
            </div>

            <div><h2 className="w-[81px] h-[28px] font-poppins font-[500px] text-[20px] text-[#FAFAFA] mb-4  " >Support</h2>
            <p className="w-[175px] h-[48px] text-[#FAFAFA] font-poppsin text-[16px] mb-3 font-normal " > 111 Bijoy, Dhaka, DH 1515, Bangladesh. </p>
            <p className="w-[175] h-[24] mb-3 text-[#FAFAFA] 
            font-poppsin text-[16px] font-normal"  >exclusive@gmail.com</p>
            <p className="w-[175] h-[24] text-[#FAFAFA] 
            font-poppsin text-[16px] font-normal " >+12345-12345-9900</p>
            </div>

            <div><h2 className="w-[85px] h-[28px] font-poppins font-[500px] text-[20px] text-[#FAFAFA] mb-4  " >Account</h2>
            <p className="w-[94] h-[24] text-[#FAFAFA] 
            font-poppsin text-[16px] font-normal " >My Account</p>
            <p className="w-[123] h-[24] text-[#FAFAFA] 
            font-poppsin text-[16px] font-normal " >Login/Register</p>
            <p className="w-[35px] h-[24] text-[#FAFAFA] 
            font-poppsin text-[16px] font-normal " >Cart</p>
            <p className="w-[61px] h-[24] text-[#FAFAFA] 
            font-poppsin text-[16px] font-normal " >Wish List</p>
            <p className="w-[41] h-[24] text-[#FAFAFA] 
            font-poppsin text-[16px] font-normal " >Shop</p>
            </div>

            <div>
            <h2 className="w-[101px] h-[28px] font-poppins font-[500px] text-[20px] text-[#FAFAFA] mb-4  " >Quick Link</h2>
            <p className="w-[109px] h-[24] text-[#FAFAFA] 
            font-poppsin text-[16px] font-normal " >Privacy Policy</p>
            <p className="w-[105px] h-[24] text-[#FAFAFA] 
            font-poppsin text-[16px] font-normal " >Terms of use</p>
            <p className="w-[32px] h-[24] text-[#FAFAFA] 
            font-poppsin text-[16px] font-normal " >FAQ</p>
            <p className="w-[66px] h-[24] text-[#FAFAFA] 
            font-poppsin text-[16px] font-normal " >Contact</p>
            </div>

            <div>
            <h2 className="w-[142px] h-[28px] font-poppins font-[500px] text-[20px] text-[#FAFAFA] mb-4  " >Download App</h2>
            <p className="w-[194px] h-[24] text-[#FAFAFA] 
            font-poppsin text-[12px] font-normal opacity-[70%] " >Save $3 with app New User Only.</p>
           <div className="flex gap-3" > <Image src='/Qrcode 1.png' alt='QR Code' width={100} height={100} className="w-[80px] h-[80px] " ></Image>
           <div>
           <Image src='/download-appstore.png' alt='download app store' width={100} height={100} className="w-[108px] h-[38px] rounded-[4px] mt-1 " ></Image>
           <Image src='/GooglePlay.png' alt='Google play ' width={100} height={100} className="w-[108px] h-[38px] rounded-[4px] mt-1 " ></Image>
           </div>
           </div>

           <div className="flex gap-[24px] w-[168px] h-[24px] text-[#FAFAFA] mt-3  " >
           <FiFacebook className="w-[24px] h-[24px] "  />
           <FaTwitter className="w-[24px] h-[24px] "  />
           <FaInstagram className="w-[24px] h-[24px] "  />
           <FaLinkedin className="w-[24px] h-[24px] "  />
           </div>
           
            </div>
        </div>
        </>
    )
}
