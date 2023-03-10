'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden" whileInView="show"
    className={`${styles.xPaddings} relative py-8`}
  >
    <div className="gradient-01 absolute inset-0 w-[50%]" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <button type="button" className="cursor-pointer">
        <img src="/search.svg" alt="search" />
      </button>
      <h2 className="text-[24px] font-extrabold leading-[30px] text-white">Metaverse</h2>
      <img src="/menu.svg" alt="" className="cursor-pointer" />
    </div>
  </motion.nav>
);

export default Navbar;
