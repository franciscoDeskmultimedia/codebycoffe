import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

async function getData() {
  const res = await fetch("https://strapi.codebycoffe.com/api/artists");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const response = await res.json();
  return response;
}

const Hero = async () => {
  const artists = await getData();
  console.log("here");
  console.log(artists.data[0].attributes.Name);

  return (
    <section className="hero font-work flex flex-wrap container bg-slate-200">
      <div className=" w-full md:w-3/4 font-work">
        Artistas destacados del mes
      </div>
      <div className=" w-full md:w-1/4">
        <Carousel>
          <CarouselContent>
            <CarouselItem className=" font-stix">
              <div className="artist-card">
                <div className="artist-meta">
                  <h3>Name: {artists.data[0].attributes.Name}</h3>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>Item 2</CarouselItem>
            <CarouselItem>Item 3</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
