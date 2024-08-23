'use client';

import BoderBtn from "./ui/boderBtn";
import ReviewCard from "./ui/reviewCard";
import user_1 from '../../../public/imges/users/users/pic.jpg'

export default function Reviews() {
    function handleClickReview(): void {
        
    }
  return (
    <div>
       <h1 className=" text-center text-text my-5 text-4xl font-bold leading-tight">What They <span className="text-primary">Say</span>?</h1> 
       <p className="text-center">At [Your Website Name], we are passionate about the power of books to inspire, educate, and bring joy. Our mission is to make quality literature accessible to everyone by facilitating book donations and requests. We believe that every book has the potential to change lives, and we’re here to help make that happen.</p>  
       <div className="flex justify-center items-center mt-4">
            <BoderBtn name={"Write A Review"} fun={handleClickReview }/>
       </div> 
        
       <h2 className="text-3xl font-semibold leading-snug text-center text-text my-5">Reviews</h2>

       <div className="scroll-container">
            <div className="scroll-content gap-10">
                <ReviewCard name={"Hasitha"}
                    comment={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                    image={user_1.src} 
                    date={"2024/08/01"}/>

                <ReviewCard name={"Hasitha"}
                    comment={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                    image={user_1.src} 
                    date={"2024/08/01"}/>
                
                <ReviewCard name={"Hasitha"}
                    comment={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                    image={user_1.src} 
                    date={"2024/08/01"}/>
                
                <ReviewCard name={"Hasitha"}
                    comment={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
                    image={user_1.src} 
                    date={"2024/08/01"}/>
            </div>
        </div>


      

    </div>
  )
}
