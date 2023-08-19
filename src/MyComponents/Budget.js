import React from 'react'
import '../Main2/Budget.scss';
import Budget2 from './Budget2';
import Budget3 from './Budget3';
export default function Budget() {
    return (
        <>
            {/* <div class="contain text-start" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <div class="row" style={{ marginLeft: '1px' }}>
                    <div class="col-5" style={{ marginTop: '17px', height: '302px', marginLeft: '0px', paddingRight: '0px', paddingLeft: '0px', maxWidth: '520px', marginRight: '18px' }}>
                        <div className="column1budget" style={{ height: '302px', marginLeft: '0rem', paddingLeft: '28px', paddingTop: '28px', paddingRight: '28px', paddingBottom: '10px' }}>
                            <h6>Budget Breakup</h6>
                            {/* <Budget2 /> */}
                        {/* </div> */}
                    {/* </div>  */}


                    {/* <div class="col-7" style={{ marginTop: '17px', height: '302px', marginLeft: '0rem', marginRight: '0rem', paddingLeft: '0rem', paddingRight: '0px', maxWidth: '798px' }}>
                        <div className="column2budget" style={{ height: '302px', marginLeft: '0rem', paddingLeft: '28px', paddingTop: '28px', paddingRight: '28px', paddingBottom: '10px' }}>
                            <h6>Conversion Ratio</h6>
                        </div>
                    </div> */}

                {/* </div> */}
            {/* </div> */}


            <div class="contain text-start">
                <div class="row">
                    <div class=" col-lg-5 col-xs-12 col-sm-12 col-md-12" style={{marginTop:'15px'}}>
                        <div className="column1budget" style={{minHeight: '302px', paddingLeft: '28px', paddingTop: '28px', paddingRight: '28px', paddingBottom: '10px'}}>
                            <h6>Budget Breakup</h6>
                            <Budget2 />
                        </div>
                    </div>


                    <div class="col-lg-7 col-xs-12 col-sm-12 col-md-12 " style={{marginTop:'15px'}}>
                        <div className="column2budget" style={{minHeight: '302px', paddingLeft: '28px', paddingTop: '28px', paddingRight: '28px', paddingBottom: '10px'}} >
                            <h6 style={{paddingLeft:'10px'}}>Conversion Ratio</h6>
                            <Budget3 />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
