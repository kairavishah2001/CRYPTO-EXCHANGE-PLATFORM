import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/core";
import React from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { addMoneyToWallet } from "../../Store/actions/walletAction";
import {
  Form,
  FormTransaction,
  Header1,
  Header2,
  TransactionMain,
} from "../../styles";
import { darkBlue } from "../../styles/colors";
import './send&receive.css';
import BTCTracker from '../Dashboard/Bitcoinprice';


var QRCode = require('qrcode.react');
class Transaction extends React.Component {
  state={
          to:'',
      }

      handleChange = (e) =>{
          const {name,value} = e.target
          this.setState({[name]:value})
      }

      handleSubmit = (e) =>{
          e.preventDefault()
          this.props.isSendReceive(true)
      }
      getTotal(inputAmount) {

        var inputAmount=document.getElementById("amount").value;
        var n1= 2;
        let result= parseInt(inputAmount) + n1;
        if (inputAmount < 0 || inputAmount == 0) {
          alert ("Values of Amount can't be negative or 0")
          }
          else
          alert ("Total value is " + result); }
  render() {
    return (
      <div className='send'>
            <div className='text-center'>
                      <h1>Send & Receive > </h1>
                    </div>
            <div className='sendbox'>Send </div>
            <div className='sendbox2'></div>
            <div className='text'>To:<br />
            <input
                             type="text"
                             id="to"
                             className=""
                             name="to"
                             required onChange={this.handleChange}
                             /></div>

            <small>Please enter the wallet id <br/>
            Or</small>
       <div className="calc">
            <div className="calc-header">
              <label>Amount:</label>
              <div className='text'>
              <input id="amount"type="number" placeholder="Input Amount Here" min="1" required />
              </div><label>Fees: $2</label>
              <button id="submit-percentage"type="submit"onClick={() => this.getTotal()}>Total</button>
            </div>
           </div>



            <button1 onSubmit={this.handleSubmit}>Send </button1>
            <div className='receivebox'>Your Wallet Id </div>
           <div className='sendbox3'></div>
           <div className='text2'>Your Wallet Id:</div>

           <div className='receivebox1'></div>
           <div className='text3'>4fzr6uu1vnw5</div>
           <h6>Or<br />
           <QRCode value="4fzr6uu1vnw5" />

           Your QR code</h6>

            <div className='rightsideBar'>
            </div>
            <div className='graphBar'>
             </div>
            <div className='stats'> Statistics </div>
            <div className='price'> Current Bitcoin Price </div>
             <div className='line3'> </div>
           <div className='bitcoinPrice'>
            <BTCTracker />
             </div>
          </div>
    );
  }
}

export default Transaction;
