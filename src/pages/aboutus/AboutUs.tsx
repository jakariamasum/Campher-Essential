import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import team1 from "../../assets/images/team1.jpg";
import team2 from "../../assets/images/team2.jpg";
import team3 from "../../assets/images/team3.jpg";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      bio: "John has over 20 years of experience in the outdoor and camping industry.",
      image: team1,
    },
    {
      name: "Jane Smith",
      role: "Marketing Manager",
      bio: "Jane is passionate about outdoor adventures and leading our marketing strategies.",
      image: team2,
    },
    {
      name: "Alex Johnson",
      role: "Product Manager",
      bio: "Alex ensures we have the best products available for our customers.",
      image: team3,
    },
  ];

  return (
    <div className="max-w-[1230px] mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to <span className="font-semibold">Campers Shop</span>, your
          ultimate destination for all things camping. Dive into a world where
          adventure meets comfort.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
        <p className="text-lg text-gray-600">Phone: (123) 456-7890</p>
        <p className="text-lg text-gray-600">Email: info@campersshop.com</p>
        <p className="text-lg text-gray-600">
          Address: 123 Camping St, Adventure City, AC 12345
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Location</h2>
        <div className="w-full h-96">
          <iframe
            title="Campers Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0867503433966!2d-122.41941548468117!3d37.77492967975917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808dd3e3d2e7%3A0xa4b0b70cdd0a2a19!2s123%20Camping%20St%2C%20San%20Francisco%2C%20CA%2094123!5e0!3m2!1sen!2sus!4v1592203039192!5m2!1sen!2sus"
            className="w-full h-full border-0"
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Follow Us</h2>
        <div className="flex justify-center gap-4 text-3xl">
          <Link
            to="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="text-[#21A0F3]" />
          </Link>
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-black" />
          </Link>
          <Link
            to="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-[#21A0F3]" />
          </Link>
          <Link
            to="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare className="text-black" />
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>
            <span className="font-semibold">Customer-Centric Excellence:</span>{" "}
            We prioritize customer satisfaction above all else, ensuring every
            camper finds exactly what they need for their adventure. We are
            committed to providing exceptional service that exceeds
            expectations, helping our customers make memorable outdoor
            experiences.
          </li>
          <li>
            <span className="font-semibold">Quality Assurance:</span> We
            guarantee the highest standards in the products we offer, rigorously
            testing each item for durability, functionality, and safety. Our
            dedication to quality ensures that every product meets the demands
            of outdoor enthusiasts, delivering reliability in every use.
          </li>
          <li>
            <span className="font-semibold">Environmental Responsibility:</span>{" "}
            We are passionate about preserving the natural environment that
            inspires our customers. Our commitment to sustainability drives us
            to source eco-friendly materials and support responsible
            manufacturing practices.
          </li>
          <li>
            <span className="font-semibold">Community Engagement:</span> Beyond
            transactions, we aim to build a community of outdoor enthusiasts who
            share their experiences and passion for camping. We actively engage
            with our community through educational resources, events, and
            partnerships that promote outdoor recreation.
          </li>
          <li>
            <span className="font-semibold">Innovation and Adaptability:</span>{" "}
            We embrace innovation to continuously improve our product offerings
            and customer experience. Adapting to evolving trends and
            technologies, we strive to stay ahead in the outdoor gear industry,
            ensuring our customers have access to the latest advancements.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <h4 className="text-lg text-gray-600 mb-2">{member.role}</h4>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
