import {MessageCircle, X} from "lucide-react";
import {motion} from "framer-motion";

function ToggleChatButton({isOpen, onClick, chatbotConfig}) {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
      whileHover={{scale: 1.05}}
      whileTap={{scale: 0.95}}
      style={{backgroundColor: chatbotConfig?.Color}}
    >
      {isOpen ? (
        <X className="w-5 h-5 " />
      ) : (
        <>
          <MessageCircle className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center font-medium">
            3
          </span>
        </>
      )}
    </motion.button>
  );
}

export default ToggleChatButton;
