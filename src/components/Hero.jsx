export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/herobg.jpg')`, // Ensure image is in /public
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <p className="text-sm md:text-base mb-2">
          Compassionate Counseling in a Safe, Supportive Space
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Find Healing, Clarity, and Emotional Wellness
        </h1>
        <h2 className="text-lg md:text-xl mb-6">
          Personalized therapy for individuals, couples, and those navigating
          life’s toughest challenges.
        </h2>
        <p className="text-base font-semibold mb-2">
          You don’t have to go through it alone.
        </p>
        <p className="text-lg md:text-xl font-bold text-blue-200 mb-4">
          Start your journey toward a more peaceful, empowered life.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-6 text-sm">
          <span className="flex items-center gap-1">
            ⭐ <strong>Trusted by 500+ Clients</strong>
          </span>
          <span>• 8+ Years Experience</span>
          <span>
            • <u>Licensed Therapist</u>
          </span>
        </div>
        <button className="bg-white text-blue-700 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-blue-100 transition">
          Schedule Your Free Consultation
        </button>
      </div>
    </section>
  );
}
