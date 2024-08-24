'use client';

import  { useState } from 'react';
import BoderBtn from "./ui/boderBtn";
import ReviewCard from "./ui/reviewCard";
import user_1 from '../../../public/imges/users/users/pic.jpg';
import { Dialog } from '@headlessui/react';

export default function Reviews() {
  const [isOpen, setIsOpen] = useState(false);  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [name,setName]=useState("");
  const [feedback,setfeedback]=useState("");

  function handleSubmit(e: { preventDefault: () => void; }) {
    
    console.log(name,feedback);
  }


    return (
      <section id="reviews">
        <div className="">
            <h1 className="text-center text-text my-5 text-2xl md:text-4xl font-bold leading-tight">
                What They <span className="text-primary">Say</span> ?
            </h1> 
            <p className="text-center text-base sm:text-lg">
                At [Your Website Name], we are passionate about the power of books to inspire, educate, and bring joy...
            </p>  
            <div className="flex justify-center items-center mt-4">

                <BoderBtn name={"Write A Review"} fun={openModal} />

                <Dialog 
                    open={isOpen} 
                    onClose={closeModal} 
                    className="fixed inset-0 z-10 overflow-y-auto"
                >
                    <div className="min-h-screen px-4 text-center">
                    {/* Manually create the overlay */}
                    <div 
                        className="fixed inset-0 bg-black opacity-30" 
                        aria-hidden="true" 
                        onClick={closeModal}
                    />

                    <span 
                        className="inline-block h-screen align-middle" 
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>

                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                        <Dialog.Title 
                        as="h3" 
                        className="text-lg font-medium leading-6 text-gray-900 text-center"
                        >
                        Give your Feedbacks
                        </Dialog.Title>

                        <form className="mt-4" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label 
                                htmlFor="name" 
                                className="block text-sm font-medium text-gray-700"
                                >
                                Name
                                </label>
                                <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder='jone doe'
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required 
                                />
                            </div>

                            <div className="mb-4">
                                <label 
                                htmlFor="feedback" 
                                className="block text-sm font-medium text-gray-700"
                                >
                                Feedback
                                </label>
                                <textarea 
                                id="feedback" 
                                name="feedback" 
                                rows={4} 
                                placeholder='Write your feedback...'
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                required 
                                />
                            </div>

                            <div className="flex justify-center">
                                
                                <BoderBtn name={"Submit"} fun={() =>(handleSubmit)} />
                            </div>
                        </form>
                    </div>
                </div>
                </Dialog>
                

            </div> 
            
            {/* <h2 className="text-xl md:text-3xl font-semibold leading-snug text-center text-text my-5">Reviews</h2> */}

            <div className="scroll-container overflow-x-auto my-10">
                <div className="scroll-content flex gap-4">
                    <ReviewCard name={"Hasitha"}
                        comment={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                        image={user_1.src} 
                        date={"2024/08/01"} />

                    <ReviewCard name={"Hasitha"}
                        comment={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                        image={user_1.src} 
                        date={"2024/08/01"} />
                    
                    <ReviewCard name={"Hasitha"}
                        comment={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                        image={user_1.src} 
                        date={"2024/08/01"} />
                    
                    <ReviewCard name={"Hasitha"}
                        comment={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                        image={user_1.src} 
                        date={"2024/08/01"} />
                    
                    <ReviewCard name={"Hasitha"}
                        comment={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                        image={user_1.src} 
                        date={"2024/08/01"} />
                    
                    <ReviewCard name={"Hasitha"}
                        comment={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                        image={user_1.src} 
                        date={"2024/08/01"} />
                    
                    <ReviewCard name={"Hasitha"}
                        comment={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                        image={user_1.src} 
                        date={"2024/08/01"} />

                        
                </div>
            </div>
        </div>
     </section>
    )
}
