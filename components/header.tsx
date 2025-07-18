import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center mx-auto">
        <div className="mr-4 hidden md:flex">
          <a href="#beranda" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">KKM 16 UNBAJA</span>
          </a>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <a
            href="#beranda"
            className="transition-colors hover:text-foreground/80"
          >
            Beranda
          </a>
          <a
            href="#tentang"
            className="transition-colors hover:text-foreground/80"
          >
            Tentang
          </a>
          <a
            href="#anggota"
            className="transition-colors hover:text-foreground/80"
          >
            Anggota
          </a>
          <a
            href="#proker"
            className="transition-colors hover:text-foreground/80"
          >
            Proker
          </a>
          <a
            href="#galeri"
            className="transition-colors hover:text-foreground/80"
          >
            Galeri
          </a>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
