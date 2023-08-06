import { motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "../components/sidebar";
type props = {
  children: string | JSX.Element | JSX.Element[];
};
const MainLayout = ({ children }: props) => {
  const [drawer, setDrawer] = useState(true);
  const [drawerMobile, setDrawerMobile] = useState(false);
  const variants = {
    visible: { opacity: 1, width: 248 },
    hidden: { opacity: 0, width: 0 },
  };
  const variantsMobile = {
    visible: { opacity: 1, width: 220 },
    hidden: { opacity: 0, width: 0 },
  };
  const backdrop = {
    visible: { opacity: 1, zIndex: 20 },
    hidden: { opacity: 0, zIndex: 0 },
  };
  if (window.innerWidth > 768) {
    return (
      <div className="flex h-screen">
        <motion.div
          variants={variants}
          initial="visible"
          animate={drawer ? "visible" : "hidden"}
          className=" bg-purple-50 w-[0] lg:w-[248px] overflow-hidden"
        >
          <Sidebar />
        </motion.div>
        <div className="bg-cyan-300 flex-1">
          <button onClick={() => setDrawer(!drawer)}>
            {!drawer ? "open" : "close"}
          </button>
          <AnimateLayout>{children}</AnimateLayout>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex h-screen">
        <motion.div
          variants={variantsMobile}
          initial="hidden"
          animate={drawerMobile ? "visible" : "hidden"}
          className=" bg-purple-50 w-[0] opacity-0 z-[50] overflow-hidden"
        >
          <Sidebar />
        </motion.div>
        <motion.div
          variants={backdrop}
          initial="visible"
          onClick={() => {
            setDrawerMobile(false);
          }}
          animate={drawerMobile ? "visible" : "hidden"}
          className="fixed top-0 left-0  h-screen   w-full overlay bg-slate-900 bg-opacity-70 backdrop-filter backdrop-blur-[3px] backdrop-brightness-10 inset-0 "
        ></motion.div>
        <div className="flex-1 z-10 overflow-x-hidden">
          <button onClick={() => setDrawerMobile(!drawerMobile)}>
            {!drawerMobile ? "open" : "close"}
          </button>
          <AnimateLayout>{children}</AnimateLayout>
        </div>
      </div>
    );
  }
};

export default MainLayout;
const AnimateLayout = ({ children }: props) => {
  return (
    <motion.div
      initial={{ x: "248px", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
