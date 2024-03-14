import { useState } from "react";
import Courses from "./components/Courses";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (course) => {
    console.log(course);
    if (!cart[course.id]) {
      setCart((prevCart) => ({
        ...prevCart,
        [course.id]: course,
      }));

      setTotalCreditHour((prev) => {
        return prev + course.credit;
      });

      setTotalPrice((prev) => {
        return prev + course.price;
      });
    } else {
      alert("Course is already in the cart");
    }
  };

  return (
    <>
      <main className="container py-5 mx-auto">
        <h2 className="my-12 text-4xl font-bold text-center">
          Course Registration
        </h2>

        <div className="flex w-full gap-8">
          <Courses handleAddToCart={handleAddToCart} />
          <Cart
            cart={cart}
            totalCreditHour={totalCreditHour}
            totalPrice={totalPrice}
          />
        </div>
      </main>
    </>
  );
};

export default App;
