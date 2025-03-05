'use client';
import styles from './about.css'
import Link from 'next/link';

const AboutLayout = ({ children }) => {
    const aboutMenuBar = [{
        label:'About Us',
        path: '/about'
    },{
        label:'About College',
        path: '/about/aboutCollege'
    },{
        label:'About Students',
        path: '/about/aboutStudent'
    }]
    return (
        <div className="about-layout">
            <ul className='about-menu'>
                {aboutMenuBar.map((item,index)=>{
                    return(
                        <li key={index}>
                            <Link href={item.path}>{item.label}</Link>
                        </li>
                    )
                })}
            </ul>
            <div className="about-layout__content">{children}</div>
            <div>
                <Link href='/'>Go to Home page</Link>
            </div>
        </div>
    )
}

export default AboutLayout;