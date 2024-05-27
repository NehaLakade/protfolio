// pages/index.js
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import SkillIcon from "@/components/SkillIcon";

const Home = () => {
  return (
    <Layout>
      <section
        id="about"
        className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8 flex items-center justify-center text-white relative"
      >
        <div className="absolute inset-0 bg-fixed bg-cover opacity-20 bg-3d-effect"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          <div className="flex-shrink-0">
            <Image
              src="/img1.jpg"
              alt="Profile Picture"
              width={300}
              height={300}
              className="rounded-full shadow-lg transform transition-transform duration-500 hover:rotate-y-180"
            />
          </div>
          <div className="mt-6 md:mt-0 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              <h2 className="text-5xl font-bold mb-4 animate-fade-in">
                 Hi I&apos;M Neha
              </h2>
            </h1>
            <p className="max-w-xl text-lg text-gray-200 animate-fade-in">
              Hello! I am a passionate web developer with experience in creating
              dynamic and responsive websites using modern technologies. I enjoy
              coding, learning new skills, and solving problems.
            </p>
            <div className="mt-4">
              <SkillIcon /> {/* Render the SkillIcon component here */}
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8 relative overflow-hidden"
      >
        {/* Background with the same gradient as the about section */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-pink-500 to-purple-600 animate-gradient-xy opacity-25"></div>
        <h2 className="text-3xl font-bold mb-6 text-center relative z-10">
          My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          <div className="relative group bg-white p-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <img src="/project1.webp" alt="Project 2" className="w-full h-32 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">
              Building-Bridges-A-platform-for-Empowering-Autistic
            </h3>
            <p className="text-gray-600">
              A flutter based app which helps autistic individuals to increase
              their mental ability by solving the features of the app using
              technologies like Dart, Flutter Secure Storage.
            </p>
            <a
              href="https://github.com/NehaLakade/Building-Bridges-A-platform-for-Empowering-Autistic/tree/master"
              className="text-blue-500 mt-2 inline-block"
            >
              View on GitHub
            </a>
          </div>
          <div className="relative group bg-white p-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <img src="/project2.png" alt="Project 2" className="w-full h-32 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">
              House Price Prediction System
            </h3>
            <p className="text-gray-600">
              A platform which uses machine learning algorithms to predict the
              selling price of residential properties based on various features
              like location, size, amenities, using technology like Python,
              Flask
            </p>
            <a
              href="https://github.com/NehaLakade/House-Price-Prediction"
              className="text-blue-500 mt-2 inline-block"
            >
              View on GitHub
            </a>
          </div>
          <div className="relative group bg-white p-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <img src="/project3.png" alt="Project 2" className="w-full h-32 object-cover rounded-t-lg" />
            <h3 className="text-xl font-bold mt-4">
              Securing Evidence Using Blockchain
            </h3>
            <p className="text-gray-600">
              A blockchain based platform which allows to add evidence related
              to any crime in immutable way by using technology like React.js,
              HTML, CSS for frontend and truffle framework to deploy smart
              contracts and Ganache for testing.
            </p>
            <a
              href="https://github.com/NehaLakade/Securing-Evidence-Using-Blockchain/tree/master"
              className="text-blue-500 mt-2 inline-block"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8 flex flex-col items-center justify-center text-black relative"
      >
        <div
          className="absolute inset-0 bg-fixed bg-cover opacity-20"
          style={{ backgroundImage: "url(/background.jpg)" }}
        ></div>
        <ContactForm />
      </section>
    </Layout>
  );
};

export default Home;
