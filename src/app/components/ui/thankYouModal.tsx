import { Dialog } from '@headlessui/react';
import BoderBtn from "./boderBtn";
import { PiSealCheckFill } from "react-icons/pi";

export default function ThankYouModal({ isOpen, closeModal }: { isOpen: boolean, closeModal: () => void }) {
    return (
        <>
            <Dialog
                open={isOpen}
                onClose={closeModal}
                className="fixed inset-0 z-10 overflow-y-auto"
            >
                <div className="min-h-screen px-4 text-center">
                    <div
                        className="fixed inset-0 bg-black opacity-30"
                        aria-hidden="true"
                        onClick={closeModal}
                    />
                    <span className="inline-block h-screen align-middle" aria-hidden="true">
                        &#8203;
                    </span>

                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                        <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900 text-center"
                        >
                            Amazing!
                        </Dialog.Title>

                        <div className="flex justify-center text-primary my-2">
                            <PiSealCheckFill size={100} />
                        </div>
                        <div className="flex justify-center">
                            <p className="text-center">Thank you for your feedback</p>
                        </div>
                        <div className="flex justify-center my-3">
                            <BoderBtn name={"Ok"} fun={closeModal} className="w-1/4" />
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
