import React from 'react'
// import icons
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { CiBank } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
// import css
import './Transactions.css'
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { CiBank } from "react-icons/ci";
import'./Transactions.css'
function Transactions() {
    return (
        <div className='containers'>
            <section className='ledger-header'>
                <p className='p-ledger'>Ledger /<p>History</p></p>
                <div className='ledger-header-two'>
                    <h1>Transactions</h1>
                    <p>Review and manage your curated financial record.</p>
                    <button className='add'>+ Add Transaction</button>
                </div>
            </section>

            <div className='big-header'>

                <section className='alls'>
                    <button className="all-btn">All Activity</button>
                    <button className="all-btn">Income</button>
                    <button className="all-btn">Expenses</button>
                    <button className="all-btn">Pending</button>

                </section>
                <div className='selects-header'>
                    <select className='select'>
                        <option>Oct 2023 - Nov 2023</option>
                        <FaArrowTrendDown />
                    </select>
                </div>
            </div>


            <section className='header-three-box'>
                <div className='box'>
                    <h3 className='net-flow'>Net Flow</h3>
                    <h1 className='nine'>+$9,300.40</h1>
                    <h3 className='last'><FaArrowTrendUp />12.5% vs last month</h3>
                </div>

                <div className='box'>
                    <h3 className='net-flow'>Total Expenses</h3>
                    <h1 className='nine'>-$3,200.00</h1>
                    <h3 className='lasts'><FaArrowTrendDown />0.8% decrease</h3>
                </div>

                <div className='box'>
                    <h3 className='net-flow'>Total Expenses</h3>
                    <h1 className='nine'>-$3,200.00</h1>
                    <div className='btn-icons'>
                        <button className='pro'>Pro Tier</button>
                        <CiBank className='bank' />
                    </div>
                </div>
            // </section>
        </div>
    )
}

export default Transactions