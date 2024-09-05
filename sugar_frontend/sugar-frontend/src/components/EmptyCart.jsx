const EmptyCart = () => {
  return (
    <section className="flex flex-col items-center align-middle">
      <img
        src="https://in.sugarcosmetics.com/Cart_nofound.svg"
        alt="Empty Cart"
      />
      <p className="font-sans text-gray-500 laptop:w-[22%] tablet:w-[50%]   text-center font-bold py-3 text-[17px]">
        Hey! It's lonely here. Your bag seems to have no company. Why not add
        some products?
      </p>
      <button className="bg-black text-white text-[16px] font-sans font-bold px-7 py-4 rounded-lg">SHOP NOW</button>
    </section>
  );
};

export { EmptyCart };
