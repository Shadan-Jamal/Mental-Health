import React, { useEffect, useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion';
import { AiOutlineMail } from "react-icons/ai";
import { IoIosArrowRoundDown } from "react-icons/io";

function Hero() {
    const [arrowClicked, setArrowClicked] = useState(false);

    useEffect(() => {
        document.body.addEventListener('mouseover',() => {
            const audio = document.getElementById('audio');
            console.log(audio);
            audio.play();
        });
    })
  return (
    <section className='w-screen h-screen lg:px-24 lg:py-3 grid grid-cols-2 gap-5'>
        <audio src="./src/assets/autumn-sky-meditation-7618.mp3" 
        loop
        id='audio'></audio>
        <div className='col-span-1'>
            <div id='header' className='mb-3'>
                <h1 className='text-white text-[50px] lg:text-[60px] font-bold text-center'>
                Our Officers..
                </h1>
            </div>

            <div className='grid grid-rows-2 place-content-center gap-5 w-full lg:max-h-full'>
                <div className='flex flex-col justify-center items-center row-span-2'>
                    <img src="./src/assets/counsellor.jpg" className='rounded-2xl aspect-auto w-64'/>
                    <h3 className='text-white text-base lg:text-lg font-bold self-center'>Ms. Preethi Jain</h3>
                    <div className='flex flex-row justify-center items-center gap-3'>
                        <p className='text-white text-base lg:text-lg font-bold self-center'>Counsellor</p>
                        <a href="mailto:counsellor@claretcollege.edu.in" className="" target='_blank'>
                            <AiOutlineMail size={'20px'} color='white'/>
                    </a>      
                    </div>
                </div>

                <div className='flex flex-row justify-center gap-10 row-span-2'>
                    <div className='flex flex-col justify-center'>
                        <img src="./src/assets/Renita_inner.jpg" className='rounded-2xl aspect-auto w-64 self-center' alt="" />
                        <h3 className='text-white text-base lg:text-lg font-bold self-center'>Ms. Renita Blossom Monteiro 
                        </h3>
                        <div className='flex flex-row justify-center items-center gap-3'>
                            <h3 className='text-white text-base lg:text-lg font-bold self-center'>(Student Welfare Officer)</h3>
                            <a href="mailto:renita@claretcollege.edu.in" className="self-center" target='_blank'>
                                <AiOutlineMail size={'20px'} color='white'/>
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <img src="./src/assets/Kagendra_inner.jpg" className='rounded-2xl aspect-auto w-64' alt="" />
                        <h3 className='text-white text-base lg:text-lg font-bold self-center'>Mr. Kagendra T. </h3>
                        <div className='flex flex-row justify-center items-center gap-3'>
                            <h3 className='text-white text-base lg:text-lg font-bold self-center '>(Student Welfare Officer)</h3>
                            <a href="mailto:kagendra@claretcollege.edu.in" target='_blank' className='hover:underline self-center'>
                                <AiOutlineMail size={'20px'}  color='white'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className='col-span-1'>
            <div id='header' className='w-fit mx-auto flex flex-col justify-center items-center'>
                <h1 className='text-white text-[30px] lg:text-[40px] font-bold text-center'>
                Reach out..
                </h1>
                <IoIosArrowRoundDown size={'40px'} color={'white'} className='w-full hover:bg-slate-700/10'
                onClick={() => setArrowClicked(!arrowClicked)}
                />
            </div>

            {arrowClicked &&
                <motion.div
                initial={{transform : 'translateY(-50px)', opacity:0}}
                animate={{transform : 'translateY(0px)',opacity:1}}
                transition={{ease : 'easeInOut' , type:'spring', delay:0.1}}
            className='w-full max-h-fit grid grid-cols-2 place-content-center gap-5 pt-5'>
                <h3 className='col-span-2 text-lg text-white font-bold text-center'>Your Message will be completely anonymous..</h3>
                <textarea className='border-slate-300 rounded-2xl p-3 text-white bg-gray-700 col-span-2' placeholder='Write here' id=""></textarea>
                <div className='col-span-2 justify-self-center'>
                    <button className='bg-blue-500 text-white text-xl font-bold rounded-lg w-28 p-1 max-h-fit hover:bg-blue-800'>Submit</button>
                </div>
            </motion.div>}

            <motion.div className='grid grid-cols-2 place-content-center gap-4 p-4 mt-5'>
                <h1 className='col-span-2 text-white font-normal text-lg'>Helpful Tips to improve mental health using technology</h1>
                <div className='col-span-1'>
                    <ul className='list-disc list-inside text-white font-light'>
                        <li>Use apps like Headspace or Calm for guided meditation, mindfulness, and relaxation techniques.</li>
                        <li>Platforms like BetterHelp or Talkspace offer access to licensed therapists for virtual counseling.</li>
                        <li>Utilize journaling or mood tracking apps to monitor emotions and identify triggers.</li>
                        <li>Join online forums or social media groups focused on mental health for peer support and shared experiences.</li>
                        <li>Set boundaries for technology use to reduce anxiety and improve focus.</li>
                    </ul>
                </div>
                <div className='col-span-1'>
                    <ul className='list-disc list-inside text-white font-light'>
                        <li>Explore sleep apps that promote better sleep hygiene through tracking and relaxation techniques.</li>
                        <li>Access online courses and webinars that focus on mental health topics to enhance knowledge and coping strategies.
                        </li>
                        <li>Engage in physical activity through apps that provide workouts, promoting the connection between physical and mental health.</li>
                        <li>Use VR for exposure therapy or stress relief experiences, which can provide immersive relaxation.</li>
                        <li>Set reminders on your devices to take breaks and practice mindfulness throughout the day.</li>
                    </ul>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Hero