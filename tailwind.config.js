/** @type {import('tailwindcss').Config} */
export default {
    darkMode: false, // Disable dark mode
    content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			primary: '#1D4ED8',
  			secondary: '#64748B',
  			background: '#FFFFFF',
  			text: '#1F2937'
  		},
  		keyframes: {
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
			scroll: {
				to: {
					transform: "translate(calc(-50% - 0.5rem))",
				},
			},

  		},
  		animation: {
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
			  scroll:
			  "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

function  addVariablesForColors({ addBase, theme }) {
	const allColors = flattenColorPalette(theme("colors"));
	const newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
  
	React.useEffect(() => {
	  addBase({
		":root": newVars,
	  });
	}, [addBase, newVars]);
  
	return null; // This component doesn't render anything
  }
