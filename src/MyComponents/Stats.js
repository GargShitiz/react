import React, { useState } from 'react'
import Piechart1 from './Piechart1'
import Piechart2 from './Piechart2'
import Piechart3 from './Piechart3'
import '../Main2/Stats.scss';

export default function Stats() {

    return (
        <>
            <div class="contain text-start">
                <div class="row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                    <div class="col-12" style={{ marginTop: '15px', paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="column1disbursement" style={{ minHeight: '260px', paddingLeft: '25px', paddingTop: '10px', paddingRight: '10px', paddingBottom: '13px' }}>
                            <h6>Disbursement Stats</h6>
                            <div className="column2disbursement" >
                                <div className="row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                                    <div className='col col-xl-2 col-sm-6 col-xs-12 col-md-4 col-lg-4' style={{ minWidth: '191px', marginTop: '10px', marginRight: '15px', maxWidth: '189px', minHeight: '198px', paddingLeft: '0px', paddingRight: '0px' }}>
                                        <h6 className='h6' style={{ paddingTop: '10px', paddingLeft: '8px' }}>Lead to Fresh Approval Ratio</h6>
                                        <div style={{zIndex:-1}}>
                                            <Piechart1 />
                                        </div>
                                        <h6 className='percentage'>46%</h6>
                                        <div className="Square1">+2.5%</div>
                                    </div>
                                    <div className='col col-xl-2 col-sm-6 col-xs-12 col-md-4 col-lg-4' style={{ minWidth: '191px', marginTop: '10px', marginRight: '15px', maxWidth: '189px', minHeight: '198px', paddingLeft: '0px', paddingRight: '0px' }}>
                                        <h6 className='h6' style={{ paddingTop: '10px', paddingLeft: '8px' }}>Lead to Fresh Disbursal Ratio</h6>
                                        <Piechart2 />
                                        <h6 className='percentage'>46%</h6>
                                        <div className="Square1">+2.5%</div>
                                    </div>
                                    <div className='col col-xl-2 col-sm-6 col-xs-12 col-md-4 col-lg-4' style={{ minWidth: '191px', marginTop: '10px', marginRight: '15px', maxWidth: '189px', minHeight: '198px', paddingLeft: '0px', paddingRight: '0px' }}>
                                        <h6 className='h6' style={{ paddingTop: '10px', paddingLeft: '8px' }}>Lead to Repeat Approval Ratio</h6>
                                        <Piechart3 />
                                        <h6 className='percentage'>46%</h6>
                                        <div className="Square1">-2.5%</div>
                                    </div>
                                    <div className='col col-xl-2 col-sm-6 col-xs-12 col-md-4 col-lg-4' style={{ minWidth: '191px', marginTop: '10px', marginRight: '15px', maxWidth: '189px', minHeight: '198px', paddingLeft: '0px', paddingRight: '0px' }}>
                                        <h6 className='h6' style={{ paddingTop: '10px', paddingLeft: '8px' }}>Customer Acquisition Cost</h6>
                                        <h4 className='h4'>46,400</h4>
                                        <div className="Square">+2.5%</div>
                                    </div>
                                    <div className='col col-xl-2 col-sm-6 col-xs-12 col-md-4 col-lg-4' style={{ minWidth: '191px', marginTop: '10px', marginRight: '15px', maxWidth: '189px', minHeight: '198px', paddingLeft: '0px', paddingRight: '0px' }}>
                                        <h6 className='h6' style={{ paddingTop: '10px', paddingLeft: '8px' }}>Total Disbursement Leads</h6>
                                        <h4 className='h4'>2,781</h4>
                                        <div className="Square">+2.5%</div>
                                    </div>
                                    <div className='col col-xl-2 col-sm-6 col-xs-12 col-md-4 col-lg-4' style={{ minWidth: '191px', marginTop: '10px', marginRight: '15px', maxWidth: '189px', minHeight: '198px', paddingLeft: '0px', paddingRight: '0px' }}>
                                        <h6 className='h6' style={{ paddingTop: '10px', paddingLeft: '8px' }}>Total Disbursement Amount</h6>
                                        <h4 className='h4'>80,75,000</h4>
                                        <div className="Square">-2.5%</div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
