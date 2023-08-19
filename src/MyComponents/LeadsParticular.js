import React from 'react'
import Table3 from './Table3'
import '../Main2/LeadsParticular.scss';
export default function LeadsParticular() {
  return (
    <>
          <div class="contain text-start">
                <div class="row"style={{marginLeft:'0px',marginRight:'0px'}}>
                    <div class="column col-lg-12 col-xs-12 col-sm-12 col-md-12 " style={{ marginTop: '15px',paddingLeft:'0px',paddingRight:'0px'}}>
                        <div className="column1Leads" style={{ minHeight: '430px', paddingLeft: '8px', paddingTop: '10px', paddingRight: '20px', paddingBottom: '10px' }} >
                            <h6 style={{ paddingLeft: '10px',paddingTop:'10px',fontWeight:'700',fontSize:'14px' }}>Leads Particulars</h6>
                                <Table3 />
                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}
