import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <div>
      <div className="border-2 border-red-700 max-container padding-container relative py-7 mt-5">
        <div className="flex items-center justify-between">
          <Image src="/next.svg" alt="logo" width={74} height={29}>Adeel</Image>
          <ul className="flex space-x-4 gap-5">
            <li><Link href="/blog"   className="cursor-pointer pb-1.5 transition-all hover:font-bold">Blog</Link></li>
            <li><Link href="/contact-us"  className="cursor-pointer pb-1.5 transition-all hover:font-bold">contact-us</Link></li>
            <li><Link href="/dashboard"  className="cursor-pointer pb-1.5 transition-all hover:font-bold">Dashboard</Link></li>
            <li><Link href="/dashboard/analytic"  className="cursor-pointer pb-1.5 transition-all hover:font-bold">Analytic</Link></li>
            <li><Link href="/dashboard/setting"  className="cursor-pointer pb-1.5 transition-all hover:font-bold">Setting</Link></li>
            <li><Link href="/dashboard/setting/password"  className="cursor-pointer pb-1.5 transition-all hover:font-bold">Password</Link></li>
            <li><Link href="/dashboard/setting/profile"  className="cursor-pointer pb-1.5 transition-all hover:font-bold">Profile</Link></li>


          </ul>
        </div>
      </div>
      <h1 className="text-center mt-5">This is home page</h1>
    </div>
  );
}

export default Home;
