export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

export const addProduct = payload => ({
  type: ADD_PRODUCT,
  payload: payload
})

export const deleteProduct = id => ({
  type: REMOVE_PRODUCT,
  id
})

export const updateProduct = (id, payload) => ({
  type: UPDATE_PRODUCT,
  id,
  payload
})


/* CATALOG */
export const ADD_CATALOG = 'ADD_CATALOG'
export const REMOVE_CATALOG = 'REMOVE_CATALOG'
export const UPDATE_CATALOG = 'UPDATE_CATALOG'

export const addCatalog = payload => ({
  type: ADD_CATALOG,
  payload: payload
})

export const deleteCatalog = id => ({
  type: REMOVE_CATALOG,
  id
})

export const updateCatalog = (id, payload) => ({
  type: UPDATE_CATALOG,
  id,
  payload
})