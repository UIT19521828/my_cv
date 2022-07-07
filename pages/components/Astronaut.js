import { motion } from "framer-motion"

const SvgAstronaut = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="20rem"
    height="20rem"
    style={{zIndex: '1'}}
    initial={{
      x: '-6rem',
    }}
    animate={{
      rotate: [-20, 20, -20],
      transition: {
          repeat: Infinity,
          duration: 4,
          delay: 0,
      }
    }}
    >
    <motion.g className="astro-astro"
      style={{
        transformOrigin: "0 0 0",
      }}
      data-svg-origin="47.86973214149475 49.37218505144119"
    >
      <path
        fill="none"
        stroke="#e2f1f7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={5.061}
        d="M62.3 58.8s10.4 3.6 14.5-8.1-8.6-18.4-8.6-18.4"
        transform="rotate(22.853 57.185 53.69)"
        className="astro-tube"
        style={{
          transformOrigin: "0 0 0",
        }}
        data-svg-origin="62.29999923706055 59.32244873046875"
      />
      <motion.path
        fill="#8b55bb"
        d="M34.4 58.8 16.7 45.3c-1.2-.9-1.4-2.6-.5-3.8l4.3-5.7c.9-1.2 2.6-1.4 3.8-.5L42 48.8l-7.6 10z"
        className="astro-l-arm"
        style={{
          transformOrigin: "0 0 0",
        }}
        animate={{
            rotate: [15, -15, 15, -15, 15, -15, 15],
            transition: {
                duration: 1,
                repeat: Infinity,     
                repeatDelay: 4,     
            }
        }}
      />
      <motion.path
        fill="#8b55bb"
        d="M38.9 76.7 18.3 91.4c-1.2.9-2.9.6-3.8-.6L8 81.7c-.9-1.2-.6-2.9.6-3.8l20.6-14.8c3.7-2.7 9-1.8 11.6 1.9 2.7 3.8 1.8 9-1.9 11.7z"
        transform="rotate(1.198 255.731 -70.06) scale(.99999)"
        className="astro-l-leg"
        data-svg-origin="38.8751106262207 64.57488746643067"
        style={{
          transformOrigin: "0 0 0",
        }}
      />
      <g
        className="astro-head"
        style={{
          transformOrigin: "0 0 0",
        }}
        data-svg-origin="54.400001525878906 47.930000686645506"
      >
        <path
          fill="#a95ed4"
          d="M84.724 36.249c-1.81 6.865-6.414 12.167-12.274 15.172-5.03 2.604-11.005 3.303-16.904 1.748-7.639-2.014-13.342-7.447-16.118-14.177-1.881-4.633-2.276-9.804-.924-14.93C41.869 11.3 54.944 3.682 67.707 7.047s20.382 16.44 17.017 29.203z"
        />
        <path
          fill="#563388"
          d="M72.45 51.421c-5.03 2.604-11.005 3.303-16.904 1.748-7.639-2.014-13.342-7.447-16.118-14.177 5.045-1.876 10.629-2.265 16.237-.787 7.446 1.963 13.373 6.939 16.785 13.216z"
        />
        <path
          fill="#170609"
          d="M40.366 24.45c1.475-7.16 7.575-13.825 15.786-14.763s20.612 4.194 20.204 15.152c-.407 10.958-10.32 8.551-19.446 7.076-9.125-1.475-19.08 4.897-16.544-7.465z"
        />
        <path
          fill="#fff"
          d="M58.013 14.004c4.8.231 9.003 1.547 11.817 3.426.127-.483-.371-1.339-2.056-2.403-10.634-6.734-21.871 1.369-21.871 1.369l.096.025c2.933-1.709 7.31-2.623 12.014-2.417z"
        />
      </g>
      <path
        fill="#a95ed4"
        d="M68.9 61.3c.2-1.5 1.3-2.8 2.8-3.1l19.2-4c1.1-.2 1.8-1.3 1.6-2.5l-1.9-8.6c-.2-1.1-1.3-1.8-2.5-1.6L67.6 46c-18.6-13.4-40.9.7-40.1 19 .8 21 38.6 25.8 41.4-3.7z"
        transform="matrix(1.02326 .17241 -.16615 .9861 6.266 -10.512)"
        className="astro-body"
        style={{
          transformOrigin: "0 0 0",
        }}
        data-svg-origin="60.00657272338867 61.394596099853516"
      />
      <path
        fill="#a95ed4"
        d="m44.4 75.9-8.5 17.6c-.7 1.4-2.3 1.9-3.6 1.3l-10.1-4.9c-1.4-.7-1.9-2.3-1.3-3.6l8.5-17.6c2-4.1 7-5.9 11.1-3.9 4.2 2 5.9 7 3.9 11.1z"
        transform="rotate(17.926 53.71 54.823) scale(.99999)"
        className="astro-r-leg"
        data-svg-origin="42.77762908935547 67.08769836425782"
        style={{
          transformOrigin: "0 0 0",
        }}
      />
    </motion.g>
  </motion.svg>
)

export default SvgAstronaut
