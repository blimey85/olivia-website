// components
import Circles from '/components/Circles';

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='name' className='input input-bordered w-full' />
              <input type='text' placeholder='email' className='input input-bordered w-full' />
            </div>
            <input type='text' placeholder='subject' className='input input-bordered w-full' />
            <textarea placeholder='message' className='textarea textarea-bordered'></textarea>
            <button className='btn btn-outline btn-primary'>
                Let's talk
            
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
