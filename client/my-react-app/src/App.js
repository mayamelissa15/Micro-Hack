
import TestComponent from "./Components/TestComponent";
import Task from "./Components/Task";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div className="App">
     <TestComponent
    title="Custom Title"
    content="maya nanakom."
    onClose={() => {
        console.log('Dialog closed');
        
    }}
/>
<Task title="Maya" description="Melissa"></Task>
<SearchBar></SearchBar>
 
    
    </div>
  );
}

export default App;
