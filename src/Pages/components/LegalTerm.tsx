const LegalTerms = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
        <p className="text-gray-600 mb-4">
          Welcome to <strong>Baddies Clinic</strong>! By accessing and using our website, you agree to the following
          terms and conditions. Please read them carefully.
        </p>

        <div className="space-y-8">
          {/* Section 1: Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Introduction</h2>
            <p className="text-gray-600">
              These Terms and Conditions ("Terms") govern your use of our website and the booking or purchase of our hair services and products.
              By using our platform, you agree to these Terms. If you do not agree, please do not use our services.
            </p>
          </div>

          {/* Section 2: Services and Products */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Services and Products</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Baddies Clinic offers high-quality female wigs, dreadlock services, hair installations, and styling for both male and female clients.</li>
              <li>All wigs are handpicked and curated for premium quality and style.</li>
              <li>Appointments must be booked in advance for styling and installation services.</li>
            </ul>
          </div>

          {/* Section 3: Payment Terms */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Payment Terms</h2>
            <p className="text-gray-600">
              Full payment is required before service is confirmed or a product is shipped. We accept the following payment methods:
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Bank Transfers</li>
              <li>Mobile Transfers</li>
              <li>In-store POS Payments</li>
            </ul>
          </div>

          {/* Section 4: Appointment and Delivery */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Appointment and Delivery</h2>
            <p className="text-gray-600">
              Appointments are confirmed only after payment. Delivery of wigs and other products takes between <strong>2–5 business days</strong>, depending on location.
            </p>
          </div>

          {/* Section 5: Returns and Refunds */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Returns and Refunds</h2>
            <p className="text-gray-600">
              Due to the hygienic nature of wigs and hair products, <strong>all wig sales are final and non-returnable</strong>.
              We do not offer refunds or exchanges for wigs once sold.
            </p>
            <p className="text-gray-600 mt-2">
              For services, refunds are not issued once the session has started. If you are unable to make your appointment, kindly reschedule at least 24 hours in advance.
            </p>
          </div>

          {/* Section 6: Use of Website */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Use of Website</h2>
            <p className="text-gray-600">
              You agree to use this website respectfully and lawfully. Unauthorized use or any malicious behavior may result in access termination or legal action.
            </p>
          </div>

          {/* Section 7: Contact Us */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Contact Us</h2>
            <p className="text-gray-600">
              For any inquiries regarding our Terms, services, or bookings, please contact us:
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:baddiesclinic@gmail.com" className="text-blue-800 font-semibold text-sm underline">
                baddiesclinic@gmail.com
              </a>
              <br />
              <strong>Phone:</strong>{" "}
              <a href="tel:+2348101234567" className="text-blue-800 font-semibold text-sm underline">
                +234 810 123 4567
              </a>
            </p>
          </div>
        </div>

        <p className="text-gray-500 mt-8">
          Last updated: <span className="font-semibold">July 22, 2025</span>
        </p>
      </div>
    </div>
  );
};

export default LegalTerms;
