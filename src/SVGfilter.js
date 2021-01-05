export default function SVGfilter() {
  return (
    <>
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="abb" />
            <feColorMatrix
              in="abb"
              type="matrix"
              values=" 1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 36 -10"
              result="abb"
            />
            <feBlend in="SourceGraphic" in2="abb" />
          </filter>
        </defs>
      </svg>
      <svg style={{ display: "none" }}>
        <defs>
          <filter id="Ripple">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="Ripple"
            />
            <feColorMatrix
              in="Ripple"
              type="matrix"
              values=" 1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 100 -15"
              result="Ripple"
            />
            <feBlend in="SourceGraphic" in2="Ripple" />
          </filter>
        </defs>
      </svg>
      <svg style={{ display: "none" }}>
        <defs>
            <filter id="jiggle0">
                <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0" />
                <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
            </filter>
            <filter id="jiggle1">
                <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
            </filter>

            <filter id="jiggle2">
                <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
            </filter>
            <filter id="jiggle3">
                <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
            </filter>

            <filter id="jiggle4">
                <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
            </filter>
        </defs>
    </svg>
    </>
  );
}
