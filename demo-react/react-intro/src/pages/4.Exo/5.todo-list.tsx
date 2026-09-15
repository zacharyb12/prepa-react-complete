import { useState } from "react";
import type { TodoItem } from "./0.models/2.todo-item";

function TodoComponent() {
    const [todos , setTodos] = useState<TodoItem[]>([]);

    function addTodo(todo: TodoItem) {
        const newTodo = { ...todo, id: todos.length + 1 };
        setTodos([...todos, newTodo]);
    }

    function updateTodo(updatedTodo: TodoItem) {
        setTodos(todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo));
    }

    function deleteTodo(id: number) {
        setTodos(todos.filter(todo => todo.id !== id));
    }
return (
    <>
    <h2>Todo List</h2>

    <TodoInput onAddTodo={addTodo} />
    <TodoList todos={todos} onUpdateTodo={updateTodo} onDeleteTodo={deleteTodo} />
    </>
)
}

function TodoItem( { todo, onUpdateTodo, onDeleteTodo }: { todo: TodoItem, onUpdateTodo: (todo: TodoItem) => void, onDeleteTodo: (id: number) => void } ) {
    
    const getPriorityColor = (priorité: string) => {
        switch (priorité) {
            case "Urgente": return {
                backgroundColor: "red",
                padding: "10px",
                margin: "auto",
                width : "30%",
                borderRadius: "5px"
            };
            case "Normal": return {
                backgroundColor: "orange",
                padding: "10px",
                margin: "auto",
                width : "30%",
                borderRadius: "5px"
            };
            case "Basse": return {
                backgroundColor: "green",
                padding: "10px",
                margin: "auto",
                width : "30%",
                borderRadius: "5px"
            };
            default: return {
                backgroundColor: "gray",
                padding: "10px",
                margin: "auto",
                width : "30%",
                borderRadius: "5px"
            };
        }
    };

    return (
        <div style={getPriorityColor(todo.priorité)} >
            <div className="bg-white w-75 m-auto text-center">
            <h3>{todo.nom} ({todo.priorité})</h3>
            <p>Priorité: {todo.priorité}</p>
            <p>Complet: {todo.complet ? "Oui" : "Non"}</p>
            <button onClick={() => onUpdateTodo({ ...todo, complet: !todo.complet })}>
                {todo.complet ? "Marquer incomplet" : "Marquer complet"}
            </button>
            <button onClick={() => onDeleteTodo(todo.id)}>Supprimer</button>
            </div>
        </div>
    );
}

function TodoList({ todos, onUpdateTodo, onDeleteTodo }: { todos: TodoItem[], onUpdateTodo: (todo: TodoItem) => void, onDeleteTodo: (id: number) => void }) {
return (
    <>
    <div className="d-flex container-todos">
        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onUpdateTodo={onUpdateTodo} onDeleteTodo={onDeleteTodo} />
        ))}
    </div>
    </>
)
}

function TodoInput({ onAddTodo }: { onAddTodo: (todo: TodoItem) => void }) {
    const [todo , setTodo] = useState<TodoItem>({ id: 0, nom: "", priorité: "Normal", complet: false });

    function submitTodo(e: React.FormEvent) {
        e.preventDefault();
        
        // Validation
        if (todo.nom.trim() === "") {
            alert("Le nom est obligatoire !");
            return;
        }
        
        onAddTodo(todo);
        setTodo({ id: 0, nom: "", priorité: "Normal", complet: false });
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