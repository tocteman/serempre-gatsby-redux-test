
interface RetrievedLocation {
  latitude: number,
  longitude: number
}

interface Todo {
  id: string,
  title: string,
  creation_date: number,
  location: RetrievedLocation,
  completed: boolean
}

type Todos = Todo[]

type SimpleMarker ={
  text: string,
  lng: number,
  lat: number
}