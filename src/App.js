import CategoryForm from './components/CategoryForm'
import CategoryList from './components/CategoryList'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import React, { useEffect, useState } from 'react';


function App() {

  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([]);

  const [categoryInput, setCategoryInput] = useState('');
  const [todoInput, setTodoInput] = useState('');
  const [categoryNameTitle, setCategoryNameTitle] = useState('');

  function addCategoryHandler(event) {
    event.preventDefault();
    if (categoryInput !== '') {
      const newCategory = {
        id: Math.random() * 1000,
        categoryName: categoryInput,
        todos: []
      };
      setCategories([...categories, newCategory]);
      setCurrentCategory(newCategory);
      setCategoryInput('');
      setCategoryNameTitle(newCategory.categoryName);
    }
  }

  function deleteCategoryHandler(category) {
    const filteredCategories = categories.filter(c => c.id !== category.id);
    setCategories(filteredCategories);
    if (filteredCategories.length > 0) {
      setCurrentCategory(filteredCategories[0]);
    } else if (filteredCategories.length === 0) {
      setCurrentCategory(null);
    }
  }

  useEffect(()=> {
    if (categories.length === 0) {
      setCategoryNameTitle('');
    }
  }, [categories]);

  function handleCategoryClick(category) {
    setCurrentCategory(category);
    setCategoryNameTitle(category.categoryName);
  };

  function addTodoHandler(event) {
    event.preventDefault();
    if (todoInput !== '' & categories.length === 0) {
      window.alert("Add a Category!");
    }
    else if (todoInput !== '') {
      const newTodo = { id: Math.random() * 10000, text: todoInput };
      const updatedCategory = { ...currentCategory, todos: [...currentCategory.todos, newTodo] };
      const updatedCategories = categories.map((c) => {
        return c === currentCategory ? updatedCategory : c;
      });
      setCategories(updatedCategories);
      setCurrentCategory(updatedCategory); // update currentCategory state
      setTodoInput('');
    }
  }

  function deleteTodoHandler(id) {
    if (currentCategory) {
      const filteredTodos = currentCategory.todos.filter((t) => t.id !== id);
      const updatedCategory = { ...currentCategory, todos: filteredTodos };
      const updatedCategories = categories.map((c) => {
        return c.id === currentCategory.id ? updatedCategory : c;
      });
      setCategories(updatedCategories);
    }
  }

  const myCategories = categories.map((category) => {
    return <CategoryList 
      key={category.id} 
      categoryName={category.categoryName} 
      onCategoryClick={() => handleCategoryClick(category)}
      deleteCategoryHandler={deleteCategoryHandler}
      category={category}
    />;
  });

  return (
    <div className='my-app'>
      <div className='category-container'>
        <CategoryForm 
          addCategoryHandler={addCategoryHandler}
          setCategories={setCategories}
          categoryInput={categoryInput}
          setCategoryInput={setCategoryInput}
        />
        {myCategories}
      </div>

      {currentCategory && (
        <div className='todo-container'>
          <h1><i className="fa-solid fa-file"></i>{categoryNameTitle}</h1>
          <div>
            <TodoForm 
              addTodoHandler={addTodoHandler}
              todoInput={todoInput}
              setTodoInput={setTodoInput}
            />
            <TodoList 
              setTodoInput={setTodoInput}
              todoInput={todoInput}
              todos={currentCategory.todos}
              deleteTodoHandler={deleteTodoHandler}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;