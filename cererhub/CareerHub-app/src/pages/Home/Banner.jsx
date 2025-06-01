import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/team/team_1.jpg'
import team2 from '../../assets/team/team_2.jpg'


const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse pb-[200px]">
                {/* <motion.img 
                animate={{rotate: 10,
                    transition: {duration: 4}
                }}
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                className="max-w-sm rounded-lg shadow-2xl"
                /> */}
                <div className="flex-1">
                    <motion.img
                        src={team1}
                        animate={{y: [100, 150, 100] }}
                        transition= {{duration:7, repeat: Infinity}}
                         className="max-w-sm rounded-t-4xl rounded-br-4xl shadow-2xl border-s-8 border-b-8 border-amber-400"
                    />
                    <motion.img
                        src={team2}
                        animate={{x: [100, 150, 100] }}
                        transition= {{duration:10, repeat: Infinity}}
                         className="max-w-sm rounded-t-4xl rounded-br-4xl shadow-2xl border-s-8 border-b-8 border-amber-400"
                    />
                </div>
                <div className="flex-1">
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;