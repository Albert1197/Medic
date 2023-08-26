
import NavBar from '../components/NavBar'
const PatientsPage = () => {
  return (
    <>
      <NavBar />
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-cyan-900 font-semibold">
                    Patient details
                  </div>
                    <p className="block mt-1 text-lg leading-tight font-medium text-black">{patient.name}</p>
                    <p className="mt-2 text-gray-500">{patient.num_afi}</p>
                </div>
              </div>

    </>
  )
}

export default PatientsPage
