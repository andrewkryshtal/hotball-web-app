import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { x: '100vw', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'ease-in-out', duration: 0.4 },
  },
};

type TModal = {
  showModal: boolean;
  children: React.ReactNode;
  setShowModal: (showModal: boolean) => void;
};

export const Modal: React.FC<TModal> = ({
  showModal,
  children,
  setShowModal,
}) => {
  return (
    <AnimatePresence mode='wait'>
      {showModal && (
        <Backdrop
          variants={backdropVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
          onClick={() => setShowModal(false)}
        >
          <motion.div
            variants={modalVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
