import Image from "next/image";

export default function Century() {
  return (
    <div className="p-6">
      {/* Content Container - Centered, ~70% width */}
      <div className="max-w-3xl mx-auto">
        {/* Title Section */}
        <div className="mb-8">
          <p className="text-emphasis">04.01</p>
          <br />
          <p className="text-emphasis">First Century</p>
        </div>

        {/* Single Item - No border */}
        <div className="py-6">
          <p>
            I did a 50 mile bike ride the previous summer (went from my degenerate hacker house in SF all the way down to work in Menlo Park), and upon hearing this my (foolish) brother told me I couldn't do a century. So then I had to do it.
          </p>
          <br />
          <p>
            And when better to do it than Big Game day? (As I'm writing this, Cursor is autocompleting "Go Bears!" Who did that??). So I charted out a circuitous route from Stanford to Berkeley that took me to San Gregorio Beach, up the coast, through SF, across the Golden Gate Bridge, through Marin, across the San Rafael Bridge, and then to Berkeley:
          </p>
          <br />
          <Image
            src="/first-century-route.png"
            alt="First Century Route Map"
            width={800}
            height={600}
            className="w-full h-auto"
          />
          <br />
          <p>
            I left in the early morning the day before Big Game. It was forecasted to rain in the early evening, so I hoped to beat the clouds. That would prove to be a problem later. It was quite dark when I started: 
          </p>
          <br />
          <Image
            src="/IMG_3926.jpg"
            alt="Dark road at early morning"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            Biking through what was basically the woods, with the only light coming from my headlamp and the only sound coming from my breathing, was a surreal experience. Couple that with the fear of not knowing how it would end, and it was quite the thrill. It was also quite steep—really steep. For the first 10 or so miles, I basically never left first gear and moved at a crawling pace.
          </p>
          <br />
          <p>
            Fortunately, I made it past the peak of Old la Honda and enjoyed an uninterrupted downhill all the way to San Gregorio Beach.
          </p>
          <br />
          <Image
            src="/IMG_3928.jpg"
            alt="San Gregorio Beach"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            Unfortunately, my legs were now cramping. If I ever straightened my legs (which included getting off the bike), my quads would just seize up. And I wasn't even a quarter of the way there. Uh oh. But I kept on pedaling, and I eventually made it to Half Moon Bay:
          </p>
          <br />
          <Image
            src="/IMG_3931.jpg"
            alt="Half Moon Bay"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            Then Devil's Slide:
          </p>
          <br />
          <Image
            src="/IMG_3946.jpg"
            alt="Devil's Slide"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            Then Pacifica:
          </p>
          <br />
          <Image
            src="/IMG_3959.jpg"
            alt="Pacifica"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            At this point, it was raining quite hard (and the storm also came with a nasty crosswind). I stopped at a CVS (or was it a Safeway?), trudged in soaked each step sounding like Spongebob, and got some bananas. Then onward to SF:
          </p>
          <br />
          <Image
            src="/IMG_3961.jpg"
            alt="Golden Gate Park"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            And then across the Golden Gate Bridge:
          </p>
          <br />
          <Image
            src="/IMG_3969.jpg"
            alt="Golden Gate Bridge"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            I used to think there was nothing north of the Golden Gate Bridge. Nope! Turns out there's a stupidly wealthy and stupidly picturesque place called Marin:
          </p>
          <br />
          <Image
            src="/IMG_3977.jpg"
            alt="Marin"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            By now, my phone battery was on its last legs (and to make matters worse my boss  called me about a live deal). So I plugged my phone into my laptop—but found out that my phone couldn't charge because it was waterlogged. So I made a beeline to the nearest 7/11 and asked the clerk to help me out.
          </p>
          <br />
          <p>
            Despite the fact that I created a small ocean on his floor, the clerk (may God bless his soul) used his heater to dry off my phone, got it charging, and sent me on my way. Next was the San Rafael Bridge:
          </p>
          <br />
          <Image
            src="/IMG_3979.jpg"
            alt="San Rafael Bridge"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            When you drive across the San Rafael Bridge, you think it's flat. Spoiler alert: it's not. It was hailing at this point, and I was feeling like David Goggins and thinking there wasn't anyone crazier than me. Then I saw someone RUNNING across the bridge with NO SHIRT ON. I guess there's levels to everything.
          </p>
          <br />
          <p>
            The rest of the ride was a blur. All I remember was being wet, crossing a few freeways, passing through some parks, and taking one or two wrong turns. I didn't take any more pictures because my phone was on the verge of shutting down, but I eventually made it to Berkeley! Just as I was reaching the campus, my phone died (yes, I'll admit I was scared of losing the Strava data), but after asking some enemies for directions, I made it to The Standard.
          </p>
          <br />
          <p>
            After creating my third indoor sea of the day, I charged my phone and took this picture:
          </p>
          <br />
          <Image
            src="/IMG_3981.jpg"
            alt="Berkeley"
            width={800}
            height={1200}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>
            Then the next day my phone display stopped working, so I went around Big Game using my iPad to communicate like an idiot. El fin.
          </p>
        </div>
      </div>
    </div>
  );
}
