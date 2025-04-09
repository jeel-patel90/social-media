import React from 'react'

function WelcomeMessage({ onGetPostsClick }) {
    return (
        <div>
            <center className='welcome_message'>
                <h1>
                    Hello ! Currently there are no post here
                </h1 >
                <h4></h4>
                <button
                    onClick={onGetPostsClick}
                    type="button"
                    className="btn btn-secondary btn_css">
                    Fetch Posts</button>

            </center>
        </div>
    )
}

export default WelcomeMessage