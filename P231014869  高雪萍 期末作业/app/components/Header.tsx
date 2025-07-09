import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4">
      <nav className="container mx-auto flex flex-col items-center space-y-4">
        <Link href="/" className="font-bold text-3xl text-gray-800 hover:text-green-700">
          小羊羔
        </Link>
        <div className="space-x-8 text-lg">
          <Link href="/portfolio" className="text-gray-700 hover:text-green-700">
            作品集
          </Link>
          <Link href="/qanything" className="text-gray-700 hover:text-green-700">
            QAnything 问答
          </Link>
        </div>
      </nav>
    </header>
  );
} 