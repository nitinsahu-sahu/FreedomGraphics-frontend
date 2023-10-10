import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function CategoryBar() {
    const category = useSelector(state => state.category.categories);
    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <li key={category._id}>
                    {category.parentId ? <Link to={`/${category.slug}?cid=${category._id}&cname=${category.slug}`}>{category.name}</Link> : <span>{category.name}</span>}
                    {category.children.length > 0 ? (<ul className="">{renderCategories(category.children)}</ul>) : null}
                </li>
            )
        }
        return myCategories;
    }
    return (
        <>
            <div className="category-header">
                <ul>
                    {category.length > 0 ? renderCategories(category) : null}
                </ul>
            </div >
        </>

    )
}

export default CategoryBar
// <nav class="navbar navbar-light bg-light mt-1 d-flex justify-content-evenly">
{/* </nav> */ }
