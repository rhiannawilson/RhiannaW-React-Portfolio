// ~ HOME PAGE ~ // 

import PortfolioPicRW from './pageAssets/PortfolioPicRW.png';

export default function HomePage() {
  
  return (
    <div className="container-fluid">

<div className="container">
  <div className='row'>
    <img src={PortfolioPicRW} className="p-5 m-3 col-md-3 col-xs-6" alt="a picture of a person"/> 
    <p className="col-md-3">Welcome</p> 
    
  </div>
  </div>
  </div>
);
}

