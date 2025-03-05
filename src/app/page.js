'use client';
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const navigateToPage = (url) => {
    router.push(url,{queryParams:{userId:'123'}});
  }
  return (
    <div>
      <h1>Home</h1>
      <br/>
      <Link href='/login'>Login</Link>
      <br/>
      <button onClick={()=>navigateToPage('/login')}>Go to Login Page</button>
      <button onClick={()=>navigateToPage('/about')}>Go to About Page</button>
    </div>
  );
}
