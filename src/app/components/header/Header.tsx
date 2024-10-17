// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Pablo<span className='text-green-300'>Dev</span>
        </Link>

    
        <ul className="flex items-center space-x-8">
          <li>
            <Link href="/" className="hover:text-gray-300 transition-colors">
            Who I am
            </Link>
          </li>
          <li>
            <Link href="/who-i-am" className="hover:text-gray-300 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/experience" className="hover:text-gray-300 transition-colors">
              Experience
            </Link>
          </li>
          <li>
            <Link href="/knowledge" className="hover:text-gray-300 transition-colors">
              Knowledge
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;