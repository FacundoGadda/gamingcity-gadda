import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useCartContext } from "../../context/CartContext"

import Form from "../Form/Form"
import Modal from "../Modal/Modal"
import Success from "../Success/Success"

const Purchase = ({ modal, toggle }) => {
  const navigate = useNavigate()
  const { clear } = useCartContext()

  const [id, setId] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!modal && success) {
      clear()
      return navigate("/")
    }
    // eslint-disable-next-line
  }, [modal, success])

  return (
    <Modal
      toggle={toggle}
      modal={modal}
      loading={loading}
      modalHeader={!success && "Ingrese sus datos"}
      modalBody={!success ? <Form {...{ toggle, setSuccess, setId, setLoading, loading }} /> : <Success id={id} />
    }
    />
  )
}

export default Purchase
