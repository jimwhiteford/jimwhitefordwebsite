async function Banner({ category }: any) {
  return (
    <div className="flex flex-col justify-between font-bold px-10 py-5 mb-10">
      <h1 className="text-5xl sm:text-7xl mb-3">{category.title}</h1>
      <h2 className="mt-5 md:mt-0">{category.description}</h2>
    </div>
  );
}

export default Banner;
