function Courses() {
  const courses = [
    "Class 6-8 Foundation Batch",
    "Class 9-10 Board Preparation",
    "Class 11-12 Science (Maths & Physics)",
  ];

  return (
    <div className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-10">Our Courses</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} classNmae="bg-white shadow-lg rounded-xl p-6">
            <h3 classname="text-lg font-semibold">{course}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
