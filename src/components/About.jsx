export default function About() {
  return (
    // <div className="flex items-center justify-center flex-1">
    //   <h1
    //     className={`text-center text-3xl md:text-[55px] px-4 transition-colors leading-relaxed ${
    //       isDark ? "text-gray-300" : "text-gray-700"
    //     }`}
    //   >
    //     Hi, I'm{" "}
    //     <span className={`${isDark ? "text-yellow-400" : "text-blue-600"}`}>
    //       Lorem Ipsum
    //     </span>
    //     , a Software Engineer passionate about building scalable and
    //     high-quality digital solutions.
    //   </h1>
    // </div>
    // <section className="flex items-center justify-center flex-1">
    //   {/* Profile Image */}
    //   <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg bg-white">
    //     <img
    //       src="/assets/avatar.png"
    //       alt="Profile"
    //       className="w-full h-full object-cover"
    //     />
    //   </div>

    //   {/* Text Content */}
    //   <div className="max-w-md">
    //     <p className="text-sm text-gray-500 mb-1">Software Engineer</p>
    //     <h1 className="text-3xl font-bold text-white mb-3">Alex Smith</h1>

    //     <p className="text-gray-600 mb-6">
    //       Software Engineer passionate about building scalable and high-quality
    //       digital solutions.
    //     </p>

    //     {/* Buttons */}
    //     <div className="flex gap-4">
    //       <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
    //         Download CV
    //       </button>
    //       <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition">
    //         Portfolio
    //       </button>
    //     </div>
    //   </div>
    // </section>
    <div className="flex justify-between items-center h-full">
      <div className="flex-1 self-start">
        {/* Profile Image */}
        <div className="w-full overflow-hidden shadow-lg bg-white rounded-lg">
          <img
            src="/assets/avatar.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Description */}
      <div className="flex-1 -ml-4 mb-0 bg-white rounded-lg p-6 shadow-lg">
        <p className="text-sm text-gray-500 mb-1">Software Engineer</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Alex Smith</h1>
        <p className="text-gray-600 mb-6">
          Software Engineer passionate about building scalable and high-quality
          digital solutions.
        </p>
        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
            Download CV
          </button>
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition">
            Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
