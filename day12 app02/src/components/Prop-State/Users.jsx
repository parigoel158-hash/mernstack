import React from 'react'

const Users = () => {
  return (
    <>
    <div className="container">
        <div className="row g-4">
            {
                Users.map((val, index) => {
                    return <div className="col-4">
                        <UserCard data = {val} />
                        </div>
                })
            }
        </div>
    </div>
    </>
  )
}

export default Users
