
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import BoderBtn from "./boderBtn";

export default function FeedBackForm() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [name, setName] = useState("");
    const [feedback, setFeedback] = useState("");

    function handleSubmit(e: { preventDefault: () => void; }) {

        e.preventDefault();
        console.log("Name:", name, "Feedback:", feedback);
        closeModal();
    }

    return (
        <>
            <div className="flex justify-center items-center mt-4">
                <BoderBtn name={"Write A Review"} fun={openModal} />
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
                                Give your Feedback
                            </Dialog.Title>

                            <form className="mt-4" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
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
                                        placeholder="Write your feedback..."
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    />
                                </div>

                                <div className="flex justify-center">
                                    <BoderBtn name={"Submit"} type={"submit"} fun={() => handleSubmit} />
                                </div>
                            </form>
                        </div>
                    </div>
                </Dialog>

            </div>
        </>
    )
}
