import Image from "next/image";

const LatestFlats = () => {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Discover Your Perfect Flat Share Today!
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Find the best flat share opportunities with our platform. Whether
            you're looking for a cozy room in the city or a spacious flat with
            all amenities, we have you covered. Browse the latest listings and
            connect with potential flatmates to start your new living
            experience.
          </p>

        </div>
      </div>

      <Image
        width={600}
        height={500}
        alt="A modern flat"
        src="/assets/Images/about1.jpg"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
};

export default LatestFlats;
