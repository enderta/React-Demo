import React from 'react'

const Profile = () => {
  const [data, setData] = React.useState([])
  const [profile, setProfile] = React.useState({})
  const [id, setId] = React.useState('')

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((result) => {
      setData(result)
   
    }
    )
  }, [])
  const handleProfile = (id) => {
    setId(id)
    setProfile(data.find(item => item.id === id))
  }


  return (
    <div>Profile</div>
  )
}

export default Profile