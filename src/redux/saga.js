import { put , fork , call, all, takeLatest } from "@redux-saga/core/effects";
import * as types from './actionType'

import { getRecipes } from "./api";

export function* onloadRecipeAsync({query}){
    try {
     const response = yield call(getRecipes , query)
     yield put({ type:types.FETCH_RECIPE_SUCCESS , payload:response.data})
    } catch (error) {
        yield put({type:types.FETCH_RECIPE_SUCCESS , payload:error})
    }
}

export function* onloadRecipe(){
    yield takeLatest(types.FETCH_RECIPE_START , onloadRecipeAsync)
}

const recipeSaga = [fork(onloadRecipe)]

export default function* rootSaga(){
    yield all([...recipeSaga])
}