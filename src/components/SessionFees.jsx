export default function SessionFees() {
  return (
    <section className="bg-[#2F4F4F] text-white py-16">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
        {/* Individual Session */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">$200</h2>
          <h3 className="text-lg font-semibold mb-1">Individual Session</h3>
          <p className="text-sm text-gray-200">
            Compassionate, personalized support for anxiety, trauma, and
            personal growth.
          </p>
        </div>

        {/* Couples Session */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">$240</h2>
          <h3 className="text-lg font-semibold mb-1">Couples Session</h3>
          <p className="text-sm text-gray-200">
            Strengthen your relationship through guided communication and deeper
            connection.
          </p>
        </div>
      </div>
    </section>
  );
}
