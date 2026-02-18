function Home() {
  return (
    <div
      className="bg-blue-50
        min-h-screen flex flex-col justify-center
        items-center text-center px-4"
    >
      <h1
        className="text-4xl md:text-5xl
            font-bold text-blue-900 mb-6"
      >
        Welcome to Bright Future Classes
      </h1>

      <p className="text-gray-700 max-w-xl mb-6">
        Best coaching institute for Maths & Science from Class 6 to 12. Build
        your strong foundarion with expert teachers.
      </p>

      <button
        className="bg-blue-900
                    text-white px-6 py-3 rounded-lg hover:bg-blue-700
                    transition"
      >
        Enroll Now
      </button>
    </div>
  );
}

export default Home;
