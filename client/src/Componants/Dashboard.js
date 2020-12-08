import React from 'react'

const Dashboard = ({ user }) => {

      return (
            <div>
                  <h1 className="mt-4">Dashboard</h1>
                  <p className="lead mb-3">Welcome {user.name} we are happy to see you again</p>
                  <a href="/logout" className="btn btn-secondary">Logout</a>
            </div>
      )
}

export default Dashboard
