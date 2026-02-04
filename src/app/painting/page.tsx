import Image from "next/image";

export default function Painting() {
  return (
    <div className="p-6">
      {/* Content Container - Centered, ~70% width */}
      <div className="max-w-3xl mx-auto">
        {/* Title Section */}
        <div className="mb-8">
          <p className="text-emphasis">00</p>
          <br />
          <p className="text-emphasis">Painting</p>
        </div>

        {/* Content goes here */}
        <div className="py-6">
          <p>This is a painting of St. Thomas the Apostle that hangs in my family's living room.</p>
          <br />
          <Image
            src="/icon.png"
            alt="St. Thomas the Apostle"
            width={1000}
            height={1000}
            className="w-auto h-auto max-h-96 mx-auto"
          />
          <br />
          <p>Thomas was one of the twelve apostles of Jesus Christ. Often referred to as the "doubting Thomas," Thomas has become a model for honest faith and a demonstration of evidence-based belief. He is the patron saint of those who struggle with faith and doubt.</p>
          <br />
          <details className="cursor-pointer">
            <summary className="text-emphasis hover:opacity-70 transition-opacity">Read more about Thomas</summary>
            <div className="mt-4">
              <p>Originally a carpenter or mason from Galilee, Thomas appears in all four Gospels and Acts, though his most significant appearances come in the Gospel of John.</p>
              <br />
              <p>In perhaps his most famous appearance, Thomas doubts the resurrection of Jesus Christ, famously stating "Unless I see the mark of the nails in his hands and put my finger into the mark of the nails and put my hand into his side, I will not believe" (John 20:25).</p>
              <br />
              <p>Eight days later, Jesus appeared to Thomas, who responded with one of the clearest confessions of Jesus's divinity: "My Lord and my God!" (John 20:28).</p>
              <br />
              <p>Thomas went on to spread the faith to the Parthians, Medes, Persians, and Indians—farther than any other apostle—before he was martyred in India.</p>
            </div>
          </details>
          <br />
          <p>This 17th century painting was passed to my grandfather by the local priest. My grandfather, whom I never had the chance to meet, was a beloved community leader, respected attorney, and devout family man; the priest played a pivotal role in his life, even introducing him to his wife (my grandmother).</p>
          <br />
          <p>The painting serves as a reminder that I stand on the shoulders of countless men and women, past and present, within and beyond my family, who have made my life possible.</p>
        </div>
      </div>
    </div>
  );
}
