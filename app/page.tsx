import Button from "@/components/button/Button";
import Animated from "@/components/buttons/Animated.button";
import Hollow from "@/components/buttons/Hollow.button";
import HowCard from "@/components/cards/How.card";
import LandingCard from "@/components/cards/Landing.card";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className="bg-[rgba(59,131,246,0.09)]">
      <Header isMain={false} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">

        <section>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
            Plan Your Perfect <br />
            <span className="text-blue-600">Adventure</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-center">
            Discover amazing destinations, create personalized travel
            itineraries, and save your favorite places. Your next adventure is
            just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              variant="secondary"
              content={"Explore places"}
            />
            <Button
              variant="transparent"
              content={"Learn more"}
            />
            <Button
              variant="transparent"
              content={"Learn more"}
            />
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <LandingCard
            iconBg="blue"
            title="Discover Countries"
            description="Browse through a comprehensive list of countries with detailed information, flags, and key facts about each destination."
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-compass h-8 w-8 text-blue-600"
              aria-hidden="true"
              data-yw="c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA1NDoxNg"
            >
              <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </LandingCard>
          <LandingCard
            iconBg="green"
            title="Save Favorites"
            description="Mark countries as favorites and easily access them later. Filter by your favorite destinations to plan future trips."
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart h-8 w-8 text-green-600"
              aria-hidden="true"
              data-yw="c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA2NToxNg"
            >
              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
            </svg>
          </LandingCard>

          <LandingCard
            iconBg="purple"
            title="Plan Trips"
            description="Create custom travel itineraries by selecting multiple countries. Save your trips and access them anytime for future reference."
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-calendar h-8 w-8 text-purple-600"
              aria-hidden="true"
              data-yw="c3JjL3BhZ2VzL0xhbmRpbmdQYWdlLnRzeEA3NjoxNg"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
          </LandingCard>
        </section>
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <HowCard
              count={1}
              title="Browse Countries"
              description="Explore our comprehensive list of countries with flags and information"
            />
            <HowCard
              count={2}
              title="Add to Favorites"
              description="Mark interesting destinations as favorites for easy access"
            />
            <HowCard
              count={3}
              title="Plan Your Trip"
              description="Use our trip planner to create custom itineraries"
            />
            <HowCard
              count={4}
              title="Save & Share"
              description="Save your travel plans and access them anytime"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
