import { categoryConstants } from './constants'
import axios from "../helper/axios";


// ---------------Find All Category----------------
export const findCategories = () => {
    return async (dispatch) => {
        dispatch({
            type: categoryConstants.GET_ALL_CATEGORY_REQUEST,
        });
        await axios.get('/category/get-category').then(
            function (response) {
                dispatch({
                    type: categoryConstants.GET_ALL_CATEGORY_SUCCESS,
                    payload: {
                        message: response.data.message,
                        categories: response.data.categoryList
                    }
                })
            }).catch(function (error) {
                dispatch({
                    type: categoryConstants.GET_ALL_CATEGORY_FAILURE,
                    payload: {
                        error: "Category is not found!",
                    }
                })
            })
    }
}