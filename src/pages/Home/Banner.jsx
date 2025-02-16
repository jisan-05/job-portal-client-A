import React from "react";
import * as motion from "motion/react-client";
import { easeIn } from "motion";
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        src={team1}
                        animate={{y:[50,100,50]}}
                        transition={{duration:6 , repeat:Infinity}}
                        className="max-w-sm rounded-t-4xl rounded-br-4xl border-l-8 border-b-8 border-blue-400 shadow-2xl"
                    />
                    <motion.img
                        src={team2}
                        animate={{x:[100,150,100]}}
                        transition={{duration:6 , repeat:Infinity}}
                        className="max-w-sm rounded-t-4xl rounded-br-4xl border-l-8 border-b-8 border-blue-400 shadow-2xl"
                    />
                </div>
                <div className="flex-1">
                    
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{
                            duration: 1.5,
                            delay: 1,
                            ease: easeIn,
                            repeat:Infinity,
                        }}
                        className="text-5xl font-bold"
                    >
                        Latest <motion.span 
                        animate={{color:['#163ef2','#339fff']}}
                        transition={{duration:2, repeat:Infinity}}
                        >Job</motion.span> For You !
                    </motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
