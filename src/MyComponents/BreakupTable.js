import React from 'react'
import '../Main2/BreakupTable.scss';
export default function BreakupTable() {
    return (
        <>
            <div className="table table-responsive" style={{marginLeft:'7px',borderRadius:'12px', marginTop:'1.5rem',marginBottom:'-2rem',maxHeight:'367px',
        border: '1px solid #F2F2F2'}}>
                <table className="table table-striped table-hover">
                    <thead className='head4'>
                        <tr className="tr1" style={{ fontSize: '12px',textAlign:'center' }}>
                            <th scope="col" className='th1'>Date</th>
                            <th scope="col" className='th1'>Total Leads</th>
                            <th scope="col" className='th1'>Total Applied</th>
                            <th scope="col" className='th1'>Total disbursed</th>
                            <th scope="col" className='th1'>Total Rejected</th>
                            <th scope="col" className='th1'>Conversion Ratio</th>
                            <th scope="col" className='th1'>Rejection %</th>
                        </tr>
                    </thead>
                    <tbody style={{fontSize:'12px',fontWeigth:'400',textAlign:'center'}}>
                        <tr>
                            <td scope="row">01/08/2023</td>
                            <td>100</td>
                            <td>45</td>
                            <td>30</td>
                            <td>15</td>
                            <td>56%</td>
                            <td>6%</td>
                        </tr>
                        <tr>
                            <td scope="row">02/08/2023</td>
                            <td>100</td>
                            <td>45</td>
                            <td>30</td>
                            <td>15</td>
                            <td>56%</td>
                            <td>6%</td>
                        </tr>
                        <tr>
                            <td scope="row">03/08/2023</td>
                            <td>100</td>
                            <td>45</td>
                            <td>30</td>
                            <td>15</td>
                            <td>56%</td>
                            <td>6%</td>
                        </tr>
                        <tr>
                            <td scope="row">04/08/2023</td>
                            <td>100</td>
                            <td>45</td>
                            <td>30</td>
                            <td>15</td>
                            <td>56%</td>
                            <td>6%</td>
                        </tr>
                        <tr>
                            <td scope="row">05/08/2023</td>
                            <td>100</td>
                            <td>45</td>
                            <td>30</td>
                            <td>15</td>
                            <td>56%</td>
                            <td>6%</td>
                        </tr>
                        <tr>
                            <td scope="row">06/08/2023</td>
                            <td>100</td>
                            <td>45</td>
                            <td>30</td>
                            <td>15</td>
                            <td>56%</td>
                            <td>6%</td>
                        </tr>
                        <tr>
                            <td scope="row">07/08/2023</td>
                            <td>100</td>
                            <td>45</td>
                            <td>30</td>
                            <td>15</td>
                            <td>56%</td>
                            <td>6%</td>
                        </tr>
                        <tr>
                            <td scope="row">07/08/2023</td>
                            <td>100</td>
                            <td>45</td>
                            <td>30</td>
                            <td>15</td>
                            <td>56%</td>
                            <td>6%</td>
                        </tr>
                        <tr>
                            <td scope="row">07/08/2023</td>
                            <td>100</td>
                            <td>45</td>
                            <td>30</td>
                            <td>15</td>
                            <td>56%</td>
                            <td>6%</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}
