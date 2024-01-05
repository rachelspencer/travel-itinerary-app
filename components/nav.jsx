import Image from 'next/image';

const Nav = () => {
    return (
        <nav className='nav'>
            <Image 
                src="/assets/images/scotland.png"
                alt="Scotland Image"
                width={60}
                height={60}
                className="object-contain"
            />
            <p className='header-text'>A Scotland Travel Itinerary</p> 
        </nav>
    )
};

export default Nav;