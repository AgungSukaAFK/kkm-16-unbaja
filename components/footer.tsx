import { Instagram, Youtube, User } from "lucide-react"; // Ganti `User` dengan ikon TikTok jika tersedia

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8 w-full">
      <div className="mx-auto container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; 2025 Kelompok 16 KKM UNBAJA. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/kkm16.kuranji/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <Youtube size={20} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            {/* Placeholder untuk TikTok, karena lucide-react mungkin belum punya */}
            <User size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
