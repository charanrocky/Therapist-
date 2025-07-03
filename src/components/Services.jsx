export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description:
        "Learn practical tools and calming techniques to manage anxiety and daily stress. Together, we’ll uncover root causes and restore your emotional balance.",
      image: "/stress.jpg",
    },
    {
      title: "Relationship Counseling",
      description:
        "Whether you're navigating conflict or strengthening communication, I help couples and individuals build healthier, more meaningful relationships.",
      image: "/Relationship.jpg",
    },
    {
      title: "Trauma Recovery",
      description:
        "Healing from trauma is possible. We’ll create a safe, compassionate space to process pain and gently move toward lasting recovery and resilience.",
      image: "/Trauma.jpg",
    },
  ];

  return (
    <section className="bg-[#F4F5F6] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">How I Help</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#B8DDE0] rounded-xl overflow-hidden shadow hover:shadow-lg transition border border-black"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  {service.description}
                </p>
                <button className="w-full border border-black text-center text-sm py-2 rounded hover:bg-gray-100 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
