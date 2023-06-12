import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import Menu from "../../components/Menu/Menu";
import { isMobile } from "../../utils/functions";

export default function MenuContainer() {
  const pathname = usePathname();

  const isMobileDevice = useMemo(isMobile, []);
  const [isOpen, setIsOpen] = useState(!isMobileDevice);

  const toggleButton = useCallback((flag) => {
    setIsOpen(!flag);
  }, []);

  useEffect(() => {
    if (isMobileDevice && isOpen) {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <Menu isOpen={isOpen} toggleButton={toggleButton} />;
}
