export const ProductsSkeleton = () => {
    return (
    <section className="mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center pt-5">
           { [1,2,3,4,5,6,7,8,9,10].map( (_, index) => (
            <div key={index} className="flex flex-col items-center w-56 gap-5 h-[365px] bg-gray-100 text-center animate-pulse">
                <div className="w-full min-h-44 bg-gray-300 rounded-md"></div>
                <div className="w-3/4 h-4 bg-gray-300 rounded-md mb-2" />
                <div className="w-full h-4 bg-gray-300 rounded-md mb-2" />
            </div>
           ))}
        </div>
        
    </section>
    )
}
