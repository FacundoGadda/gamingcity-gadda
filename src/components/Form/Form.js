import { Form, FormGroup, Label, Input, Button, Spinner } from "reactstrap"
import { useFormik } from "formik"
import NumberFormat from "react-number-format"

import { useCartContext } from "../../context/CartContext"
import { sendOrder } from "../../services/api"

const FormComponent = ({ toggle, setSuccess, setId, setLoading, loading }) => {
  const { order } = useCartContext()

  const formik = useFormik({
    initialValues: {
      ...order,
      buyer: {
        name: "",
        email: "",
        phone: "",
      },
    },
    onSubmit: (values) => {
      setLoading(true)
      sendOrder(values)
        .then((res) => {
          setSuccess(true)
          setId(res.id)
        })
        .catch(() => {
          setSuccess(false)
        })
        .finally(() => setLoading(false))
    },
  })

  const { handleSubmit, handleChange, values } = formik

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Nombre</Label>
        <Input
          name="buyer.name"
          type="text"
          className="shadow-none"
          placeholder="Nombre completo"
          disabled={loading}
          value={values.buyer.name}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Correo electrónico</Label>
        <Input
          name="buyer.email"
          type="email"
          className="shadow-none"
          placeholder="Correo electrónico"
          value={values.buyer.email}
          disabled={loading}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Teléfono</Label>
        <NumberFormat
          format="+54 (11) ####-####"
          className="form-control shadow-none"
          placeholder="Teléfono"
          disabled={loading}
          value={values.buyer.phone}
          onValueChange={(values) => {
            formik.setFieldValue("buyer.phone", values.value)
          }}
          mask="_"
          required
        />
      </FormGroup>
      <div className="d-flex gap-2 justify-content-end mt-4">
        <Button
          color="primary"
          type="submit"
          className="shadow-none"
          disabled={loading}
        >
          {loading ? (
            <span className="d-flex align-items-center">
              <Spinner size="sm" className="me-2" />
              guardando..
            </span>
          ) : (
            "Comprar"
          )}
        </Button>
        <Button onClick={toggle} className="shadow-none" disabled={loading}>
          Cancelar
        </Button>
      </div>
    </Form>
  )
}

export default FormComponent
