import { Container } from 'react-bootstrap'
import { doctorData } from '../helper/data'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useState } from 'react'
import AddModal from './AddModal'

const Doctors = ({ appointments, setAppointments }) => {
  const [show, setShow] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleClick = (drName) => {
    setSelectedDoctor(drName)
    handleShow()
  }

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: 'rgb(166, 18, 189)' }}>
        Our Doctors
      </h3>
      <Row className="justify-content-center">
        {doctorData.map((doctor) => (
          <Col key={doctor.id} xs={6} sm={4} md={3} type="button">
            <img
              src={doctor.img}
              alt={doctor.id}
              className="img-thumbnail doctor-img"
              onClick={() => handleClick(doctor.name)}
            />
            <div>
              <h5>{doctor.name}</h5>
              <h6>{doctor.dep}</h6>
            </div>
          </Col>
        ))}
      </Row>

      <AddModal
        show={show}
        handleClose={handleClose}
        doctorName={selectedDoctor}
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </Container>
  )
}

export default Doctors
