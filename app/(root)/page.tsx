import { Button } from "@/components/ui/button";
// import { ThemeProvider } from "@/components/ui/theme";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-sky-50 bg-contain py-3 md:py-7">
        <div className="wrapper grid grid-cols-1 gap-4 md:grid-cols-2 2xl:gap-0">



          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[80vh] object-contain object-center 2xl:max-h-[60vh]"
          />


          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold text-neutral-900">Organize, Engage, Celebrate: Your Events, Our Platform!</h1>
            <p className="p-regular-20 md:p-regular-24 text-orange-600">Event planning? We've got Simplified Event Manager</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">

              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>











        </div>
      </section>

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Trust by <br /> Thousands of Events</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          {/* <Search /> */}
          {/* <CategoryFilter /> */}
        </div>

        {/* <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        /> */}
      </section>

    </>
  );
}
