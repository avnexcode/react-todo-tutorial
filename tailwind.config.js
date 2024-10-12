/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
    	extend: {
    		container: {
    			center: 'true',
    			screens: {
    				'2xl': '1200px'
    			}
    		},
    		borderRadius: {
    			base: '5px'
    		},
    		colors: {
    			success: '#10B981',
    			destructive: '#EF4444',
    			main: '#A78BFA',
    			mainAccent: '#4d80e6',
    			overlay: 'rgba(0,0,0,0.8)',
    			bg: '#dfe5f2',
    			text: '#000',
    			border: '#000',
    			darkBg: '#272933',
    			darkText: '#eeefe9',
    			darkBorder: '#000',
    			secondaryBlack: '#212121'
    		},
    		boxShadow: {
    			light: '4px 4px 0px 0px #000',
    			dark: '4px 4px 0px 0px #000'
    		},
    		translate: {
    			boxShadowX: '4px',
    			boxShadowY: '4px',
    			reverseBoxShadowX: '-4px',
    			reverseBoxShadowY: '-4px'
    		},
    		fontWeight: {
    			base: '500',
    			heading: '700'
    		},
    		animation: {
    			grid: 'grid 15s linear infinite',
    			ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
    			'shiny-text': 'shiny-text 8s infinite',
    			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
    			shine: 'shine var(--duration) infinite linear',
    			gradient: 'gradient 8s linear infinite'
    		},
    		keyframes: {
    			grid: {
    				'0%': {
    					transform: 'translateY(-50%)'
    				},
    				'100%': {
    					transform: 'translateY(0)'
    				}
    			},
    			ripple: {
    				'0%, 100%': {
    					transform: 'translate(-50%, -50%) scale(1)'
    				},
    				'50%': {
    					transform: 'translate(-50%, -50%) scale(0.9)'
    				}
    			},
    			'shiny-text': {
    				'0%, 90%, 100%': {
    					'background-position': 'calc(-100% - var(--shiny-width)) 0'
    				},
    				'30%, 60%': {
    					'background-position': 'calc(100% + var(--shiny-width)) 0'
    				}
    			},
    			'border-beam': {
    				'100%': {
    					'offset-distance': '100%'
    				}
    			},
    			shine: {
    				'0%': {
    					'background-position': '0% 0%'
    				},
    				'50%': {
    					'background-position': '100% 100%'
    				},
    				to: {
    					'background-position': '0% 0%'
    				}
    			},
    			gradient: {
    				to: {
    					backgroundPosition: 'var(--bg-size) 0'
    				}
    			}
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}