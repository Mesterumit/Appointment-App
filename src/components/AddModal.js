import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useState } from 'react'


const AddModal = ({
  show,
  handleClose,
  doctorName,
  appointments,
  setAppointments,
}) => {
  const [patientName, setPatientName] = useState([])
  const [date, setDate] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setAppointments([
      ...appointments,
      {
        id: appointments.length + 1,
        patient: patientName,
        day: date,
        doctor: doctorName,
        seen: false,
      },
    ])
    handleClose()
  }

 

  

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="display-6 text-danger">
            Appointment with {doctorName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="patientName">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
                onChange={(event) => setPatientName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="datetime">
              <Form.Label>Day & Time</Form.Label>
              <Form.Control
                type="datetime-local"
                onChange={(event) => setDate(event.target.value)}
                
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit" className="me-2">
                Submit
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AddModal
