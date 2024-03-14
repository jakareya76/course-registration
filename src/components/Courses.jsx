import { useState, useEffect } from "react";
import Card from "./Card";

const Courses = ({ handleAddToCart }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourseData = async () => {
      const res = await fetch("courses.json");
      const data = await res.json();

      setCourses(data);
    };

    getCourseData();
  }, []);

  return (
    <div className="w-[75%]">
      <div className="flex items-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, idx) => {
            return (
              <Card
                key={idx}
                course={course}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
