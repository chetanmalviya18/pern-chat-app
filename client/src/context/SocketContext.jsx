import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useAuthContext } from "./AuthContext";
import { io } from "socket.io-client";

const SocketContext = createContext(undefined);

export const useSocketContext = () => {
  const context = useContext(SocketContext);

  if (context === undefined)
    throw new Error(
      "useSocketContext must be used within a SocketContextProvider"
    );

  return context;
};

const socketUrl =
  import.meta.env.MODE === "development" ? "http://localhost:3000" : "/";

const SocketContextProvider = ({ children }) => {
  const socketRef = useRef(null);

  const [onlineUser, setOnlineUser] = useState([]);
  const { isLoading, authUser } = useAuthContext();

  useEffect(() => {
    if (authUser && !isLoading) {
      const socket = io(socketUrl, {
        query: {
          userId: authUser.id,
        },
      });
      socketRef.current = socket;

      socket.on("getOnlineUsers", (users) => {
        setOnlineUser(users);
      });

      return () => {
        socket.close();
        socketRef.current = null;
      };
    } else if (!authUser && !isLoading) {
      if (socketRef.current) {
        socketRef.current.close();
        socketRef.current = null;
      }
    }
  }, [isLoading, authUser]);

  return (
    <SocketContext.Provider value={{ socket: socketRef.current, onlineUser }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
