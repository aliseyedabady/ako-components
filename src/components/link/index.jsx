import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
const AkoLink = () => {
  const variants = {
    visible: { height: 100 },
    hidden: {
      height: 0,
    },
  };
  const iconVariants = {
    visible: { rotateZ: 90 },
    hidden: { rotateZ: 0 },
  };
  const [open, setOpen] = useState(false);
  console.log("wd", open);
  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between cursor-pointer overflow-hidden"
      >
        <p>Menu</p>
        <motion.div
          variants={iconVariants}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
        >
          <FiChevronRight />
        </motion.div>
      </div>
      <motion.div
        variants={variants}
        initial="hidden"
        className="overflow-hidden"
        animate={open ? "visible" : "hidden"}
      >
        <div className="px-3 py-1">
          {Array(10)
            .fill(1)
            .map(() => {
              return <p>{1}</p>;
            })}
        </div>
      </motion.div>
    </div>
  );
};

export default AkoLink;
