import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AppImage from '../images/appointment.jpg'
import { FaTimesCircle } from 'react-icons/fa'

const AppointmentList = ({ appointments, setAppointments }) => {
  const deleteAppointment = (id) => {
    setAppointments(appointments.filter((item) => item.id !== id))
  }

  const handleDoubleClick = (id) => {
    setAppointments(
      appointments.map((item) =>
        item.id === id ? { ...item, seen: !item.seen } : item
      )
    )
    
  }

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: 'rgb(166, 18, 189)' }}>
        Appointment List
      </h3>
      <div type="button" className="d-flex flex-column align-items-center">
        {appointments?.length < 1 && (
          <img src={AppImage} width={'80%'} alt="appointment calendar" />
        )}

        {appointments.map((item) => {
          const { id, patient, day, seen, doctor } = item
          return (
            <div
              key={id}
              className={seen ? 'seen' : 'appointments'}
              onDoubleClick={() => handleDoubleClick(id)}
            >
              <Row className="justify-content-center align-item-center g-3">
                <Col xs={12} sm={12} md={6}>
                  <h4 className="text-danger">{patient}</h4>
                  <h5>{doctor}</h5>
                </Col>
                <Col xs={10} sm={8} md={5}>
                  <h5>Date:{new Date(day).toLocaleDateString()}</h5>
                  <h6>
                    Time:{new Date(day).getHours()}:{new Date(day).getMinutes()}
                  </h6>
                </Col>
                <Col xs={2} sm={2} md={1} className="text-end">
                  <FaTimesCircle
                    className="text-danger fs-1"
                    type="button"
                    onClick={() => deleteAppointment(id)}
                  />
                </Col>
              </Row>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

export default AppointmentList
