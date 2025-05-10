import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';

const Card = ({ data, reference }) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={1.1} dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
            <FaFileAlt />
            <p className='mt-5 leading-tight text-sm font-semibold'>{data.desc}</p>
            <div className='footer w-full absolute bottom-0 left-0 '>
                <div className='flex items-center justify-between py-3 px-8 mb-5'>
                    <h5>{data.fileSize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <IoClose /> : <IoMdDownload size=".8rem" color='#fff' />}
                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`tag py-4 ${data.tag.tagColor == "green" ? "bg-green-300" : "bg-sky-300"} w-full flex items-center justify-center`}>
                            <h5 className='text-sm font-semibold'>{data.tag.tagTitle}</h5>
                        </div>
                    )
                }

            </div>

        </motion.div>
    )
}

export default Card