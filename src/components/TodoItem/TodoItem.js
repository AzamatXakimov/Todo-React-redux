import React from 'react'

export const TodoItem = ({obj, deleteFn, editFn}) => {
    return<>
        <li className='mb-4 d-flex align-items-center justify-content-between shadow p-3 bg-info rounded-3'>
            <h3>
                {obj.title}
            </h3>
            
            <div>
                <button className='btn btn-warning me   -3' onClick={() => {
                    editFn(obj.id)
                }}>EDIT</button>
                <button className='btn btn-danger' onClick={() => {
                    deleteFn(obj.id)
                }}>DELETE</button>
            </div>
        </li>
    </>
}
