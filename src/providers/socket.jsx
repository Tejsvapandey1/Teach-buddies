import React, { useMemo } from "react";
import { io } from "socket.io-client";

const socketContext = React.createContext(null);

export const SocketProvider = (props) => {
  const socket = useMemo(() => {
    io({
      host: "localhost",
      port: 8001,
    });
  }, []);
  return <SocketProvider>{props.children}</SocketProvider>;
};
