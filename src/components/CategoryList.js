import React from 'react'

export default function CategoryList(props) {
    return (
        <div className='category-item' onClick={props.onCategoryClick}>
            
            <span><i className="fa-solid fa-file"></i>{props.categoryName}</span>
            <button onClick={()=>props.deleteCategoryHandler(props.category)}>Delete</button>   
        </div>
    );
}
