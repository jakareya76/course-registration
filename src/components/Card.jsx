const Card = ({ course, handleAddToCart }) => {
  const { id, name, photo, price, description, credit } = course;

  return (
    <div className="p-5 border rounded-xl">
      <img
        src={photo}
        alt={`cover_Img_${id}`}
        className="object-cover w-full"
      />
      <h2 className="my-4 text-[22px] font-semibold">{name}</h2>
      <p className="text-lg text-gray-500">{description}</p>
      <div className="flex items-center justify-around gap-5 mb-3 text-gray-500">
        <div className="my-3">
          <p>
            <span className="font-mono text-2xl font-semibold">$</span>
            <span className="ml-2 text-xl font-semibold">Price: {price}</span>
          </p>
        </div>
        <div className="my-3">
          <p>
            <span className="font-mono text-2xl font-semibold">🎫</span>
            <span className="ml-2 text-xl font-semibold">
              Credit: {credit}hr
            </span>
          </p>
        </div>
      </div>

      <button
        onClick={() => handleAddToCart(course)}
        className="w-full py-3 text-2xl font-semibold text-white bg-blue-500 rounded-xl"
      >
        Select
      </button>
    </div>
  );
};

export default Card;
