import Image from "next/image";
import InternalLink from "@/components/InternalLink";

export default function SFMarathon() {
  return (
    <div className="p-6">
      {/* Content Container - Centered, ~70% width */}
      <div className="max-w-3xl mx-auto">
        {/* Title Section */}
        <div className="mb-8">
          <p className="text-emphasis">04.03</p>
          <br />
          <p className="text-emphasis">SF Marathon</p>
        </div>

        {/* Single Item - No border */}
        <div className="py-6">
          <p>
            One of my friends texted me asking if I wanted to run the SF 10k. Which reminded me that the marathon was coming up.
          </p>
          <br />
          <p>
            I was terrified of doing the full thing. The <InternalLink href="/adventures/first-marathon">last time</InternalLink> was the most painful experience of my life, and I was now in considerably worse shape——I'd spent the last two months holed up in the office doing absolutely zero cardio.
          </p>
          <br />
          <p>
            But when I'm terrified of something, I can't stop thinking about it until I do it. So three days before the race, I resolved to send it.
          </p>
          <br />
          <p>
            I asked Claude if running this marathon would be possible, and it said: "Attempting 26.2 miles without proper conditioning puts you at serious risk for injury, including stress fractures, severe muscle damage, joint problems, and potentially dangerous dehydration or heat-related issues. Here are your realistic options: Best choice: Switch to a shorter distance."
          </p>
          <br />
          <p>
            Gulp.
          </p>
          <br />
          <p>
            Against Claude's advice, I went on two training runs. The first was six miles with some nasty elevation gain:
          </p>
          <br />
          <Image
            src="/training-run-1.png"
            alt="First Marathon training run"
            width={800}
            height={600}
            className="w-full h-auto"
          />
          <br />
          <p>
            The second was a flat four miles:
          </p>
          <br />
          <Image
            src="/training-run-2.png"
            alt="Second marathon training run"
            width={800}
            height={600}
            className="w-full h-auto"
          />
          <br />
          <p>
            I was worringly sore the day after the runs (which was the day before the marathon).
          </p>
          <br />
          <p>
            Gulp again.
          </p>
          <br />
          <p>
            On the morning of, I took a short nap, woke up at 4:30 AM, biked four miles to the starting line, found a starting group, and waited for the gun.
          </p>
          <br />
          <p>
            I had that same feeling from <InternalLink href="/adventures/first-century">my first century</InternalLink>. The fear of the pain to come, the anxiety of the unknown, the thrill of the challenge. (I suspect this feeling is heightened in the dark).
          </p>
          <p>
            And then we were off!
          </p>
          <Image
            src="/IMG_1793.jpg"
            alt="Marathon start"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            There's something magical about running a marathon (I mean an organized one——doing it alone was definitely not magical). Hundreds of people running in absolute silence, single-mindedly focused on the same goal. It's an individual battle yet a collective experience. There's a certain camaraderie from knowing everyone around you will undergo the same trials and pains.
          </p>
          <br />
          <p>
            The first few miles breezed by as expected. At mile six, we hit the first hill:
          </p>
          <br />
          <Image
            src="/IMG_1805.jpg"
            alt="First hill"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            I tried to stay with the big shirtless guy there for a while since he already had a few marathons under his belt but maintained a similar pace to me. I ended up passing him though.
          </p>
          <br />
          <p>
            Then came the Golden Gate Bridge:
          </p>
          <br />
          <Image
            src="/IMG_1807.jpg"
            alt="Golden Gate Bridge"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            Followed by Marin:
          </p>
          <br />
          <Image
            src="/IMG_1810.jpg"
            alt="Marin"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            And back across to Golden Gate Park:
          </p>
          <br />
          <Image
            src="/IMG_1821.jpg"
            alt="Golden Gate Park"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            At Golden Gate Park it starts to hurt. The cramps creep in, the aching sets in. (I also really needed to use the bathroom, which didn't help).
          </p>
          <br />
          <p>
            In contrast to my first marathon, when running with others I could get humbled. Bad. 
          </p>
          <br />
          <p>
            I got passed by more grannies than I'd care to admit.
          </p>
          <br />
          <p>
            Then there are the ultramarathoners who are doing 52.4 miles——that means that they finished an entire marathon before I even crossed the starting line. Again, there's always levels to it.
          </p>
          <br />
          <p>
            Anyway, I continued through the strees:
          </p>
          <br />
          <Image
            src="/IMG_1827.jpg"
            alt="SF streets"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            And by mile 20, every mile felt like an eternity. I'd run for what felt like 10 minutes, check my phone, and see that I'd done less than half a mile.
          </p>
          <br />
          <p>
            But with every step, you get a little farther from where you started and a little closer to where you're going.
          </p>
          <br />
          <p>
            And eventually you reach the finish line:
          </p>
          <br />
          <Image
            src="/IMG_4ACFCA948473-1.jpeg"
            alt="Finish line"
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
