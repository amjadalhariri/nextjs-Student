import Link from "next/link";
export default function Navigation() {
    return (
      <nav className="site-navigation">
        <Link href="/">
          <a> Start</a>
        </Link>
        <Link href="/impressum">
          <a>Impressum</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/bilder">
          <a>Bilder</a>
        </Link>
        <Link href="/news">
          <a>News</a>
        </Link>
        <Link href="/standorte">
          <a>Standorte</a>
        </Link>
        <a href="http://"> Navigation</a>
      </nav>
    );
}
