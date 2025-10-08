import ExternalLink from "@/components/ExternalLink";

export default function Projects() {
  return (
    <div className="p-6">
      {/* Content Container - Centered, ~70% width */}
      <div className="max-w-3xl mx-auto">
        {/* Title Section */}
        <div className="mb-8">
          <p className="text-emphasis">02</p>
          <br />
          <p className="text-emphasis">Projects</p>
        </div>

        {/* Item 1 */}
        <div className="border-b border-gray-300 py-6">
          <p className="text-emphasis mb-2">Project Name 1</p>
          <p>
            Description of the project goes here. You can add <ExternalLink href="https://example.com">links</ExternalLink> or any other content.
          </p>
        </div>

        {/* Item 2 */}
        <div className="border-b border-gray-300 py-6">
          <p className="text-emphasis mb-2">Project Name 2</p>
          <p>
            Another project description with more details.
          </p>
        </div>

        {/* Item 3 - Last item, no border */}
        <div className="py-6">
          <p className="text-emphasis mb-2">Project Name 3</p>
          <p>
            Final project description.
          </p>
        </div>
      </div>
    </div>
  );
}
