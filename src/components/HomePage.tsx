import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/Hero";
import BlogList from "@/components/BlogList";
import BlogDetail from "@/components/BlogDetail";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Hero />

      <main className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6 px-8 pb-12">
        {/* Left */}
        <aside className="md:col-span-1">
          <BlogList />
        </aside>

        {/* Right */}
        <section className="md:col-span-3">
          <BlogDetail />
        </section>
      </main>

      <Footer />
    </div>
  );
}
