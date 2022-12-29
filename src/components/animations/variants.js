export const variants = {
    transitionYFunc: (delay)=>{
        return {
            parent: {
                animate: {
                    transition: {
                    delayChildren: delay,
                    staggerChildren: 0.1,
                    },
                },
            },
            child: {
                initial: { y: 400 },
                animate: {
                    y: 0,
                    transition: {
                        ease: [0.6, 0.01, -0.05, 0.95],
                        duration: 1,
                    },
                },
            }
        }
    },
    transitionX: (delay) => {
        return {
            parent : {
                initial: {
                    opacity: 0
                },
                animate: (i = 1) => ({
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: delay * i ,
                    when: "beforeChildren"}
                })
            },
            child : {
                initial: { x: -100 },
                animate: {
                    x: 0,
                    transition: {
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: 1,
                },
                },
            }
        }
    },
    fadeUpFunc :(delay) => {
        return {
            initial : { 
                opacity: 0,
                y: 40
            },
            animate: { 
                opacity:1,
                y: 0,
                transition: {
                    duration:0.5,
                    ease: 'easeInOut',
                    delay: delay
                }
            
            }
        }
    },
    fadeDownFunc :(delay) => {
        return {
            initial : { 
                opacity: 0,
                y: -10
            },
            animate: { 
                opacity:1,
                y: 0,
                transition: {
                    duration:0.5,
                    ease: 'easeInOut',
                    delay: delay
                }
            
            }
        }
    },
    fadeInFunc :(delay) => {
        return {
            initial : { 
                    opacity: 0,
                },
                animate: { 
                    opacity:1,
                    transition: {
                        duration:0.5,
                        ease: 'easeInOut',
                        delay: delay
                    }
                
                }
            
        }
    },
    fadeInStaggeredFunc :(delay) => {
        return {
            parent: {
                animate: {
                    transition: {
                    delayChildren: delay,
                    staggerChildren: 0.2,
                    },
                },
            },
            child: {
                initial : { 
                    opacity: 0,
                },
                animate: { 
                    opacity:1,
                    transition: {
                        duration:0.5,
                        ease: 'easeInOut',
                    }
                
                }
            }
        }
    },
}