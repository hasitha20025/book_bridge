import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaWhatsappSquare } from "react-icons/fa";

import logo from '../../../public/imges/logo/book-white-log.svg'

export default function Footer() {
  return (
    <> 
      <section id="footer " className='bg-text'>
         <div className=' text-white mx-auto container'>

            <div>
                <div className='flex items-center'>
                    <Image
                        src={logo}       
                        alt={`logoImage`}                 
                        width={50} 
                        height={50} 
                        className=""
                        
                    />
                    <p className='ml-2 leading-tight text-lg font-bold'>BookBridge</p>
                </div>
                <p>At BookBridge, we link book donors with readers and communities in need to provide access to quality literature. Help us spread education, inspiration, and a love for books.</p>
            </div>

            <div>
                <h6>Quick Links</h6>
                <p>Donate Books</p>
                <p>Request Books</p>
                <p>Review</p>
                <p>About Us</p>
            </div>

            <div>
                <h6>Contact Us</h6>
                <p>Phone: +94 11 234 5678</p>
                <p>Email: info@BookBridge.com</p>
            </div>

         </div>

         <hr />
         <div>
            <p>Terms and Conditions</p>
            <p>Copyright © 2024. BookBridge, Inc. All rights reserved</p>
            <div className='flex'>
                 <FaFacebook />
                 <FaSquareInstagram />
                 <FaLinkedin />
                 <AiFillTikTok />
                 <FaWhatsappSquare />
            </div>
         </div>

      </section>
    
    </>
  )
}
