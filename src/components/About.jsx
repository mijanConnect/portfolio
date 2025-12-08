export default function About({ isDark }) {
  return (
    <>
      <h1
        className={`text-center text-[55px] transition-colors ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Hi, I'm{" "}
        <span className={`${isDark ? "text-yellow-400" : "text-blue-600"}`}>
          Mijanur Rahman
        </span>
        , a Software Engineer passionate about building scalable and
        high-quality digital solutions.
      </h1>
    </>
  );
}
