import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const scrollToHash = () => {
        const el = document.getElementById(hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };
      // Try immediately, then retry after page renders
      scrollToHash();
      const t1 = setTimeout(scrollToHash, 150);
      const t2 = setTimeout(scrollToHash, 400);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToTop;
