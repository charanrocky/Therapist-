import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    time: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.message.trim())
      newErrors.message = "Please tell us what brings you here.";
    if (!formData.time.trim()) newErrors.time = "Preferred time is required.";
    if (!formData.agree) newErrors.agree = "You must agree to be contacted.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      // send data logic here
    }
  };

  return (
    <section className="bg-[#F4F5F6] py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Location Info */}
        <div className="border border-green-800 rounded-lg p-6 bg-white shadow-md text-gray-800 text-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-green-900 mb-2">Location</h3>
            <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-green-900 mb-2">Contact</h3>
            <p>📞 Phone: (323) 555-0192</p>
            <p>
              📧 Email:{" "}
              <a
                href="mailto:serena@blakepsychology.com"
                className="text-blue-700 underline"
              >
                serena@blakepsychology.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-green-900 mb-2">
              Office Hours
            </h3>
            <p>🧍‍♀️ In-person: Tue & Thu, 10 AM–6 PM</p>
            <p>💻 Virtual (Zoom): Mon, Wed & Fri, 1 PM–5 PM</p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="border border-green-800 rounded-lg p-8 shadow-md bg-white">
          <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-2 text-center">
            Get In Touch
          </h2>
          <p className="text-center text-gray-700 mb-6 text-sm">
            Simply fill out the brief fields below and Dr. Serena Blake will be
            in touch with you soon, usually within one business day. This form
            is safe, private, and completely free.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 text-sm">
            {/* Name */}
            <div>
              <label className="block font-medium text-gray-800 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full border border-green-800 rounded px-3 py-2"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-red-600 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium text-gray-800 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-green-800 rounded px-3 py-2"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="text-red-600 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium text-gray-800 mb-1">
                Phone
              </label>
              <input
                type="text"
                className="w-full border border-green-800 rounded px-3 py-2"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              {errors.phone && (
                <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium text-gray-800 mb-1">
                What brings you here?
              </label>
              <textarea
                rows="3"
                className="w-full border border-green-800 rounded px-3 py-2"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
              {errors.message && (
                <p className="text-red-600 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Time */}
            <div>
              <label className="block font-medium text-gray-800 mb-1">
                Preferred time to reach you
              </label>
              <input
                type="text"
                placeholder="e.g., Mornings, Afternoons, Evenings"
                className="w-full border border-green-800 rounded px-3 py-2"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
              />
              {errors.time && (
                <p className="text-red-600 text-xs mt-1">{errors.time}</p>
              )}
            </div>

            {/* Agreement */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={formData.agree}
                onChange={(e) =>
                  setFormData({ ...formData, agree: e.target.checked })
                }
                className="mt-1"
              />
              <label className="text-sm text-gray-800">
                I agree to be contacted via email or phone.
              </label>
            </div>
            {errors.agree && (
              <p className="text-red-600 text-xs mt-1">{errors.agree}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-green-900 text-white py-2 rounded hover:bg-green-800 transition"
            >
              Submit
            </button>

            <p className="text-xs text-gray-600 mt-2">
              ℹ️ By clicking submit, you consent to receive texts and emails
              from Dr. Serena Blake.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
