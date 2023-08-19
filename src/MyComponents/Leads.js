import React from 'react'
import '../Main2/Leads.scss';
export default function Leads() {
    return (
        <>
            <div className="container text-start" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <div className="row">
                    <div className='col-sm-3 col-xs-12' style={{marginTop:'5px'}}> <div className="column1" style={{  minHeight:'108px',height: 'auto', paddingTop: '12px', paddingLeft: '12px'}}>
                            <h6 className='h6 mb-3'>Total Leads</h6>
                            <h4 className='h4'>200</h4>
                            <div className='Square' style={{float:'right',marginRight:'10px',width:'auto'}}>+2.5%</div>
                        </div></div>
                    <div className='col-sm-3 col-xs-12'  style={{marginTop:'5px'}}> <div className="column2" style={{ height: 'auto',minHeight:'108px', paddingTop: '12px', paddingLeft: '12px' }}>
                            <h6 className='h6 mb-3'>Total Applied Leads</h6>
                            <h4 className='h4'>150</h4>
                            <div className='Square'style={{float:'right',marginRight:'10px',width:'auto'}}>-1.2%</div>
                        </div></div>
                    <div className='col-sm-3 col-xs-12'  style={{marginTop:'5px'}}> <div className="column3" style={{ height: 'auto',minHeight:'108px', paddingTop: '12px', paddingLeft: '12px' }}>
                            <h6 className='h6 mb-3'>Total Disbursed Leads</h6>
                            <h4 className='h4'>50</h4>
                            <div className='Square' style={{float:'right',marginRight:'10px',width:'auto'}}>+11%</div>
                        </div></div>
                    <div className='col-sm-3 col-xs-12'  style={{marginTop:'5px'}}> <div className="column4" style={{ height: 'auto',minHeight:'108px', paddingTop: '12px', paddingLeft: '12px' }}>
                            <h6 className='h6 mb-3'>Total Cost Utilised (Till Date)</h6>
                            <h4 className='h4'>18K</h4>
                        </div></div>
                    {/* <div className="col-3" style={{ paddingLeft: '0px',marginRight:'15.5px', paddingRight: '0px', height: '82px', width: '317px',marginLeft:'1px',marginTop:'5px' }}>

                        <div className="column1" style={{ height: '82px', paddingTop: '12px', paddingLeft: '12px' }}>
                            <h6 className='h6'>Total Leads</h6>
                            <h4 className='h4'>200</h4>
                            <div className='Square'>+2.5%</div>
                        </div>
                    </div>
                    <div className="col-3" style={{ height: '82px', width: '317px', marginRight: '15.5px',marginTop:'5px', paddingLeft: '0px', paddingRight: '0px' }}>

                        <div className="column2" style={{ height: '82px', paddingTop: '12px', paddingLeft: '12px' }}>
                            <h6 className='h6'>Total Applied Leads</h6>
                            <h4 className='h4'>150</h4>
                            <div className='Square'>-1.2%</div>
                        </div>
                    </div>
                    <div className="col-3" style={{ height: '82px', width: '317px', marginRight: '15.5px',marginTop:'5px', paddingLeft: '0px', paddingRight: '0px' }}>

                        <div className="column3" style={{ height: '82px', paddingTop: '12px', paddingLeft: '12px' }}>
                            <h6 className='h6'>Total Disbursed Leads</h6>
                            <h4 className='h4'>50</h4>
                            <div className='Square'>+11%</div>
                        </div>
                    </div>
                    <div className="col-3" style={{ height: '82px', width: '317px',marginTop:'5px', paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="column4" style={{  paddingTop: '12px', paddingLeft: '12px' }}>
                            <h6 className='h6'>Total Cost Utilised (Till Date)</h6>
                            <h4 className='h4'>18K</h4>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}
