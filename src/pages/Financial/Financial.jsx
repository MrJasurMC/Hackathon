import React from 'react'
import "./Financial.css"
import { FaMoneyBills } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";

function Financial() {
  return (
    <section className="dash">
        <div className="text-dash">
            <h1>Financial Overview</h1>
            <p>Welcome back, your portfolio is up 4.2% this month.</p>
        </div>

        <div className="totals-dash">
            <div className="box-dash">
                <div className="name-box"><FaMoneyBills /> Total Income</div>
                <div className="price-box">$15,000.00</div>
                <div className="month-box"><FaArrowUp /> 12.5% vs last month</div>
            </div>
            <div className="box-dash">
                <div className="name-box"><LuShoppingCart /> Total Expenses</div>
                <div className="price-box">$8,500.00</div>
                <div className="month-box"><FaArrowUp /> 12.5% vs last month</div>
            </div>
            <div className="box-dash">
                <div className="name-box"><FaMoneyBills /> Current Balance</div>
                <div className="price-box">$6,500.00</div>
                <div className="month-box"><FaArrowUp /> 12.5% vs last month</div>
            </div>
        </div>
    </section>
  )
}

export default Financial