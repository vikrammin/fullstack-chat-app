const MessageSkeleton = () => {
    // Create an array of 6 items for skeleton messages
    const skeletonMessages = Array(6).fill(null);

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {skeletonMessages.map((_, idx) => (
                <div
                    key={idx}
                    className={`flex items-start gap-2 ${idx % 2 === 0 ? "" : "justify-end"}`}
                >
                    {/* Avatar Placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse" />

                    <div className="space-y-2">
                        {/* Name Placeholder */}
                        <div className="h-4 w-16 bg-gray-700 animate-pulse rounded-md" />

                        {/* Message Placeholder */}
                        <div className="h-16 w-[200px] bg-gray-700 animate-pulse rounded-lg p-3" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MessageSkeleton;
