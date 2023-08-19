import React from 'react'
import '../Main2/Budget3.scss';
export default function Budget3() {
    return (
        <>
            <div className="innercontent2 text-start">
                <div class="row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                    <div class="col" style={{ height: '135px', paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="column2budget1" style={{ height: '135px', paddingLeft: '10px' }}>
                            <h4 className='h4'>85%</h4>
                            <div className='Square'>+3.4%</div>
                        </div>
                    </div>
                </div>
                <div class="row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                    <div class="col" style={{ height: '79px', marginRight: '8px', paddingLeft: '0px', paddingRight: '0px',marginTop:'8px' }}>
                        <div className="column2budget2" style={{ height: '79px' }}>
                            <div className='circle'></div>
                            <h6 className='h6'>Good Leads</h6>
                            <h4 className='h4' style={{ marginLeft: '10px', marginTop: '10px' }}>65%</h4>
                            <div className='Square'>+3.4%</div>
                        </div>
                    </div>
                    <div class="col" style={{ height: '79px', paddingLeft: '0px', paddingRight: '0px',marginTop:'8px' }}>
                        <div className="column2budget3" style={{ height: '79px' }}>
                            <div className='circle'></div>
                            <h6 className='h6'>Cold Leads</h6>
                            <h4 className='h4' style={{ marginLeft: '10px', marginTop: '10px' }}>20%</h4>
                            <div className='Square'>-1.4%</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
