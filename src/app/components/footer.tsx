import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import logo from '../../../public/imges/logo/book-white-log.svg';
import Link from 'next/link';

export default function Footer() {
  const phoneNumber = '+94784375524';
  
  return (
    <>
      <section id="footer" className='bg-text pt-5'>
        <div className='container mx-auto text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center pb-4 px-4 sm:px-8'>

          <div className='text-center md:text-left'>
            <div className='flex justify-center md:justify-start items-center'>
              <Image
                src={logo}
                alt={`logoImage`}
                width={50}
                height={50}
                className=""
              />
              <p className='pl-2 text-base md:text-xl font-medium leading-relaxed'>BookBridge</p>
            </div>
            <p className='mt-2 text-justify'>At BookBridge, we link book donors with readers and communities in need to provide access to quality literature. Help us spread education, inspiration, and a love for books.</p>
          </div>

          <div className='text-center md:text-left'>
            <h6 className='text-base md:text-xl font-medium leading-relaxed my-4'>Quick Links</h6>
            <div className="space-y-2">
              <Link href="/" className="block">Donate Books</Link>
              <Link href="/" className="block">Request Books</Link>
              <Link href="/" className="block">Categories</Link>
              <Link href="/" className="block">Review</Link>
              <Link href="/" className="block">About Us</Link>
            </div>
          </div>

          <div className='text-center md:text-left'>
            <h6 className='text-base md:text-xl font-medium leading-relaxed my-4'>Contact Us</h6>
            <div className='space-y-2'>
              <p className='py-1'>Phone: +94 11 234 5678</p>
              <p>Email: info@BookBridge.com</p>
              <div className='flex justify-center md:justify-start gap-5 pt-2'>
                <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook size={25} /></a>
                <a href="" target="_blank" rel="noopener noreferrer"><FaSquareInstagram size={25} /></a>
                <a href="" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25} /></a>
                <a href="" target="_blank" rel="noopener noreferrer"><AiFillTikTok size={25} /></a>
                <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer"><FaWhatsappSquare size={25} /></a>
              </div>
            </div>
          </div>

        </div>

        <div className='container mx-auto text-white'>
          <hr className='border-1 border-slate-200 my-2' />
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-3 px-4 sm:px-8'>
            <p className='text-center sm:text-start'>Terms and Conditions</p>
            <p className='text-center sm:text-end'>Copyright © 2024. BookBridge, Inc. All rights reserved</p>
          </div>
        </div>
      </section>
    </>
  );
}
