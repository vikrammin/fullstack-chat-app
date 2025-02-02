import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
    const { logout, authUser } = useAuthStore();

    return (
        <header
            className="bg-gray-900 border-b border-gray-700 fixed w-full top-0 z-40 
                 backdrop-blur-lg bg-opacity-80"
        >
            <div className="container mx-auto px-4 h-16">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <div className="flex items-center gap-8">
                        <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
                            <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                                <MessageSquare className="w-5 h-5 text-blue-500" />
                            </div>
                            <h1 className="text-lg font-bold text-white">Chat Application</h1>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-2">
                        <Link
                            to={"/settings"}
                            className="px-3 py-1.5 text-sm font-medium rounded-md 
                         bg-gray-800 text-white hover:bg-gray-700 transition flex items-center gap-2"
                        >
                            <Settings className="w-4 h-4" />
                            <span className="hidden sm:inline">Settings</span>
                        </Link>

                        {authUser && (
                            <>
                                <Link
                                    to={"/profile"}
                                    className="px-3 py-1.5 text-sm font-medium rounded-md 
                             bg-gray-800 text-white hover:bg-gray-700 transition flex items-center gap-2"
                                >
                                    <User className="w-5 h-5" />
                                    <span className="hidden sm:inline">Profile</span>
                                </Link>

                                <button
                                    className="px-3 py-1.5 text-sm font-medium rounded-md 
                             bg-red-600 text-white hover:bg-red-500 transition flex items-center gap-2"
                                    onClick={logout}
                                >
                                    <LogOut className="w-5 h-5" />
                                    <span className="hidden sm:inline">Logout</span>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
