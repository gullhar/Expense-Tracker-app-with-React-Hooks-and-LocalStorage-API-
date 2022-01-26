import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

const List = ({ expenses }) => (
  <div>
    <ListGroup>
      {expenses.map(item => (
      <React.Fragment key={item.id}>
           <ListGroupItem >{item.name} - $ {item.amount}
        </ListGroupItem>
        </React.Fragment>
      ))}
    </ListGroup>
  </div>
)

export default List