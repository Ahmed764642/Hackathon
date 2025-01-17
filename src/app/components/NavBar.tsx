import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <div className="furniro-container">
        {/* Navbar Section */}
        <div className="header flex justify-between items-center px-6 py-4">
          {/* Logo Section */}
          <div className="furniro-logo flex items-center gap-2">
            <Image
              src="/Meubel House_Logos-05.png"
              alt="Furniro Logo"
              width={50}
              height={32}
              className="furniro-logo-img"
            />
            <h1 className="furniro-heading font-bold text-lg">Furniro</h1>
          </div>

          {/* Menu Items and Icons */}
          <div className="flex items-center justify-between w-full max-w-screen-lg">
            {/* Menu Items */}
            <ul className="flex justify-center items-center gap-8">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Shop">Shop</Link>
              </li>
              <li>
                <Link href="/Blog">Blog</Link>
              </li>
              <li>
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>

            {/* Icons */}
            <ul className="flex justify-center items-center gap-6">
              <li>
                <Link href="/">👤</Link>
              </li>
              <li>
                <Link href="/Shop">🔍</Link>
              </li>
              <li>
                <Link href="/Blog">❤️</Link>
              </li>
              <li>
                <Link href="/Contact">🛒</Link>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;
