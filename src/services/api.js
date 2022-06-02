import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  where,
  query,
  doc,
} from "firebase/firestore"

export const getProducts = async () => {
  const db = getFirestore()
  const dbCollection = collection(db, "items")

  try {
    const response = await getDocs(dbCollection)
    return response.docs.map((item) => ({ ...item.data() }))
  } catch (error) {
    console.log("Error to get products.. => " + error)
  }
}

export const getProductsByCategory = async id => {
  const db = getFirestore()
  const dbCollection = collection(db, "items")

  try {
    const dbQuery = query(dbCollection, where("category_id", "==", id))
    const response = await getDocs(dbQuery)
    return response.docs.map((item) => ({ ...item.data() }))
  } catch (error) {
    console.log("Error to get products by category.. => " + error)
  }
}

export const getProductById = async id => {
  const db = getFirestore()

  try {
    const dbQuery = doc(db, "items_detail", id)
    const response = await getDoc(dbQuery)
    return response.data()
  } catch (error) {
    console.log("Error to get product by id.. => " + error)
  }
}
