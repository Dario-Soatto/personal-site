import Image from "next/image";
import InternalLink from "@/components/InternalLink";

export default function Ultramarathon() {
  return (
    <div className="p-6">
      {/* Content Container - Centered, ~70% width */}
      <div className="max-w-3xl mx-auto">
        {/* Title Section */}
        <div className="mb-8">
          <p className="text-emphasis">04.05</p>
          <br />
          <p className="text-emphasis">Ultramarathon?</p>
        </div>

        {/* Single Item - No border */}
        <div className="py-6">
          <p>
            When I learned Manhattan had a perimeter of roughly 30 miles, I knew I had to run it. So after wrapping up my little finance internship (which implies after 10 weeks stuck in a cubicle having done not a single iota of cardio), I planned out the route.
          </p>
          <br />
          <Image
            src="/first-ultra-route.png"
            alt="Manhattan perimeter route map"
            width={800}
            height={600}
            className="w-full h-auto"
          />
          <br />
          <p>
            Having learned the hard way from my <InternalLink href="/adventures/first-marathon">first marathon</InternalLink> that nutrition is not negotiable, I pre-planned gas stations, bodegas, and delis at which I could refuel (and also bought some electrolyte tablets to mix with water from fountains along the way).
          </p>
          <br />
          <p>
            After locking down all the details, I took a brief nap and hit the road at about 4:30 AM. Running north up along the East River at dawn had some really pretty views.
          </p>
          <br />
          <Image
            src="/ultra-1.png"
            alt="East River at dawn"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <Image
            src="/ultra-2.png"
            alt="East River at dawn"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <Image
            src="/ultra-3.png"
            alt="East River at dawn"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            I kept running north and timed it so that the sun would rise before going through East Harlem (which did not have nice views, only an extraordinarily loud overhead train).
          </p>
          <br />
          <p>
            I stopped at about mile 13 to get some calories in then ran across the northern end of the island and back down south along the Hudson River.
          </p>
          <br />
          <Image
            src="/ultra-4.png"
            alt="Hudson River"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            At mile 20, I was hit with acute ITBS (IT band syndrome) on my right knee; essentially, the band of tissue on the outside of my right knee became inflamed and irritated due to the repeated stress and flexion. I'd been gritting my teeth through it for a long while, but at mile 20 it suddenly became excruciating——my knee folded, and I just doubled over on the ground in pain. At this point, I thought the run was finished; I tried taking a few steps walking, and pain just flared through my leg. But a few minutes later, it became somewhat bearable if I walked with that leg kept straight and angled outward.
          </p>
          <br />
          <p>
            So I limped the remaining 13 miles:
          </p>
          <br />
          <Image
            src="/ultra-5.png"
            alt="Limping the remaining miles"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <Image
            src="/ultra-6.png"
            alt="Limping the remaining miles"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <Image
            src="/ultra-7.png"
            alt="Limping the remaining miles"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <Image
            src="/ultra-8.png"
            alt="Limping the remaining miles"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <Image
            src="/ultra-9.png"
            alt="Limping the remaining miles"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <Image
            src="/ultra-10.png"
            alt="Limping the remaining miles"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
        </div>
      </div>
    </div>
  );
}
