import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
    const {
        messages,
        getMessages,
        isMessagesLoading,
        selectedUser,
        subscribeToMessages,
        unsubscribeFromMessages,
    } = useChatStore();
    const { authUser } = useAuthStore();
    const messageEndRef = useRef(null);

    // Fetch messages when user is selected
    useEffect(() => {
        if (selectedUser?._id) {
            getMessages(selectedUser._id);
        }
        subscribeToMessages();

        return () => unsubscribeFromMessages();
    }, [selectedUser, getMessages, subscribeToMessages, unsubscribeFromMessages]);

    // Auto-scroll to the latest message 
    useEffect(() => {
        if (messageEndRef.current && messages?.length > 0) {
            messageEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    if (isMessagesLoading) {
        return (
            <div className="flex-1 flex flex-col overflow-auto bg-gray-900">
                <ChatHeader />
                <MessageSkeleton />
                <MessageInput />
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col overflow-auto bg-gray-900">
            <ChatHeader />

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages?.length > 0 ? (
                    messages.map((message) => (
                        <div
                            key={message._id}
                            className={`flex items-end gap-3 ${message.senderId === authUser._id ? "justify-end" : "justify-start"
                                }`}
                            ref={messageEndRef}
                        >
                            {/* Receiver's Avatar (Always on the Left) */}
                            {message.senderId !== authUser._id && (
                                <div className="w-8 h-8 rounded-full border border-gray-600 overflow-hidden self-end">
                                    <img
                                        src={selectedUser?.profilePic || "/avatar.png"}
                                        alt="profile pic"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            {/* Message Content */}
                            <div className={`flex flex-col max-w-[70%] ${message.senderId === authUser._id ? "items-end" : "items-start"}`}>
                                {/* Message Bubble */}
                                <div
                                    className={`p-3 rounded-lg ${message.senderId === authUser._id
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-700 text-gray-200"
                                        }`}
                                >
                                    {message.image && (
                                        <img
                                            src={message.image}
                                            alt="Attachment"
                                            className="sm:max-w-[200px] rounded-md mb-2"
                                        />
                                    )}
                                    {message.text && <p>{message.text}</p>}
                                </div>

                                {/* Timestamp - Align based on sender */}
                                <time
                                    className={`text-xs text-gray-400 ${message.senderId === authUser._id ? "self-end" : "self-start"
                                        } mt-1`}
                                >
                                    {formatMessageTime(message.createdAt)}
                                </time>
                            </div>

                            {/* Sent Message Avatar (Always on the Right) */}
                            {message.senderId === authUser._id && (
                                <div className="w-8 h-8 rounded-full border border-gray-600 overflow-hidden self-end">
                                    <img
                                        src={authUser?.profilePic || "/avatar.png"}
                                        alt="profile pic"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400 text-center mt-4">No messages yet</p>
                )}
            </div>

            <MessageInput />
        </div>
    );
};

export default ChatContainer;
