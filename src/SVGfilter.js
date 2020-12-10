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
    </>
  );
}
