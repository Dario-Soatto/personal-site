import ExternalLink from "@/components/ExternalLink";
import InternalLink from "@/components/InternalLink";

export default function Adventures() {
  return (
    <div className="p-6">
      {/* Content Container - Centered, ~70% width */}
      <div className="max-w-3xl mx-auto">
        {/* Title Section */}
        <div className="mb-8">
          <p className="text-emphasis">04</p>
          <br />
          <p className="text-emphasis">Adventures</p>
        </div>

        {/* Item 1 */}
        <div className="border-b border-gray-300 py-6">
          <p className="mb-2">
            <span className="text-emphasis">Ultramarathon?</span> 08/26
          </p>
          <p>
            New York City → New York City. Did a loop around Manhattan after 10 weeks stuck in a cubicle. Pretty excruciating.
          </p>
          <p className="mt-4">
          <InternalLink href="/adventures/ultramarathon">Link</InternalLink> <ExternalLink href="https://www.strava.com/activities/19683932502">Strava</ExternalLink>
          </p>
        </div>

        {/* Item 2 */}
        <div className="border-b border-gray-300 py-6">
          <p className="mb-2">
            <span className="text-emphasis">Second Century</span> 11/25
          </p>
          <p>
            San Francisco → Palo Alto. Second attempt at a century before Big Game. It was unbearably cold.
          </p>
          <p className="mt-4">
          <InternalLink href="/adventures/second-century">Link</InternalLink> <ExternalLink href="https://www.strava.com/activities/16537892396">Strava</ExternalLink>
          </p>
        </div>

        {/* Item 3 */}
        <div className="border-b border-gray-300 py-6">
          <p className="mb-2">
            <span className="text-emphasis">San Francisco Marathon</span> 07/25
          </p>
          <p>
            San Francisco → San Francisco. I decided to run this three days before the race. Actually wasn't too bad.
          </p>
          <p className="mt-4">
          <InternalLink href="/adventures/sf-marathon">Link</InternalLink> <ExternalLink href="https://www.strava.com/activities/15255518978">Strava</ExternalLink>
          </p>
        </div>

        {/* Item 4 */}
        <div className="border-b border-gray-300 py-6">
          <p className="mb-2">
            <span className="text-emphasis">First Marathon</span> 12/24
          </p>
          <p>
            Palo Alto → Half Moon Bay. I resolved to run a marathon after finals. Most painful thing I've ever done.
          </p>
          <p className="mt-4">
          <InternalLink href="/adventures/first-marathon">Link</InternalLink> <ExternalLink href="https://www.strava.com/activities/13110654438">Strava</ExternalLink>
          </p>
        </div>

        {/* Item 5 - Last item, no border */}
        <div className="py-6">
          <p className="mb-2">
            <span className="text-emphasis">First Century</span> 12/24
          </p>
          <p>
            Palo Alto → Berkeley. My brother told me I couldn't do a century on my rickety commuter bike. I proved him wrong but at what cost.
          </p>
          <p className="mt-4">
          <InternalLink href="/adventures/first-century">Link</InternalLink> <ExternalLink href="https://www.strava.com/activities/12961420144">Strava</ExternalLink>
          </p>
        </div>
      </div>
    </div>
  );
}
