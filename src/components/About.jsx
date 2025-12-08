export default function About({ isDark }) {
  return (
    <>
      <h1
        className={`text-center text-[55px] transition-colors -mt-20 ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Hi, I'm Mijanur Rahman, a Software Engineer passionate about building
        scalable and high-quality digital solutions.
      </h1>
    </>
  );
}
