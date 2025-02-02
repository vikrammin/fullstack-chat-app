import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
    const { selectedUser, setSelectedUser } = useChatStore();
    const { onlineUsers } = useAuthStore();

    return (
        <div className="p-2.5 border-b border-gray-700 bg-gray-900 text-gray-200">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="relative w-10 h-10 rounded-full">
                        <img
                            src={selectedUser.profilePic || "/avatar.png"}
                            alt={selectedUser.fullName}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                    </div>

                    {/* User info */}
                    <div>
                        <h3 className="font-medium">{selectedUser.fullName}</h3>
                        <p className="text-sm text-gray-400">
                            {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
                        </p>
                    </div>
                </div>

                {/* Close button */}
                <button
                    onClick={() => setSelectedUser(null)}
                    className="p-1 rounded-md hover:bg-gray-700 transition"
                >
                    <X className="w-5 h-5 text-gray-400 hover:text-white" />
                </button>
            </div>
        </div>
    );
};

export default ChatHeader;
