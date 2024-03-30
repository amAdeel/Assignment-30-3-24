import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <div>
      <div className="border-2 border-red-700 max-container padding-container relative py-3 mt-4 bg-white text-black">
        <div className="flex items-center justify-between">
          <Image src="/adeel website logo.jpeg" alt="Logo" width={74} height={74} className="rounded-full"/>
          <ul className="flex space-x-4 gap-5">
            <li><Link href="/blog"   className="cursor-pointer pb-1.5 transition-all hover:font-bold">Blog</Link></li>
            <li><Link href="/contact-us"  className="cursor-pointer pb-1.5 transition-all hover:font-bold">contact-us</Link></li>
            <li><Link href="/dashboard"  className="cursor-pointer pb-1.5 transition-all hover:font-bold">Dashboard</Link></li>
            <li><Link href="/dashboard/analytics"  className="cursor-pointer pb-1.5 transition-all hover:font-bold">Analytic</Link></li>
            <li><Link href="/dashboard/#settings"  className="cursor-pointer pb-1.5 transition-all hover:font-bold">Setting</Link></li>
            <li><Link href="/dashboard/settings/password"  className="cursor-pointer pb-1.5 transition-all hover:font-bold">Password</Link></li>
            <li><Link href="/dashboard/settings/profile"  className="cursor-pointer pb-1.5 transition-all hover:font-bold">Profile</Link></li>


          </ul>
        </div>
      </div>
      <h1 className="text-center mt-5">This is home page</h1>
      <p className="flexCenter">Hello Sir ! My name is  Adeel  . you are in  Home page , please check other pages in the navbar section .</p>
      <p className="flexCenter">Thanks .</p>

    </div>
  );
}

export default Home;
