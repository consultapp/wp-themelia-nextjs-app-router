"use client";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import Menu from "../../components/Menu/Menu";

const words = ["mobile", "iphone", "android"];

function isMobile() {
  if (typeof window !== "undefined") {
    const userAgent = window ? window.navigator.userAgent.toLowerCase() : false;
    return words.reduce(
      (acc, word) => (userAgent.includes(word) ? true : acc),
      false
    ); // Client-side-only code
  }
  return false;
}

export default function MenuContainer() {
  const pathname = usePathname();

  const isMobileDevice = useMemo(isMobile, []);
  const [isOpen, setIsOpen] = useState(!isMobileDevice);

  const toggleButton = useCallback((flag) => {
    setIsOpen(!flag);
  }, []);

  useLayoutEffect(() => {
    if (isMobileDevice && isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <Menu isOpen={isOpen} toggleButton={toggleButton} />;
}
