import React from 'react'

export const Ball = () => {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 595.3 595.3">
            <g id="Capa_1"></g>
            <g id="Capa_2">
                <g>
                    <circle fill="#F1EA71" cx="297" cy="296" r="230.6"/>
                    <path fill="#CFC761" d="M180.7,96.9c0,0-183.5,109.7-85.4,310.7c0,0,50.9,116.4,201.7,119c0,0-163.1-66-178.6-214.8 C118.4,311.8,100,210.3,180.7,96.9z"/>
                    <path fill="none" stroke="#FFFFFF" strokeWidth="23.9535" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M84.7,234.5c0,0,49.3-2.8,77.7,62.1c0,0,40.2,145.8,182,103.3c0,0,130.1-49.4,35.8-210.1c0,0-25.7-34.8-14.3-61.2l13.8-37.3"/>
                </g>
            </g>
        </svg>
    )
}

export function IconMapper (icon: string): React.ReactElement | null {
    switch (icon) {
      case 'ball':
        return <Ball />
  
      default:
        return null
    }
  }