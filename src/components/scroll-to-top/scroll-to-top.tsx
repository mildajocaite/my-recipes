import { FC, PropsWithChildren, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};
