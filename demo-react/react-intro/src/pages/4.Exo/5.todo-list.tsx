import { useState } from "react";
import type { TodoItem } from "./0.models/2.todo-item";

function TodoComponent() {
    const [todos , setTodos] = useState<TodoItem[]>([]);
return (
    <>
    <h2>Todo List</h2>

    <TodoInput onAddTodo={(todo) => setTodos([...todos, todo])} />
    <TodoList todos={todos} />
    </>
)
}

function TodoItem( { todo }: { todo: TodoItem } ) {

    if(todo.priorité === "Urgente"){
        return (
            <div key={todo.id} style={{ border: "2px solid red", padding: "10px", margin: "10px" }}>
                <h3>{todo.nom} (Urgente)</h3>
                <p>Priorité: {todo.priorité}</p>
                <p>Complet: {todo.complet ? "Oui" : "Non"}</p>
            </div>
        )
    } else if (todo.priorité === "Normal"){
        return (
            <div key={todo.id} style={{ border: "2px solid orange", padding: "10px", margin: "10px" }}>
                <h3>{todo.nom} (Normal)</h3>
                <p>Priorité: {todo.priorité}</p>
                <p>Complet: {todo.complet ? "Oui" : "Non"}</p>
            </div>
        )
    } else {
        return (
            <div key={todo.id} style={{ border: "2px solid green", padding: "10px", margin: "10px" }}>
                <h3>{todo.nom} (Basse)</h3>
                <p>Priorité: {todo.priorité}</p>
                <p>Complet: {todo.complet ? "Oui" : "Non"}</p>
            </div>
        )
    }

}

function TodoList({ todos }: { todos: TodoItem[] }) {
return (
    <>
        {todos.map((todo) => (
            <TodoItem todo={todo} />
        ))}
    </>
)
}

function TodoInput({ onAddTodo }: { onAddTodo: (todo: TodoItem) => void }) {
    const [todo , setTodo] = useState<TodoItem>({ id: 0, nom: "", priorité: "", complet: false });

    function submitTodo(e: React.FormEvent) {
        e.preventDefault();
        onAddTodo(todo);
        setTodo({ id: 0, nom: "", priorité: "", complet: false });
    }

return (
    <>
       <form onSubmit={submitTodo}>
        <div>
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" value={todo.nom} onChange={(e) => setTodo({ ...todo, nom: e.target.value })} />
            {todo.nom === "" ? (<span style={{ color: "red" }}> *obligatoire</span>) : null}
        </div>
        <div>
            <label htmlFor="priorité">Priorité</label>
            <select name="priorité" id="priorité" value={todo.priorité} onChange={(e) => setTodo({ ...todo, priorité: e.target.value })}>
                <option value="Basse">Basse</option>
                <option value="Normal">Normal</option>
                <option value="Urgente">Urgente</option>
            </select>
        </div>
        <div>
            <label htmlFor="complet">Complet</label>
            <input type="checkbox" id="complet" checked={todo.complet} onChange={(e) => setTodo({ ...todo, complet: e.target.checked })} />
        </div>
        <button type="submit">Ajouter</button>
       </form>
    </>
)
}

export default TodoComponent;