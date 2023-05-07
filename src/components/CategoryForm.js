import React from 'react'

export default function CategoryForm({setCategoryInput, addCategoryHandler, categoryInput, setCategories}) {
    return (
        <form className='category-form' onSubmit={addCategoryHandler}>
            <input 
                type='text' 
                placeholder='Add a New Category...' 
                onChange={(event) => setCategoryInput(event.target.value)} 
                value={categoryInput} />
            <button onClick={addCategoryHandler}>Add</button>
        </form>
    );
}
