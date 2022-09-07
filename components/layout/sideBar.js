
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { IconContext } from "react-icons";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { CgHome } from "react-icons/cg";


const SideNavBar = () => {
    const router = useRouter();
    const menuItems = [
        {
            href: '/dashboard',
            title: `My Dashboard`,
            icon: <CgHome />,
            className: 'home-icon'
        },
        {
            href: '/managmentPage',
            title: `Account 
            Management`,
            icon: <BsFillGrid3X3GapFill />,
            className: 'react-icons'
        },
        
    ];

    return (
        <aside className=" side bg-[#f8f9fa] lg:min-h-screen md:min-h-screen ">
            <div className=' logo'>
                <Link href={'/dashboard'}>
                <div>
                    <Image
                        quality={100}
                        className={'cursor-pointer'}
                        priority
                        src="/images/oxa_logo.png"
                        height={39}
                        width={103}
                        alt={'OXA'}
                    />
                    </div>
                </Link>
            </div>
            <nav>
                <ul>
                    {menuItems.map(({ href, title, icon, className }) => (
                        <li className='nav-bar-btns-margin' key={title}>
                            <Link href={href}>
                                <button
                                    className={` flex text-[#adb2bd] cursor-pointer ${router.asPath === href && 'side-button text-black'} display-linebreak `}>
                                    <div className='grid lg: grid-cols-7 sm:grid-cols-4'>
                                    <div className='lg: col-span-1 sm:col-span-1'> <IconContext.Provider value={{ color: (router.asPath === href) ? "black" : "#adb2bd", className: className }}>{icon}</IconContext.Provider></div>
                                    <div className='lg: col-span-6 sm:col-span-3 '><p className=' text-left  hover:break-words text-ellipsis overflow-hidden'>{title}</p></div>
                                    </div>
                                    
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>);
}

export default SideNavBar;
