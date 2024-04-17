import React, { useState } from "react";

interface ServerStatusProps {
  isOnline: boolean;
  setIsOnline: (isOnline: boolean) => void;
}

const ServerStatusContext = React.createContext({} as ServerStatusProps);

const ServerStatusProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOnline, setIsOnline] = useState<boolean>(true);
  return (
    <ServerStatusContext.Provider value={{ isOnline, setIsOnline }}>
      {children}
    </ServerStatusContext.Provider>
  );
};

export { ServerStatusContext, ServerStatusProvider };
