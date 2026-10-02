import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Divisions from "@/components/Divisions";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import IntroOverlay from "@/components/IntroOverlay";

const divisionsPreview = [
  {
    code: "CAD",
    title: "Creative, Animation & Design",
    text: "Desain komunikasi visual, pengembangan gim interaktif, dan produksi animasi 2D/3D untuk memperkuat daya tarik visual merek.",
  },
  {
    code: "ISD",
    title: "Information System & Development",
    text: "Rekayasa perangkat lunak modern, pengembangan aplikasi web skala bisnis, serta infrastruktur jaringan yang tangguh dan aman.",
  },
  {
    code: "MMD",
    title: "Media, Marketing & Broadcast",
    text: "Strategi komunikasi terpadu, promosi digital multi-kanal, dan produksi media penyiaran profesional untuk memperluas jangkauan pasar.",
  },
];

const services = [
  "Pengadaan produk berkualitas tinggi & terstandar",
  "Jasa konsultasi dan solusi teknis terstruktur",
  "Alur kerja yang sederhana, transparan, dan terukur",
  "Standar mutu terpercaya dengan dukungan purna jual",
];

const reasons = [
  {
    title: "Terintegrasi",
    text: "Produk dan jasa berjalan dalam satu alur kerja yang saling mendukung, menyederhanakan komunikasi dan eksekusi.",
  },
  {
    title: "Terukur",
    text: "Setiap proses memiliki indikator kinerja (KPI) yang jelas sehingga progres dan hasil dapat dievaluasi secara akurat.",
  },
  {
    title: "Tepat Waktu",
    text: "Tim berpengalaman dengan manajemen timeline disiplin menjaga komitmen tenggat waktu pada setiap pekerjaan.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Konsultasi & Pemetaan Kebutuhan",
    text: "Diskusi mendalam untuk memahami secara presisi tujuan bisnis, spesifikasi teknis produk atau jasa, dan target hasil yang diharapkan.",
    tag: "Tahap Eksplorasi",
  },
  {
    step: "02",
    title: "Penyusunan Rencana & Proposal Kerja",
    text: "Merumuskan ruang lingkup kerja (Scope of Work), estimasi timeline eksekusi yang realistis, serta penawaran biaya yang transparan.",
    tag: "Perencanaan Terpadu",
  },
  {
    step: "03",
    title: "Eksekusi Lintas Divisi & Kontrol Mutu",
    text: "Pengerjaan proyek oleh tim ahli CAD, ISD, atau MMD dengan pemantauan progres rutin dan pengujian standar mutu berkala.",
    tag: "Produksi & Uji Mutu",
  },
  {
    step: "04",
    title: "Serah Terima & Dukungan Purna Jual",
    text: "Penyerahan hasil akhir lengkap beserta dokumentasi teknis, file master siap pakai, dan jaminan dukungan purna jual.",
    tag: "Finalisasi & Garansi",
  },
];

export default function Home() {
  return (
    <>
      <IntroOverlay />
      <Navbar />

      <header className="bj-hero" id="home">
        <div className="bj-hero-grid">
          <div>
            <Reveal as="span" className="bj-eyebrow">
              Produk & Jasa Terintegrasi
            </Reveal>
            <Reveal as="h2" delay={80}>
              Banantara Joury Menghadirkan Solusi Efisien dan Bernilai Tambah
            </Reveal>
            <Reveal as="p" delay={160}>
              Kami menggabungkan pengadaan produk dan penyediaan jasa dalam satu ekosistem
              kerja yang terstruktur, dirancang untuk memberikan efisiensi serta nilai tambah
              nyata bagi kebutuhan bisnis Anda.
            </Reveal>
            <Reveal delay={240} className="bj-hero-actions">
              <a className="bj-btn" href="#divisi">
                Eksplorasi Divisi
              </a>
              <a
                className="bj-btn bj-btn-ghost"
                href="https://wa.me/6285124432231"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat WhatsApp
              </a>
            </Reveal>
          </div>
          <Reveal delay={200} className="bj-hero-visual">
            <img
              className="bj-hero-logo"
              src="/img/banantara.png"
              alt="Logo PT Banantara Joury"
              width="427"
              height="327"
            />
          </Reveal>
        </div>
      </header>

      <main>
        <section className="bj-section" id="services">
          <div className="bj-split">
            <Reveal className="bj-split-media">
              <div className="bj-image-frame">
                <img src="/img/kerdos.png" alt="Pengadaan produk Banantara Joury" />
              </div>
            </Reveal>
            <Reveal delay={120} className="bj-split-content">
              <span className="bj-eyebrow">Layanan Terpadu</span>
              <h3>Solusi Pengadaan & Jasa Teknis Terstruktur</h3>
              <p>
                Mulai dari pengadaan produk berkualitas tinggi hingga penyediaan jasa konsultasi
                dan solusi teknis terstruktur. Kami hadir menyederhanakan alur kerja serta
                meningkatkan efisiensi operasional bisnis Anda dengan standar mutu terpercaya.
              </p>
              <ul className="bj-features">
                {services.map((item) => (
                  <li key={item}>
                    <span className="bj-features-bullet">&check;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bj-mt-4">
                <a
                  className="bj-btn"
                  href="https://wa.me/6285124432231"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konsultasi via WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bj-section bj-section-alt" id="about">
          <div className="bj-split bj-split-reverse">
            <Reveal className="bj-split-content">
              <span className="bj-eyebrow">Sinergi Keahlian</span>
              <h3>Kolaborasi Tiga Pilar dari Hulu hingga Hilir</h3>
              <p>
                Banantara Joury mengintegrasikan tiga keahlian inti dalam satu mata rantai kerja: <strong>CAD</strong> untuk kekuatan kreatif dan visual, <strong>ISD</strong> untuk infrastruktur teknologi dan aplikasi, serta <strong>MMD</strong> untuk amplifikasi media dan penetrasi pasar.
              </p>
              <div className="bj-pill-grid bj-pill-grid-three">
                {divisionsPreview.map((item) => (
                  <div className="bj-pill-card" key={item.code}>
                    <span className="bj-pill-code">{item.code}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={160} className="bj-split-media">
              <div className="bj-image-frame bj-image-center">
                <img
                  src="/img/logoh.png"
                  alt="Sinergi Tiga Divisi Banantara Joury"
                  className="bj-feature-image"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bj-section" id="why-us">
          <div className="bj-split">
            <Reveal className="bj-split-media">
              <div className="bj-badge-card">
                <div className="bj-badge-card-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h4>Standar Kualitas Banantara</h4>
                <p>Dedikasi menyeluruh dalam setiap pengadaan dan pelayanan terpadu.</p>
                <div className="bj-badge-list">
                  <div className="bj-badge-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>100% Terintegrasi</span>
                  </div>
                  <div className="bj-badge-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Transparan & Akuntabel</span>
                  </div>
                  <div className="bj-badge-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>Profesional & Teruji</span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120} className="bj-split-content">
              <span className="bj-eyebrow">Why Choose Us</span>
              <h3>Alasan Memilih Banantara Joury</h3>
              <p>
                Kami percaya keberhasilan sebuah solusi ditentukan oleh integrasi proses yang
                solid, evaluasi hasil yang terukur, dan komitmen waktu yang terjaga.
              </p>
              <div className="bj-reasons-stacked">
                {reasons.map((item, index) => (
                  <div className="bj-reason-box" key={item.title}>
                    <div className="bj-reason-num">0{index + 1}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <Divisions />

        <section className="bj-section bj-section-alt" id="workflow">
          <div className="bj-section-head">
            <Reveal as="span" className="bj-eyebrow">
              Alur Kolaborasi
            </Reveal>
            <Reveal as="h2" delay={80}>
              Tahapan Kerja Sama yang Terstruktur &amp; Transparan
            </Reveal>
            <Reveal as="p" delay={160}>
              Dari sesi konsultasi awal hingga penyerahan hasil akhir, kami menerapkan alur kerja yang jelas demi memastikan setiap target bisnis Anda tercapai tepat waktu.
            </Reveal>
          </div>

          <div className="bj-workflow-grid">
            {workflowSteps.map((item, index) => (
              <Reveal key={item.step} delay={index * 100}>
                <div className="bj-workflow-card">
                  <div className="bj-workflow-header">
                    <span className="bj-workflow-num">{item.step}</span>
                    <span className="bj-workflow-tag">{item.tag}</span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="bj-workflow-reassurance">
            <div className="bj-reassurance-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>100% Transparansi Biaya &amp; Progres</span>
            </div>
            <div className="bj-reassurance-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>Disiplin Timeline &amp; Tenggat Waktu</span>
            </div>
            <div className="bj-reassurance-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Jaminan Kualitas &amp; Dukungan Purna Jual</span>
            </div>
          </Reveal>
        </section>

        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
