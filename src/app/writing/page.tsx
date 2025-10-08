import ExternalLink from "@/components/ExternalLink";

export default function Writing() {
  return (
    <div className="p-6">
      {/* Content Container - Centered, ~70% width */}
      <div className="max-w-3xl mx-auto">
        {/* Title Section */}
        <div className="mb-8">
          <p className="text-emphasis">03</p>
          <br />
          <p className="text-emphasis">Writing</p>
        </div>

        {/* Item 1 */}
        <div className="border-b border-gray-300 py-6">
          <p className="mb-2">
            <span className="text-emphasis">Scaling the Memory Wall</span> 10/24
          </p>
          <p>
            Why the bottleneck for AI inference is memory, not compute per se. Written for Lux Capital.
          </p>
          <p className="mt-4">
            <ExternalLink href="https://www.luxcapital.com/news/scaling-the-memory-wall">Link</ExternalLink>
          </p>
        </div>

        {/* Item 2 */}
        <div className="border-b border-gray-300 py-6">
          <p className="mb-2">
            <span className="text-emphasis">The Looming Labor Crisis in Chip Design</span> 09/25
          </p>
          <p>
            How talent is blocking chip design innovation and where AI will take us. Written for Lux Capital with Shahin Farshchi.
          </p>
          <p className="mt-4">
            <ExternalLink href="https://www.luxcapital.com/content/the-looming-labor-crisis-in-chip-design">Link</ExternalLink>
          </p>
        </div>

        <div className="border-b border-gray-300 py-6">
          <p className="mb-2">
            <span className="text-emphasis">The Broken Leg Problem of VC</span> 08/24
          </p>
          <p>
            Why the power law and the search for outliers prevents the application of big data to VC. Written for Lux Capital.
          </p>
          <p className="mt-4">
            <ExternalLink href="https://www.luxcapital.com/content/the-broken-leg-problem-of-vc">Link</ExternalLink>
          </p>
        </div>

        

        {/*Last item, no border */}
        <div className="py-6">
          <p className="text-emphasis mb-2">The Minimum Wage as an Anchor</p>
          <p>
            How the minimum wage anchors perceptions of wage fairness and how AI exhibits cognitive biases. Regeneron Science Talent Search Semifinalist.
          </p>
          <p className="mt-4">
            <ExternalLink href="https://arxiv.org/pdf/2210.10585">Link</ExternalLink>
          </p>
        </div>
      </div>
    </div>
  );
}
