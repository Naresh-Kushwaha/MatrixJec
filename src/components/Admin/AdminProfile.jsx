
import Header2 from '../Header2'

const navigation = [
  { name: 'Home', href: '/adminprofile', current: true },
  { name: 'Dashbord', href: '/admindashbord', current: false },
  { name: 'Connect', href: '/generatemeeting', current: false },

  { name: 'Add Event', href: '/eventcontroler', current: false },
]

export default function AdminProfile() {
  return (
    <div>
      <div>
    <Header2 navigation={navigation}></Header2>
    </div>
    <div className='py-12'>
    <div className="p-6 max-w-sm mx-auto bg-white shadow-md rounded-lg">
    <div className="flex items-center">
      <img className="w-16 h-16 rounded-full" src="https://as2.ftcdn.net/v2/jpg/04/75/00/99/1000_F_475009987_zwsk4c77x3cTpcI3W1C1LU4pOSyPKaqi.jpg" alt="Profile" />
      <div className="ml-4">
        <h2 className="text-xl font-bold">Admin Name</h2>
        <p className="text-gray-600">admin@example.com</p>
      </div>
    </div>
    <div className="mt-4">
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Edit Profile</button>
    </div>
  </div>
    </div>
    </div>
  )
    
}
