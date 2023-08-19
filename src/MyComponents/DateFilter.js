import React from 'react'
import '../Main2/DateFilter.scss';
export default function DateFilter() {
    return (
        <>
            <div className="container text-start">
                <div className="row" >
                    <div className="col-md-4 col-xl-2 col-sm-6 col-lg-3 mb-2">
                        <div className="Filter">
                            <h6 style={{fontSize:'14px',fontWieght:'500'}}><img width="20" height="20" src="https://img.icons8.com/windows/32/1A1A1A/sorting-options.png" alt="sorting-options"/>&nbsp;&nbsp;Filter</h6>
                            <div className="droppers align-middle">
                                <div className="dropdown">
                                    <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"style={{width:'205px', backgroundColor:'#DBE9FF',height:'50px', borderRadius:'6px',}}> <img width="18" height="18" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/external-calendar-interface-kiranshastry-lineal-kiranshastry-1.png" alt="calendar" /> Select&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </a>

                                    <ul className="dropdown-menu"style={{backgroundColor:'rgba(219, 233, 255, 0.8)'}}>
                                        <li><a className="dropdown-item" href="#">Between Dates</a></li>
                                        <li><a className="dropdown-item" href="#">Between Months</a></li>
                                        <li><a className="dropdown-item" href="#">Between Year</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4 col-xl-2 col-sm-6 col-lg-3 mb-2" >
                        <div className="From">
                            <h6  style={{fontSize:'14px',fontWieght:'400'}}>From</h6>
                            <input type='date' className='fromdate' style={{width:'206px', height:'50px',webkitAppearance:'none',mozAppearance:'none',appearance:'none', border: '1px solid #DDE1E6',borderRadius: '5px',color:'rgba(0, 0, 0, 0.45)',fontSize:'14px',fontWeight:'400'}}/>
                        </div>
                    </div>

                    <div className="col-md-4 col-xl-2 col-sm-6 col-lg-3  mb-2">
                        <div className="To">
                            <h6  style={{fontSize:'14px',fontWieght:'400'}}>To</h6>
                            <input type='date' className='todate' style={{width:'206px', height:'50px', webkitAppearance:'none',mozAppearance:'none',appearance:'none', border: '1px solid #DDE1E6',borderRadius: '5px',color:'rgba(0, 0, 0, 0.45)',fontSize:'14px',fontWeight:'400'}} />
                        </div>
                    </div>

                    <div className="col-md-1  col-xl-1 col-sm-6 col-lg-1  mb-2">
                        <div className="apply" style={{marginTop:'27px'}} >
                            <button type="button" className="btn btn-outline-primary" style={{width:'120px', height:'50px'}}>Apply Filter</button>
                        </div>

                    </div>
                    <div className="col-md-5 col-sm-12 col-lg-3 col-xl-5">
                    </div>
                </div>
            </div>
        </>
    )
}
