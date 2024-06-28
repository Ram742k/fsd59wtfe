import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-6'>
                    <div className='card'>
                    <div  className='card-header'>
                            <h3>Welcome to the Home Page</h3>
                        </div>
                        <div className='card-body'>
                            {/* Welcom content for job portal */}
                            <p>This is the home page for the job portal. Here, you can find information about the job portal, its features, and how to use it. You can also explore job listings and apply for jobs.
                                
                                To get started, click on the "Jobs" tab to view available jobs.
                                
                                If you have any questions or need assistance, please don't hesitate to contact us.
                                
                                Thank you for choosing our job portal!
                            </p>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default Home;