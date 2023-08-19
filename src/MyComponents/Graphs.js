import React from 'react'
import '../Main2/Graphs.scss';
import LineChart1 from './LineChart1';
import BarChart1 from './BarChart1';
export default function Graphs() {
    return (
        <>
            {/* <div className="container text-start" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <div className="row" style={{ marginLeft: '1px' }}>
                    <div className="col col-6" style={{ marginTop: '17px', height: '317px', marginLeft: '0px', paddingRight: '0px', paddingLeft: '0px', maxWidth: '650px', marginRight: '18px' }}>
                        <div className="column1graph" style={{ height: '317px', marginLeft: '0rem', paddingLeft: '20px', paddingTop: '20px' }}>
                            <h6>Daily Leads Received</h6>
                                <LineChart1 />
                        </div>
                    </div>
                    <div className="col col-6" style={{ marginTop: '17px', height: '317px', marginLeft: '0rem', marginRight: '0rem', paddingLeft: '0rem', paddingRight: '0px', maxWidth: '650px' }}>
                        <div className="column2graph" style={{ height: '317px', marginLeft: '0rem', paddingLeft: '20px', paddingTop: '20px' }}>
                            <h6>Count of Leads on Each Loan Stage</h6>
                            <BarChart1 />
                        </div>
                    </div>

                </div>
            </div> */}


            <div className="container text-start" >
                <div className="row" >
                    <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-6" style={{marginTop:'15px'}} >
                        <div className="column1graph"style={{height: '317px', paddingLeft: '20px', paddingTop: '20px' }}>
                            <h6>Daily Leads Received</h6>
                                <LineChart1 />
                        </div>
                    </div>
                    <div className="col col-xs-12 col-sm-12 col-md-12 col-lg-6" style={{marginTop:'15px'}}>
                        <div className="column2graph" style={{ height: '317px', paddingLeft: '20px', paddingTop: '20px' }}>
                            <h6>Count of Leads on Each Loan Stage</h6>
                            <BarChart1 />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
