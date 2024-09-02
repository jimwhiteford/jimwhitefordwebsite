

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl mb-3">The Blog</h1>
            <h2 className="mt-5 md:mt-0">
                Welcome to the place for{" "}
                <span className="underline decoration-4 decoration-[#006678]">
                    all the things.
                </span>{" "}
                    
            </h2>
        </div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            Sailing adventures | DIY guides | Navigation & much More!
        </p>
    </div>
  )
}

export default Banner