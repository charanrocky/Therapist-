export default function About() {
  return (
    <section className="bg-[#C6E9EF] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <div className="bg-white p-2 rounded-3xl shadow-md">
            <img
              src="/pic.avif"
              alt="Dr. Serena Blake"
              className="rounded-2xl object-cover w-[250px] h-[300px]"
            />
            <div className="mt-2 p-2 bg-white bg-opacity-90 rounded-lg text-sm shadow">
              <p className="font-semibold">Dr. Serena Blake</p>
              <p className="text-xs text-gray-600">
                PsyD, Clinical Psychologist
              </p>
              <p className="mt-1 text-sm">⭐ Top Rated | 8+ Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="text-gray-800 max-w-2xl">
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            About Dr. Serena Blake - Licensed Clinical Psychologist in Los
            Angeles, CA
          </span>

          <h2 className="text-3xl font-bold mb-4">Hi, I'm Dr. Serena Blake</h2>

          <p className="mb-4 text-base">
            With over <strong>8 years of experience</strong> and more than{" "}
            <strong>500 client sessions</strong>, I help individuals overcome
            anxiety, improve relationships, and heal from trauma. I combine{" "}
            <strong>evidence-based techniques</strong> like cognitive-behavioral
            therapy (CBT) and mindfulness with compassionate, personalized care.
          </p>

          <p className="mb-4 text-base">
            My goal is to support you in a way that feels safe, understanding,
            and empowering—whether you meet me in-person at my office on{" "}
            <strong>Maplewood Drive</strong> or virtually via Zoom.
          </p>

          <p className="text-base">
            Together, we’ll work toward emotional clarity, relational strength,
            and personal peace in a confidential and welcoming environment.
          </p>
        </div>
      </div>
    </section>
  );
}
