import React from 'react'
import '../Main2/Table3.scss';
export default function Table3() {
  return (
    <>
        <div className="table table-responsive" style={{marginLeft:'10px',borderRadius:'12px', marginTop:'2.5rem',maxHeight:'365px'}}>
                <table className="table  table-striped table-hover">
                    <thead className='head1'>
                        <tr className = 'tr1'style={{ fontSize: '12px' , textAlign:'center'}}>
                            <th scope="col" className='th1'>Date</th>
                            <th scope="col"className='th1'>Fresh Leads</th>
                            <th scope="col" className='th1'>Fresh Approval</th>
                            <th scope="col" className='th1'>Fresh Disbursement</th>
                            <th scope="col" className='th1'>CPA</th>
                            <th scope="col" className='th1'>Total Cost</th>
                            <th scope="col" className='th1'>Repeat Leads</th>
                            <th scope="col" className='th1'>Repeat Approval</th>
                            <th scope="col" className='th1'>Repeat Disbursement</th>
                            <th scope="col" className='th1'>Total Leads</th>
                            <th scope="col" className='th1'>Amount Disbursed</th>
                        </tr>
                    </thead>
                    <tbody style={{fontSize:'12px',fontWeigth:'400', textAlign:'center'}}>
                        <tr>
                            <td scope="row">01/08/2023</td>
                            <td>126</td>
                            <td>10</td>
                            <td>7</td>
                            <td>800</td>
                            <td>8,000</td>
                            <td>70</td>
                            <td>32</td>
                            <td>25</td>
                            <td>100</td>
                            <td>8,10,000</td>
                        </tr>
                        <tr>
                            <td scope="row">02/08/2023</td>
                            <td>100</td>
                            <td>45</td>
                            <td>30</td>
                            <td>800</td>
                            <td>8,000</td>
                            <td>70</td>
                            <td>32</td>
                            <td>25</td>
                            <td>100</td>
                            <td>8,10,000</td>
                        </tr>
                        <tr>
                            <td scope="row">03/08/2023</td>
                            <td>100</td>
                            <td>45</td>
                            <td>30</td>
                            <td>800</td>
                            <td>8,000</td>
                            <td>70</td>
                            <td>32</td>
                            <td>25</td>
                            <td>100</td>
                            <td>8,10,000</td>
                        </tr>
                        <tr>
                            <td scope="row">04/08/2023</td>
                            <td>100</td>
                            <td>45</td>
                            <td>30</td>
                            <td>800</td>
                            <td>8,000</td>
                            <td>70</td>
                            <td>32</td>
                            <td>25</td>
                            <td>100</td>
                            <td>8,10,000</td>
                        </tr>
                        <tr>
                            <td scope="row">05/08/2023</td>
                            <td>100</td>
                            <td>45</td>
                            <td>30</td>
                            <td>800</td>
                            <td>8,000</td>
                            <td>70</td>
                            <td>32</td>
                            <td>25</td>
                            <td>100</td>
                            <td>8,10,000</td>
                        </tr>
                        <tr>
                            <td scope="row">06/08/2023</td>
                            <td>100</td>
                            <td>45</td>
                            <td>30</td>
                            <td>800</td>
                            <td>8,000</td>
                            <td>70</td>
                            <td>32</td>
                            <td>25</td>
                            <td>100</td>
                            <td>8,10,000</td>
                        </tr>
                        <tr>
                            <td scope="row">07/08/2023</td>
                            <td>100</td>
                            <td>45</td>
                            <td>30</td>
                            <td>800</td>
                            <td>8,000</td>
                            <td>70</td>
                            <td>32</td>
                            <td>25</td>
                            <td>100</td>
                            <td>8,10,000</td>
                        </tr>
                        
                    </tbody>
                    <thead className='head2'>
                        <tr className='tr2' style={{ fontSize: '12px', textAlign:'center' }}>
                            <th scope="col" className='th2'>Total</th>
                            <th scope="col" className='th2'>1821</th>
                            <th scope="col" className='th2'>58</th>
                            <th scope="col" className='th2'>41</th>
                            <th scope="col" className='th2'>5,600</th>
                            <th scope="col" className='th2'>46,400</th>
                            <th scope="col" className='th2'>960</th>
                            <th scope="col" className='th2'>344</th>
                            <th scope="col" className='th2'>325</th>
                            <th scope="col" className='th2'>2,781</th>
                            <th scope="col" className='th2'>80,75,000</th>
                        </tr>
                    </thead>
                </table>
            </div>
    </>
  )
}
