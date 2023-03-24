const Contact = () => {
    return (
        <div
            name='contact'
            className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Contact me
                    </p>
                </div>
                <div>
                <p>
                    Whether you want to get in touch, talk about a project collaboration, or just say hi, I would love to hear from you. Simply send me an
                    <a href="mailto:vietha.nguyen3110@gmail.com" className="font-bold cursor-pointer"> email </a> or connect with me via 
                    <a 
                        href="https://www.linkedin.com/in/havietng/"
                        target='_blank'
                        rel='noreferrer'
                        className="hover:scale-125 font-bold cursor-pointer"    
                    > Linkedin 
                    </a> or
                    <a
                        href="https://github.com/vietha3110"
                        target='_blank'
                        rel='noreferrer'
                        className="hover:scale-125 font-bold cursor-pointer"    
                    > Github.
                    </a>
                </p>
            </div>
            </div>
            
        </div>
    )
}

export default Contact;
