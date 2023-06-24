"use client";
import { useCallback, useLayoutEffect, useState } from "react";
import Menu from "../../components/Menu/Menu";
import { usePathname } from "next/navigation";

export default function MenuContainer() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = useCallback((flag) => {
    setIsOpen(!flag);
  }, []);

  useLayoutEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return <Menu isOpen={isOpen} toggleButton={toggleButton} />;
}
