'use client';
import styles from './login.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LoginLayout = ({ children }) => {
    const pathName = usePathname();
    console.log('pathName',pathName);
    const loginMenuBar = [{
        label:'Main Login',
        path:'/login'
    },{
        label:'Student Login',
        path:'/login/studentLogin'
    },{
        label:'Teacher Login',
        path:'/login/teacherLogin'
    }]
  return (
    <div className="login-layout">
        <ul className='login-menu'>
            {pathName === '/login' ? <li>N E X T .JS</li> : null}
            {loginMenuBar.map((item,index)=>{
                return(
                    <li key={index}>
                        <Link href={item.path}>{item.label}</Link>
                    </li>
                )
            })}
        </ul>
        <div className="login-layout__content">{children}</div>
        <div>
            <Link href='/'>Go to Home page</Link>
        </div>
    </div>
  );
};

export default LoginLayout;