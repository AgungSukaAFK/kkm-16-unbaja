import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import GalleryItem from "@/components/gallery-item";

// Data Anggota (Bisa diganti dengan data asli)
const members = [
  {
    name: "Agus",
    position: "Ketua Kelompok",
    avatar: "/avatars/01.png",
  },
  {
    name: "Jubaedah",
    position: "Sekretaris",
    avatar: "/avatars/02.png",
  },
  {
    name: "Samsudin",
    position: "Bendahara",
    avatar: "/avatars/03.png",
  },
  {
    name: "Bejo",
    position: "Assassin",
    avatar: "/avatars/04.png",
  },
];

// Data Program Kerja (Contoh)
const programs = [
  {
    title: "Sosialisasi Kesehatan",
    description:
      "Penyuluhan tentang pentingnya menjaga kesehatan diri dan lingkungan.",
  },
  {
    title: "Pelatihan Kewirausahaan",
    description:
      "Workshop untuk meningkatkan keterampilan berwirausaha warga desa.",
  },
  {
    title: "Bimbingan Belajar",
    description:
      "Sesi belajar interaktif untuk siswa sekolah dasar dan menengah.",
  },
  {
    title: "Penanaman Pohon",
    description: "Kegiatan penghijauan lingkungan desa Kuranji.",
  },
  {
    title: "Pengembangan Potensi Lokal",
    description:
      "Identifikasi dan pengembangan sumber daya serta potensi unggulan desa.",
  },
];

// Data Galeri (Contoh)
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1442544213729-6a15f1611937?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Kegiatan Lorem",
    caption: "Foto kegiatan lorem ipsum",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <Header />
      <main className="flex-1">
        {/* Beranda */}
        <section
          id="beranda"
          className="container grid place-items-center gap-6 pb-8 pt-6 md:py-24"
        >
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              Kuliah Kerja Mahasiswa (KKM) <br className="hidden sm:inline" />
              Kelompok 16 UNBAJA 2025
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Mengabdi untuk Masyarakat di Desa Kuranji. <br />
              31 Juli - 8 September 2025
            </p>
          </div>
          <div className="flex gap-4">
            <a href="#tentang">
              <Button>Pelajari Lebih Lanjut</Button>
            </a>
            <a href="#proker">
              <Button variant="outline">Program Kerja</Button>
            </a>
          </div>
        </section>

        {/* Tentang */}
        <section id="tentang" className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Tentang KKM Kami
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                KKM Kelompok 16 Universitas Banten Jaya berfokus pada
                pemberdayaan masyarakat Desa Kuranji melalui program-program
                inovatif di bidang pendidikan, ekonomi kreatif, dan kesehatan
                lingkungan. Kami berkomitmen untuk memberikan dampak positif
                yang berkelanjutan selama kegiatan KKM yang berlangsung dari 31
                Juli hingga 8 September 2025.
              </p>
            </div>
          </div>
        </section>

        {/* Anggota */}
        <section id="anggota" className="container py-12 md:py-24">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Anggota Kelompok 16
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tim solid di balik program kerja KKM UNBAJA 2025 di Desa Kuranji.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {members.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Avatar className="mx-auto h-20 w-20">
                    <AvatarImage
                      src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${member.name}`}
                      alt={member.name}
                    />
                    <AvatarFallback>
                      {member.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-base font-semibold">
                    {member.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {member.position}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Program Kerja */}
        <section id="proker" className="py-12 md:py-20 bg-muted">
          <div className="container">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Program Kerja Kami
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Rencana kegiatan yang akan dilaksanakan di Desa Kuranji.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {programs.map((program, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {program.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Galeri */}
        <section id="galeri" className="container py-12 md:py-20">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Galeri Kegiatan
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Momen-momen berharga selama pengabdian kami di Desa Kuranji.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages.map((image, index) => (
              <GalleryItem
                key={index}
                src={image.src}
                alt={image.alt}
                caption={image.caption}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
