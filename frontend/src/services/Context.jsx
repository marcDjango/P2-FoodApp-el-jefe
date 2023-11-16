import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const CardContext = createContext();

export function CardProvider({ children }) {
  const [data, setData] = useState();

  const value = useMemo(
    () => ({
      data,
      setData,
    }),
    [data]
  );

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}
CardProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useData = () => useContext(CardContext);
