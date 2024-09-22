import React, { useState } from 'react'
import { TextField, Card, CardContent, CardActions, Button, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

export const TodoListForm = ({ todoList, onAddTodo, onDeleteTodo, onEditTodo }) => {
  const [todos, setTodos] = useState(todoList.todos)
  const [isSaved, setIsSaved] = useState(true)

  return (
    <Card sx={{ margin: '0 1rem' }}>
      <CardContent>
        <Typography component='h2'>{todoList.name}</Typography>
        <form style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          {todos.map((todo, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ margin: '8px' }} variant='h6'>
                {index + 1}
              </Typography>
              <TextField
                sx={{ flexGrow: 1, marginTop: '1rem' }}
                label='What to do?'
                value={todo.text}
                onBlur={() => {
                  onEditTodo(todoList.id, todo.id, { text: todo.text }).then(() => setIsSaved(true))
                }}
                onChange={(event) => {
                  setIsSaved(false)
                  setTodos([
                    ...todos.slice(0, index),
                    { ...todo, text: event.target.value },
                    ...todos.slice(index + 1),
                  ])
                }}
              />
              <Button
                sx={{ margin: '8px' }}
                size='small'
                color='secondary'
                onClick={() => {
                  setTodos([...todos.slice(0, index), ...todos.slice(index + 1)])
                  onDeleteTodo(todoList.id, todo.id)
                }}
              >
                <DeleteIcon />
              </Button>
            </div>
          ))}
          <CardActions>
            <Button
              type='button'
              color='primary'
              onClick={() => {
                onAddTodo(todoList.id, { text: '', done: false }).then((updatedList) => {
                  setTodos(updatedList.todos)
                })
              }}
            >
              Add Todo <AddIcon />
            </Button>
            {/* Save button exist to cause blur event */}
            <Button disabled={isSaved} variant='contained' color='primary'>
              Save
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  )
}
