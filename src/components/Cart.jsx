const Cart = ({ cart, totalCreditHour, totalPrice }) => {
  return (
    <div className="w-[25%]">
      <div className="p-5 border rounded-xl">
        <h2 className="text-2xl font-bold text-blue-500">
          Credit Hour Remaining {totalCreditHour} hr
        </h2>
        <hr className="my-5" />
        <h2 className="text-2xl font-bold">Course Name</h2>

        <div className="m-5">
          <ol className="space-y-3 list-decimal">
            {Object.values(cart).map((course) => (
              <li key={course.id} className="text-xl font-medium text-gray-500">
                {course.name}
              </li>
            ))}
          </ol>
        </div>
        <hr className="my-5" />

        <h3 className="text-2xl font-semibold text-gray-600">
          Total Credit Hour : {totalCreditHour}
        </h3>

        <hr className="my-5" />

        <h3 className="text-2xl font-semibold text-gray-600">
          Total Price : {totalPrice} USD
        </h3>
      </div>
    </div>
  );
};

export default Cart;
