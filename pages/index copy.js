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
          <div className="aspect-square bg-gray-200 flex items-center justify-center mb-4 rounded-lg shadow-md">
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
          <h2 className="text-4xl font-semibold mb-4">Custom Athletic Socks</h2>
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
          <p className="text-2xl mb-4">as low as $7.27 / pair</p>
          <ul className="mb-4 text-lg list-disc pl-5">
            <li>Flagship socks are 100% made in USA</li>
            <li>Fully woven socks in 5 days</li>
            <li>Minimum Order Amount: 30</li>
            <li>Material: Lorem ipsum</li>
          </ul>
          <p className="mb-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="bg-black text-white py-3 px-6 rounded-lg text-xl hover:bg-gray-800 transition-colors duration-300">
            Get Free Designs
          </button>
        </div>
      </main>
      {/*  */}

      {/* CUSTOM SOCK DESIGNER TOOL SCREENSHOT*/}
      <section className="bg-gray-100 py-14">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-semibold mb-8 text-center">
            Design Your Own Socks
          </h3>
          <div className="max-w-7xl mx-auto">
            <Image
              className="w-full h-auto rounded-lg shadow-lg"
              src="/design-sock.png"
              alt="Design your own custom socks"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </section>

      {/* QUALITY HIGHLIGHTER */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-3xl font-semibold mb-4">
                Custom socks: Comfort meets creativity.
              </h3>
              <p className="text-lg text-gray-600">
                Let&apos;s talk socks: the best pair is the one that expresses
                your style while lasting the longest. That&apos;s why we use
                premium materials for our custom socks. With our blend of
                comfort, durability, and personalization, we&apos;re giving new
                meaning to &apos;perfect fit&apos;.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <div className="relative">
                <Image
                  src="/zoom.png"
                  alt="Zoom in on sock quality"
                  width={400}
                  height={400}
                  className="w-4/5 h-auto rounded-full shadow-lg object-cover mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PAST WORK */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-14">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12">
            <div className="md:w-2/3">
              <h2 className="text-4xl font-semibold mb-4">Our Past Work</h2>
              <p className="text-lg text-gray-600 mb-6">
                Interviews, tips, guides, Need some inspiration for your branded
                socks, or want to see how other custom logo socks have been used
                as promotional items?
              </p>
              <p className="text-lg text-gray-600">
                We put together some of our favorite designs for our custom crew
                socks to get you started. Our amazing sock designers have
                created over 50,000 custom sock designs. We put a lot of energy
                and creativity into each sock design so that we can make the
                best possible socks for our clients. best practices, and news.
              </p>
            </div>
            <button className="bg-red-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-red-700 transition-colors duration-300 mt-6 md:mt-0">
              View All Socks
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Gusto", image: "/gusto-sock.jpg" },
              { name: "Topo Chico", image: "/topo-chico-sock.jpg" },
              { name: "Google Cloud", image: "/google-cloud-sock.jpg" },
              { name: "Calm", image: "/calm-sock.jpg" },
            ].map((sock, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <Image
                  src={sock.image}
                  alt={`${sock.name} custom sock`}
                  width={300}
                  height={400}
                  className="w-full h-auto rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-center">
                  {sock.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                company: "Tech Innovators",
                review:
                  "The custom socks we ordered for our company event were a huge hit! Great quality and excellent customer service.",
                rating: 5,
              },
              {
                name: "Jane Smith",
                company: "Creative Studios",
                review:
                  "Impressed with the design process and the final product. Our team loves wearing these unique socks!",
                rating: 4,
              },
              {
                name: "Mike Johnson",
                company: "Sports United",
                review:
                  "The socks are comfortable, durable, and look fantastic. We'll definitely be ordering more for our sports teams.",
                rating: 5,
              },
              {
                name: "Emily Chen",
                company: "Startup Accelerator",
                review:
                  "These custom socks were the perfect addition to our welcome packages. Our startups loved the personal touch!",
                rating: 5,
              },
              {
                name: "Alex Rodriguez",
                company: "Marketing Wizards",
                review:
                  "The attention to detail in the design process was impressive. Our branded socks are now a staple in our company culture.",
                rating: 4,
              },
              {
                name: "Sarah Thompson",
                company: "Eco Friendly Co.",
                review:
                  "We appreciate the sustainable options available. Our custom socks align perfectly with our company's green initiatives.",
                rating: 5,
              },
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{review.review}</p>
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-12 text-center">
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
              {
                question: "What materials are used in your socks?",
                answer:
                  "We use high-quality materials such as combed cotton, polyester, and spandex. The exact blend depends on the type of sock you choose.",
              },
              {
                question:
                  "Do you offer sample socks before placing a bulk order?",
                answer:
                  "Yes, we offer sample socks for a small fee. This allows you to check the quality and design before placing a larger order.",
              },
              {
                question: "What sizes do you offer for custom socks?",
                answer:
                  "We offer a range of sizes from children's to adult, including standard US sizes 4-13.",
              },
              {
                question: "Can I add my company logo to the socks?",
                answer:
                  "Absolutely! We specialize in adding logos and custom designs to our socks. Our design team can help you with placement and sizing.",
              },
              {
                question: "What is your return policy?",
                answer:
                  "We offer returns on unworn, non-custom socks within 30 days of purchase. Custom orders are final sale due to their personalized nature.",
              },
            ].map((faq, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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
          <p className="text-xl mb-8">
            Start designing your unique socks today and stand out from the
            crowd!
          </p>
          <button className="bg-white text-black py-3 px-8 rounded-lg text-xl font-semibold hover:bg-gray-200 transition-colors duration-300">
            Get Started Now
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <h3 className="text-xl font-semibold">Custom Sock Club</h3>
              <p className="text-gray-600">© 2023 All rights reserved</p>
            </div>
            <nav>
              <ul className="flex flex-wrap space-x-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
