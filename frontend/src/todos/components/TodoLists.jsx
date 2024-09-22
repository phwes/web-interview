import React, { Fragment, useState, useEffect } from 'react'
import {
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@mui/material'
import ReceiptIcon from '@mui/icons-material/Receipt'
import { TodoListForm } from './TodoListForm'

// TODO: Use common TodoList package for contract
const fetchTodoLists = () =>
  fetch('http://localhost:3001/todo-lists/').then((response) => response.json())

const addTodo = (listId, todo) =>
  fetch(`http://localhost:3001/todo-list/${listId}/todo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  }).then((response) => response.json())

export const TodoLists = ({ style }) => {
  const [todoLists, setTodoLists] = useState({})
  const [activeList, setActiveList] = useState()

  const addTodoHandler = (listId, todo) =>
    addTodo(listId, todo).then((updatedList) => {
      setTodoLists({
        ...todoLists,
        [listId]: updatedList,
      })
      return updatedList
    })

  useEffect(() => {
    fetchTodoLists().then((fetchedLists) => {
      const newTodoLists = fetchedLists.reduce((acc, list) => ({ ...acc, [list.id]: list }), {})
      setTodoLists(newTodoLists)
    })
  }, [])

  if (!Object.keys(todoLists).length) return null
  return (
    <Fragment>
      <Card style={style}>
        <CardContent>
          <Typography component='h2'>My Todo Lists</Typography>
          <List>
            {Object.keys(todoLists).map((key) => (
              <ListItemButton key={key} onClick={() => setActiveList(key)}>
                <ListItemIcon>
                  <ReceiptIcon />
                </ListItemIcon>
                <ListItemText primary={todoLists[key].name} />
              </ListItemButton>
            ))}
          </List>
        </CardContent>
      </Card>
      {todoLists[activeList] && (
        <TodoListForm
          key={activeList} // use key to make React recreate component to reset internal state
          todoList={todoLists[activeList]}
          saveTodoList={(id, { todos }) => {
            const listToUpdate = todoLists[id]
            setTodoLists({
              ...todoLists,
              [id]: { ...listToUpdate, todos },
            })
          }}
          onAddTodo={addTodoHandler}
        />
      )}
    </Fragment>
  )
}
