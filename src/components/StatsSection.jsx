export default function StatsSection() {
  return (
    <section className="bg-[#34585A] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">
        {/* Column 1 */}
        <div>
          <h3 className="text-5xl font-extrabold mb-2">8+</h3>
          <p className="text-xl font-semibold mb-1">Years of Practice</p>
          <p className="text-sm text-gray-100">
            Offering effective therapy for anxiety, trauma, and relationship
            growth.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-5xl font-extrabold mb-2">500+</h3>
          <p className="text-xl font-semibold mb-1">Client Sessions</p>
          <p className="text-sm text-gray-100">
            Supporting individuals and couples in healing, growth, and
            self-discovery.
          </p>
        </div>
      </div>
    </section>
  );
}
