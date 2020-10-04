
interface Location {
  latitude: number,
  longitude: number
}

interface Todo {
  id: string,
  title: string,
  date: string,
  creation_date: number,
  location: Location
  completed: boolean
}