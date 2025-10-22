import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="p-10 text-center">
        <h1 className="text-3xl font-bold">Welcome to my new site 🎉</h1>
      </section>
    </main>
  );
}