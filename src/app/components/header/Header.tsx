// components/Header.tsx
import Link from 'next/link';
import SpanColor from '../ui/span-color.component';
import Nav from './nav-bar.component'

const Header = () => {
  return (
    <header className="md  w-full py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Pablo<SpanColor>Dev</SpanColor>
        </Link>
        <Nav/>
      </div>
    </header>
  );
};

export default Header;