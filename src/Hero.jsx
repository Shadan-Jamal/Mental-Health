import React, { useEffect, useState } from 'react'
import {motion  } from 'framer-motion';
import { AiOutlineMail } from "react-icons/ai";
import { IoIosArrowRoundDown } from "react-icons/io";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import { FaArrowDown } from "react-icons/fa";

function Hero({loginClicked,log}) {
    const [arrowClicked, setArrowClicked] = useState(false);
    const [music,playMusic] = useState(true);
    const [tips,openTips] = useState(false);
    useEffect(() => {
        document.body.addEventListener('mouseover',() => {
            const audio = document.getElementById('audio');
            console.log(audio);
            if(music)
            audio.play();
            else
            audio.pause();
        });
    })

  return (
    <>
        { !log && <section className='max-w-full max-h-full lg:px-12 grid grid-cols-3 gap-5 bg-[#0f172a]'>
        <div 
        onClick={() => playMusic(!music)}
        className='absolute left-6 top-6'>
            <button id='music'>
            {music ? <HiOutlineSpeakerWave size={'30px'} color='white'/> : <HiOutlineSpeakerXMark size={'30px'} color='white'/>}
            </button>
        </div>

        <div>
            <a 
            onClick={() => loginClicked(!log)}
            target='_blank' className='bg-blue-500 text-white text-xl font-bold rounded-lg w-28 p-1 max-h-fit hover:bg-blue-800 absolute right-6 top-6 text-center'>Login</a>
        </div>
        <audio src="/autumn-sky-meditation-7618.mp3" 
        loop
        id='audio'></audio>
        <div className='col-span-3 self-center'>
            <img src="/logo.png" className='w-[600px] text-center mx-auto' alt="" />
        </div>


        <div className='col-span-2 '>
            <div id='header' className='mb-3'>
                <h1 className='text-white text-[50px] lg:text-[60px] font-bold text-center'>
                Our Officers..
                </h1>
            </div>

            <div className='grid grid-rows-2 place-content-center gap-10 w-full lg:max-h-full'>
                <div className='flex flex-row gap-5 justify-center items-center row-span-2'>
                    <div>
                        <motion.img 
                        onHoverStart={() => setHover(true)}
                        src="/counsellor.jpg" className='rounded-2xl aspect-auto w-52'/>
                        <div 
                        className='flex flex-col justify-center items-center gap-1'>
                        <h3 className='text-white text-sm font-bold self-center'>Ms. Preethi Jain</h3>
                            <p className='text-white text-sm font-bold self-center'>Counsellor</p>
                            <a href="mailto:counsellor@claretcollege.edu.in" className="" target='_blank'>
                                <AiOutlineMail size={'20px'} color='white'/>
                        </a>      
                        </div>
                    </div>
                    <div>
                        <img src="/Angela_inner.jpg" className='rounded-2xl aspect-auto w-52'/>
                        <div className='flex flex-col justify-center items-center'>
                        <h3 className='text-white text-sm text-sm font-bold self-center'>Ms. Angela Jean Mary E.</h3>
                        
                            <p className='text-white text-sm text-sm font-bold self-center'>(Student Council Mentor)</p>
                            <a href="mailto:angela@claretcollege.edu.in" className="" target='_blank'>
                                <AiOutlineMail size={'20px'} color='white'/>
                        </a>      
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-3 gap-10 row-span-2'>
                    <div className='col-span-1 flex flex-row justify-between gap-3'>
                        <img src="./Renita_inner.jpg" className='rounded-2xl aspect-auto w-36 self-center' alt="" />
                        <div className='flex flex-col justify-center items-center gap-1'>
                        <h3 className='text-white text-sm text-sm font-bold self-center'>Ms. Renita Blossom Monteiro 
                        </h3>
                        
                            <h3 className='text-white text-sm text-sm font-bold self-center'>(Student Welfare Officer)</h3>
                            <a href="mailto:renita@claretcollege.edu.in" className="self-center" target='_blank'>
                                <AiOutlineMail size={'20px'} color='white'/>
                            </a>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-row justify-center'>
                        <img src="/Kagendra_inner.jpg" className='rounded-2xl aspect-auto w-36' alt="" />
                        <div className='mx-3 flex flex-col justify-center items-center gap-3'>
                        <h3 className='text-white self-start text-sm lg:text-sm font-bold'>Mr. Kagendra T. </h3>
                            <h3 className='text-white text-sm text-sm font-bold self-center '>(Student Welfare Officer)</h3>
                            <a href="mailto:kagendra@claretcollege.edu.in" target='_blank' className='hover:underline self-center'>
                                <AiOutlineMail size={'20px'}  color='white'/>
                            </a>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-row justify-center gap-3'>
                        <img src="/Binila-B-Chandran-inner.jpg" className='rounded-2xl aspect-auto w-36' alt="" />
                        <div className='flex flex-col justify-center items-center gap-3'>
                        <h3 className='text-white text-sm text-sm font-bold self-center'>Ms. Binila B. Chandran</h3>
                            <h3 className='text-white text-sm text-sm font-bold self-start'>(Student Welfare Officer)</h3>
                            <a href="mailto:kagendra@claretcollege.edu.in" target='_blank' className='hover:underline self-center'>
                                <AiOutlineMail size={'20px'}  color='white'/>
                            </a>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-row justify-center gap-3'>
                        <img src="/Chethan_inner.jpg" className='rounded-2xl aspect-auto w-36' alt="" />
                        <div className='flex flex-col justify-center items-center gap-3'>
                        <h3 className='text-white text-sm text-sm font-bold self-start'>Mr. Chethan S. </h3>
                            <h3 className='text-white text-sm text-sm font-bold self-center '>(Student Welfare Officer)</h3>
                            <a href="mailto:kagendra@claretcollege.edu.in" target='_blank' className='hover:underline self-center'>
                                <AiOutlineMail size={'20px'}  color='white'/>
                            </a>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-row justify-center gap-3'>
                        <img src="/Rudresh_inner.jpg" className='rounded-2xl aspect-auto w-36' alt="" />
                        <div className='flex flex-col justify-center items-center gap-3'>
                        <h3 className='text-white text-sm text-sm font-bold self-start'>Mr. Rudresh S. </h3>
                            <h3 className='text-white text-sm text-sm font-bold self-center '>(Student Welfare Officer)</h3>
                            <a href="mailto:kagendra@claretcollege.edu.in" target='_blank' className='hover:underline self-center'>
                                <AiOutlineMail size={'20px'}  color='white'/>
                            </a>
                        </div>
                    </div>
                    <div className='col-span-1 flex flex-row justify-center gap-3'>
                        <img src="/Manjunatha_inner.jpg" className='rounded-2xl aspect-auto w-36' alt="" />
                        <div className='flex flex-col justify-center items-center gap-3'>
                        <h3 className='text-white text-sm text-sm font-bold self-start'>Mr. Manjunatha G. </h3>
                            <h3 className='text-white text-sm text-sm font-bold self-center '>(Student Welfare Officer)</h3>
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

            <motion.div 
            onClick={() => openTips(!tips)}
            className='grid grid-cols-2 place-content-center gap-4 p-4 mt-5'>
                <h1 className='col-span-2 text-white font-normal text-lg text-start bg-slate-700/90 hover:bg-slate-700/50 py-3 px-3 rounded-2xl flex flex-row'>Helpful Tips to improve mental health using technology
                <button>
                    <FaArrowDown />
                </button>
                </h1>
                {tips && <motion.div
                className='col-span-2 grid grid-cols-2 '
                initial={{transform : 'transateY(-50px)'}}
                animate={{transform : 'transateY(0px)'}}
                transition={{ease : ''}}
                >
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
                }
            </motion.div>
        </div>
        </section>}
    </>
    )

}

export default Hero