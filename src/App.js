
import React, { useState, useEffect } from 'react'
import {Jumbotron, Button, Container } from 'reactstrap'
import Logo from './logo.svg'
import Form from './Form'
import List from './List'
import Test from './components/Charts/Chart'
import Chart from './components/Charts/Chart'


const All_EXPENES=[
  { id: 1, name: 'Buy a book', amount: 20 },
  { id: 2, name: 'Buy a milk', amount: 5 },
  { id: 3, name: 'Book a flight ticket', amount: 225 }

]

function App(){
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const handleName = event => {
    console.log('Name ', event.target.value)
    setName(event.target.value)
  }
  
  const handleAmount = event => {
    console.log('Amount ', event.target.value)
    setAmount(event.target.value)
  }
  const handleClearExpenses = () => {
    setExpenses([])
  }
  const handleSubmitForm =event =>{
    event.preventDefault()//preventing the Form from refreshing the whole page in submission
  
    if (name !== '' && amount > 0){
  const expense={name,amount}//do not override pre values in the array
  setExpenses([...expenses, expense])
    //clean input fields
    setName('')
    setAmount('')
  }
  else{
    console.log('Invalid expense name or the amount')
    
    }
  }
  
  const All_EXPENES=localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses')):[]
  const [expenses, setExpenses] = useState(All_EXPENES)
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 }
]
  
//these both <div > after <container> instead of  Jumbotron cause my bootstrap cannot read it it maybe needs different version .
return(
  
<Container className='text-center'> 

<div className="container-fluid bg-light text-dark p-5">
  <div className="container bg-light p-5">
<h3 className='display-6'>
Expense Tracker React App
<img src={Logo} style={{ width:50,height:50 }} alt="react-logo"></img>
</h3>
<div>
<p>
  Total Expense:{''} <span className='text-success'>${''} {expenses.reduce((accumulator ,currentValue )=>
  {
return(accumulator+=parseInt(currentValue.amount))},0)}
  </span>
</p>
<Form  name={name} amount={amount} handleName={handleName} handleAmount={handleAmount} handleSubmitForm={handleSubmitForm} handleClearExpenses={handleClearExpenses}/>
<List expenses={expenses} />

</div>

</div>
</div>

<Chart dataPoints={chartDataPoints} />
</Container>
)

}
/*
function App() {
  const [count,setCount]=useState(0)
  return (
    <Container style={{ marginTop: 20 }}>
      <p className='text-primary'>You clicked {count} times .</p>
      <Button onClick={()=>setCount(count+1)} color="success">Increase the coubt</Button>
      <Button onClick={()=>setCount(count-1)} color="danger">Dicrease the coubt</Button>
    </Container>
  )
}
*/


export default App;
