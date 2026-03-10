import { motion } from "framer-motion";
import { ReactNode } from "react";
type ScrollProps = {
  children: ReactNode;
};

export default function Scroll({children  }: ScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}