'use client'
import React from 'react'
import LoadingBar from 'react-top-loading-bar'

const loading = () => {
    return (
        <div>
            <LoadingBar
                color='rgb(21 128 61 / var(--tw-bg-opacity))'
                progress={100}
                height={3}
            />
        </div>
    )
}

export default loading