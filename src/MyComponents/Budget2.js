import React from 'react'
import '../Main2/Budget2.scss';

export default function Budget2() {
    return (
        <>
            <div className="innercontents text-center">
                <div class="row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                    <div class="col col-12" style={{ height: '125px', paddingLeft: '0px', paddingRight: '0px' }}>
                        <div className="column1budget1" style={{ height: '125px' }}>
                            <h4 className='h4'><img width="24" height="24" src="https://img.icons8.com/material-rounded/24/rupee.png" alt="R"/>3,00,000</h4>
                            <span className='Square'>+3.4%</span>
                            <h6 style={{ fontSize: '12px', fontWeight: '500', color: 'rgba(0, 0, 0, 0.8)' ,position:'relative',marginLeft:'10px',marginTop:'-1rem', marginBottom:'0px' }}>Budgeted Amount</h6>
                            <h6 style={{ fontSize: '14px', fontWeight: '400', color: 'rgba(0, 0, 0, 0.45)',position:'relative', marginLeft:'10px'}}>(For Current Month)</h6>
                        </div>
                    </div>
                </div>
                <div class="row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                    <div class="col" style={{ height: '97px',marginRight:'6px' ,paddingLeft:'0px',paddingRight:'0px',marginTop:'8px'}}>
                        <div className="column1budget2" style={{ height: '97px' }}>
                            <h6 className='h6'>Amount Utilised</h6>
                            <h4 className='h4'>1,50,000</h4>
                        </div>
                    </div>
                    <div class="col " style={{ height: '97px' ,paddingLeft:'0px',paddingRight:'0px',marginTop:'8px'}}>
                        <div className="column1budget3" style={{ height: '97px' }}>
                        <h6 className='h6'>Remaining Amount</h6>
                            <h4 className='h4'>1,50,000</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
