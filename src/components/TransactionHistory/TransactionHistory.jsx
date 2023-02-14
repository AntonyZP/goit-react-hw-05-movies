import PropTypes from "prop-types";
import css from '../TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({items}) => {
    return (
    <table className={css.transactionHistory}>
    <thead className={css.tHead}>
      <tr  className={css.tRow}>
        <th className={css.tHeader}>Type</th>
        <th className={css.tHeader}>Amount</th>
        <th className={css.tHeader}>Currency</th>
      </tr>
    </thead>
  
    <tbody className={css.tBody}>  
        {items.map(({id, type, amount, currency})=>{
            return ( 
                <tr className={css.row} key={id}>     
            <td className={css.tData}>{type}</td>
            <td className={css.tData}>{amount}</td>
            <td className={css.tData}>{currency}</td>
             </tr>
   )})}
    </tbody>
  </table>)
}

TransactionHistory.propTypes={
    id: PropTypes.string,
    type:PropTypes.string,
    amount:PropTypes.string, 
    currency:PropTypes.string
}