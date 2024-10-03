import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-14 border-b pb-5">
        <nav className="flex justify-between  items-center">
          <h1 className="text-3xl font-bold">Custom Sock Club</h1>
          <ul className="flex text-xl space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-col lg:flex-row gap-8 mb-16">
        {/* HERO */}
        <div className="lg:w-1/2">
          <div className="aspect-square bg-gray-200 flex items-center justify-center mb-4 rounded-lg">
            <span className="text-gray-500">Product Image</span>
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="w-20 h-20 flex-shrink-0 bg-gray-100 flex items-center justify-center rounded-md"
              >
                <span className="text-gray-400 text-xs">Image {index}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">Custom Athletic Socks</h2>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-gray-600">(4.5 out of 5)</span>
          </div>
          <p className="text-xl mb-4">as low as $7.27 / pair</p>
          <ul className="mb-4 text-lg list-disc pl-5">
            <li>Flagship socks are 100% made in USA</li>
            <li>Fully woven socks in 5 days</li>
            <li>Minimum Order Amount: 30</li>
            <li>Material: Premium cotton blend</li>
          </ul>
          <p className="mb-6 text-lg">
            Experience the perfect blend of comfort and style with our custom
            athletic socks. Designed for performance and personalized to your
            taste, these socks are the ultimate choice for athletes and fashion
            enthusiasts alike.
          </p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-blue-700 transition-colors duration-300">
            Get Free Designs
          </button>
        </div>
      </main>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold mb-10 text-center">
            Design Your Own Socks
          </h3>
          <div className="max-w-7xl mx-auto overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/design-sock.png"
              alt="Design your own custom socks"
              width={1920}
              height={1080}
              layout="responsive"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* QUALITY HIGHLIGHTER */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Premium Quality Socks
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-3xl font-semibold mb-4">
                Comfort meets creativity
              </h3>
              <p className="text-lg mb-6">
                We use premium materials for our custom socks, blending comfort,
                durability, and personalization to give new meaning to
                &apos;perfect fit&apos;. Our commitment to quality ensures that
                each pair of socks not only looks great but feels amazing on
                your feet.
              </p>
              <p className="text-lg mb-6">
                Whether you're an athlete looking for performance or a fashion
                enthusiast seeking unique style, our custom socks are designed
                to exceed your expectations. Experience the perfect balance of
                form and function with every step you take.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 w-96 h-96 rounded-full mx-auto flex items-center justify-center shadow-lg">
                <div className="relative w-full h-full">
                  <Image
                    src="/zoom.png"
                    alt="Zoom in on sock quality"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM PACKAGING OPTIONS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Custom Packaging Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Custom Header Cards",
                icon: "📦",
                description:
                  "Our most popular custom top wraps keep your socks neatly fastened at the top for a tidy and attractive packaging option. You can make your own unique packaging design using our templates, or let our sock experts do it for you.",
              },
              {
                title: "Custom Middle Wraps",
                icon: "🎁",
                description:
                  "Wrap your socks in style with our custom middle wraps! Designed to encircle the center of your socks, our unique packaging solution utilizes self-attaching paper to avoid leaving any marks on your socks.",
              },
              {
                title: "Custom Gift Boxes",
                icon: "🎀",
                description:
                  "Looking for the perfect gift packaging solution for your socks? We've got a box for that! Available in standard 1-pair, 2-pair, and 3-pair sizes, these boxes offer a great way to showcase your socks in style.",
              },
            ].map((option, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-6xl mb-6 text-center">{option.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  {option.title}
                </h3>
                <p className="mb-6 text-center">{option.description}</p>
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PAST WORK */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Past Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Gusto", "Topo Chico", "Google Cloud", "Calm"].map(
              (name, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-gray-100 aspect-square mb-4 flex items-center justify-center rounded-lg overflow-hidden">
                    <Image
                      src={`/client-${index + 1}.jpg`}
                      alt={`${name} custom socks`}
                      width={300}
                      height={300}
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center">{name}</h3>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 border-t border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What is the minimum order quantity?",
                answer: "Our minimum order quantity is 30 pairs of socks.",
              },
              {
                question: "How long does it take to receive my custom socks?",
                answer:
                  "We can produce fully woven socks in as little as 5 days. Shipping time varies depending on your location.",
              },
              {
                question: "Can I design my own socks?",
                answer:
                  "Yes! We offer a custom sock designer tool that allows you to create your own unique designs.",
              },
            ].map((faq, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to create your custom socks?
          </h2>
          <button className="bg-white text-black py-3 px-8 rounded-lg text-xl font-semibold hover:bg-gray-200 transition-colors duration-300">
            Get Started Now
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-semibold">Custom Sock Club</h3>
            </div>
            <nav>
              <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
                {["Home", "Products", "About", "Contact", "Privacy Policy"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
