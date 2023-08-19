import React from 'react'
import '../Main2/Table2.scss';
export default function Table2() {
  return (
    <>
        <div className="table-responsive" style={{marginLeft:'10px',borderRadius:'12px', marginTop:'2rem',maxHeight:'365px',border: '1px solid #F2F2F2'}}>
                <table className="table table-striped table-hover">
                    <thead className='head3'>
                        <tr className='tr1' style={{ fontSize: '12px',textAlign:'center' }}>
                            <th scope="col" className="th1" style={{padding:'10px'}}>Rejection Events</th>
                            <th scope="col" className="th1" style={{padding:'10px'}}>Lead Counts</th>
                        </tr>
                    </thead>
                    <tbody style={{fontSize:'12px',fontWeigth:'400',textAlign:'center'}} >
                        <tr>
                            <td scope="row"style={{padding:'10px'}}>Low Sal/Low Profile</td>
                            <td style={{padding:'10px'}}>100</td>
                        </tr>
                        <tr>
                            <td scope="row" style={{padding:'10px'}}>Bad Credit History</td>
                            <td style={{padding:'10px'}}>100</td>
                        </tr>
                        <tr>
                            <td scope="row" style={{padding:'13px'}}>Over due Msgs</td>
                            <td style={{padding:'13px'}}>100</td>
                        </tr>
                        <tr>
                            <td scope="row" style={{padding:'13px'}}>High Debt Burden</td>
                            <td style={{padding:'13px'}}>100</td>
                        </tr>
                        <tr>
                            <td scope="row" style={{padding:'13px'}}>High Obligation </td>
                            <td style={{padding:'13px'}}>100</td>
                        </tr>
                        <tr>
                            <td scope="row" style={{padding:'13px'}}>Bureau score {'<'}500</td>
                            <td style={{padding:'13px'}}>100</td>

                        </tr>
                        <tr>
                            <td scope="row" style={{padding:'13px'}}>Mode of Payment not fixed</td>
                            <td style={{padding:'13px'}}>100</td>

                        </tr>
                       
                    </tbody>
                </table>
            </div>

    </>
  )
}
