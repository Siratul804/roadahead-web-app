import Navbar from "../ui/Navbar";

export default function PageLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar />

      {children}
    </section>
  );
}
