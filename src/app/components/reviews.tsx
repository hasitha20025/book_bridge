'use client';

import ReviewCard from "./ui/reviewCard";
import user_1 from '../../../public/imges/users/users/pic.jpg';
import FeedBackForm from "./ui/feedBackForm";

export default function Reviews() {

    return (
        <section id="reviews">
            <div className="">
                <h1 className="text-center text-text my-5 text-2xl md:text-4xl font-bold leading-tight">
                    What They <span className="text-primary">Say</span> ?
                </h1>
                <p className="text-center text-base sm:text-lg">
                    At [Your Website Name], we are passionate about the power of books to inspire, educate, and bring joy...
                </p>
                
                <FeedBackForm/>

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
