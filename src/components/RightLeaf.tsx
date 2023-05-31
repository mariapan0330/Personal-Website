import React from 'react'
import '../styles/Leaves.css'
import Plx from 'react-plx'

type PLXItem = {
  start: string | number;
  end: string | number;
  duration?: string | number;
  properties: {
    startValue: number;
    endValue: number;
    unit?: string;
    property: string;
  }[];
}

const RightLeaf: React.FC = () => {

    const animate = (speed:number, start:number): PLXItem[] => {
      return [
        {
            // vertical start and end (how long it takes to get to last position):
          start: 0,
          end: speed,
          properties: [
            {
                // translateX start and end:
              startValue: start,
              endValue: 128,
              unit: 'vw',
              property: "translateX",
            },
          ],
        },
      ]
    }


  return (
    <>
    <div className="leaves-container">
    <Plx parallaxData={animate(1300, 86.6)} className="leaf-plx">
        <img className='leaf-img' src={require("../images/leaf R-1.png")} alt="background" />
    </Plx>
    <Plx parallaxData={animate(1700, 78.5)} className="leaf-plx">
        <img id='r-leaf-2' className='leaf-img' src={require("../images/leaf R-2.png")} alt="background" />
    </Plx>
    <Plx parallaxData={animate(2000, 70.5)} className="leaf-plx">
        <img id='r-leaf-3' className='leaf-img' src={require("../images/leaf R-3.png")} alt="background" />
    </Plx>
    </div>
    </>
  )
}

export default RightLeaf;