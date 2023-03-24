import Profile from '../../assets/Profile.jpeg';
import { Link } from 'react-scroll';
const Home = () => {
    return (
        <div 
            name='home'
            className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
                <div className='flex flex-col justify-center h-full w-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white w-full'>
                        I'm a Full Stack Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        A small-town software engineer trying to make it big in the tech world.
                    </p>
                    <div>
                        <div className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            <Link to='portfolio' smooth duration={500}>Portfolio</Link>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img
                        src={Profile}
                        alt='my profile'
                        style={{width: "25rem", borderRadius:"2rem", }}
                    ></img>
                </div>
            </div>
        </div>
    )
}

export default Home;
