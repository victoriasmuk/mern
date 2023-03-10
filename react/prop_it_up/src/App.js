import './App.css';

import PersonCard from './components/personCards';

let people = [
  {'firstName':'Jane', 'lastName':'Doe', 'age':45, 'hairColor':'black'},
  {'firstName':'John', 'lastName':'Smith', 'age':88, 'hairColor':'Brown'},
  {'firstName':'Millard', 'lastName':'Fillmore', 'age':50, 'hairColor':'Brown'},
  {'firstName':'Millard', 'lastName':'Smith', 'age':62, 'hairColor':'Brown'}
]

function App() {
  return (
    <div className="App">
      {people.map(person => {
        return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
      })}
    </div>
  );
}

export default App;
