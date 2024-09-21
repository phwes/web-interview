const attachTodoLists = (todoLists) =>
    (req, res, next) => {
        req.todoLists = todoLists;
        next();
    };


export default attachTodoLists;