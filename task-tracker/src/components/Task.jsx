import React from 'react'

export const Task = ({task,onDelete}) => {
  const {day,date,month,year,time} = task.when;
  return (
    <div
      className="
        m-1 
        p-2 
        d-flex 
        justify-content-between 
        cursor-pointer" 
      style={{
        backgroundColor:"#f4f4f4",
      }}
    >
      <div>


        <h1>{task.activity}</h1>
        <p>{`${day} ${date} ${month} ${year} ${time}`}</p>
      </div>


      <div className='
        me-3 
        d-flex 
        align-items-center'>
        <button 
          className='btn btn-danger rounded-circle'
          onClick={() => onDelete(task.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
          </svg>
        </button>
      </div>
      
    </div>
  )
}
