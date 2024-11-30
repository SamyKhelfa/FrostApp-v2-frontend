import { useEffect, useState } from "react";

interface WindowDimensions {
  width: number;
  height: number;
  isMobile: boolean;
  orientation: string;
}

export const useScreenDimensions = (): WindowDimensions => {
  const isMobile = window.innerWidth < 800 || window.innerHeight < 650;

  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    height: window.innerHeight,
    isMobile: isMobile,
    orientation:
      screen?.orientation?.type ||
      (window.innerWidth < window.innerHeight ? "portrait" : "landscape"),
    width: window.innerWidth,
  });

  const handleResize = (): void => {
    setWindowDimensions({
      height: window.innerHeight,
      isMobile: isMobile,
      orientation:
        screen?.orientation?.type ||
        (window.innerWidth < window.innerHeight ? "portrait" : "landscape"),
      width: window.innerWidth,
    });
  };

  const handleOrientationChange = (event: any): void => {
    const orientation =
      event?.target?.screen?.orientation?.type ||
      (window.innerWidth > window.innerHeight ? "portrait" : "landscape");
    setWindowDimensions((prev) => ({
      ...prev,
      orientation,
    }));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleOrientationChange);
    return (): void => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return windowDimensions;
};
