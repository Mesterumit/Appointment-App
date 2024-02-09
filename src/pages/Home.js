import Doctors from '../components/Doctors'
import AppointmentList from '../components/AppointmentList'
import { useEffect, useState } from 'react'

const Home = () => {
  // get appointment date from local storage if they exist,
  //  otherwise just an empty array will do
  const [appointments, setAppointments] = useState(
    () => JSON.parse(localStorage.getItem('appointments')) || []
  )

  //when appointments are updated, refresh tasks in the local storage 
  // - equivalent to the ComponentDidUpdate in a class component
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments))
  }, [appointments])

  return (
    <main className="text-center mt-2 vh-100">
      <h1 className="display-5 text-danger">Umit's HOSPITAL</h1>
      <Doctors appointments={appointments} setAppointments={setAppointments} />
      <AppointmentList
        appointments={appointments}
        setAppointments={setAppointments}
      />
    </main>
  )
}

export default Home
