const Contact = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                <h1 className="text-xl font-semibold text-gray-700 text-center mb-4">Contact Us</h1>
                <form className="flex flex-col">
                    <input 
                        type="text" 
                        className="border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Name"
                    />
                    <textarea 
                        className="border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Message"
                        rows="4"
                    />
                    <button 
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg font-medium hover:opacity-90 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
