import rockethood from '../../assets/rockethood.jpg';
import hairbnb from '../../assets/hairbnb.jpg';
import melodify from '../../assets/melodify.jpg';


const Portfolio = () => {
    
    const portfolios = [
        {
            id: 1, 
            src: melodify,
            github: "https://github.com/vietha3110/melodify",
            live: "https://melodify.herokuapp.com/"
        }, 
        {
            id: 2,
            src: hairbnb,
            github: "https://github.com/vietha3110/airbnb",
            live: "https://haairbnb.herokuapp.com/"
        }, 
        {
            id: 3, 
            src: rockethood,
            github: "https://github.com/vietha3110/robinhood-clone",
            live: "https://rockethood.onrender.com/"
        },
    ]
    return (
        <div
            name='portfolio'
            className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Portfolio
                    </p>
                    <p className='py-6'>
                        Check out some of my work right here
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({ id, src, github, live }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img
                                    src={src}
                                    alt="my portfolio"
                                    className='rounded-md duration-200 hover:scale-105 h-60 w-full'
                                />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px06 py-3 m-4 duration-200 hover:scale-125'>
                                        <a
                                            href={live}
                                            target="_blank"
                                            rel='noreferrer'
                                        >
                                            Live
                                        </a>
                                    </button>
                                    <button className='w-1/2 px06 py-3 m-4 duration-200 hover:scale-125'>
                                        <a
                                            href={github}
                                            target="_blank"
                                            rel='noreferrer'
                                        >
                                            Github
                                        </a>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
