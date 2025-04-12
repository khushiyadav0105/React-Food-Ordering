import { Mail, User } from "lucide-react"; 

const Contact = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 px-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full transition-all duration-300">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Contact Us
                </h1>

                <form className="space-y-5">
                    {/* Name Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Name"
                            />
                            <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <div className="relative">
                            <textarea
                                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder= "Write your message..."
                                rows="3"
                            />
                            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2.5 rounded-lg font-semibold hover:opacity-90 transition duration-300 shadow-md"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
