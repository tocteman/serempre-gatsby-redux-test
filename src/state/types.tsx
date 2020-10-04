
interface Todo {
  id: string,
  title: string,
  creation_date: number,
  location: any
  completed: boolean
}

type Todos = Todo[]