import { Send } from "lucide-react";
import { useState } from "react";
import useSendMessages from "../../hooks/useSendMessages";

const MessageInput = () => {
  const { loading, message } = useSendMessages();
  const [messages, setMessages] = useState("");

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!messages.trim()) return;
    await message(messages);
    setMessages("");
  };

  return (
    <form className="px-4 mb-3" onSubmit={handleSubmitForm}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <>
              <span className="loading loading-spinner" />
            </>
          ) : (
            <>
              <Send className="w-6 h-6 text-white" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
