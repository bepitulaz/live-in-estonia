import Footer from "./Footer";

export default function HomeLayout({ children }) {
  return (
    <>
      <header className="mx-auto max-w-6xl p-4 md:p-0">
        <h1 className="brand-title text-3xl md:text-4xl">Live In Estonia</h1>
        <h3 className="font-light text-sm md:text-base max-w-[300px] md:max-w-none">
          Photographing the nature and the daily life of living in Estonia
        </h3>
      </header>
      <main className="mx-auto max-w-6xl">{children}</main>
      <Footer />
    </>
  );
}
