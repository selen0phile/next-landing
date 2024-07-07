import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
export default function Button({ onClick, text, className, icon = true }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1, rotate: "-1deg" }}
      whileTap={{ scale: 0.9, rotate: "1deg"}}
      className={
        className ||
        "bg-black rounded-[10px] text-white flex items-center justify-center"
      }
    >
      {text}
      {icon && (
        <>
          &nbsp; <HiOutlineArrowRight />
        </>
      )}
    </motion.button>
  );
}
