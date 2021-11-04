// import React, { useContext, useState } from 'react';
// import TaskContext from '../contexts/TaskContext';

// export default function Filters() {
//   const {
//     tasks,
//     setTasks,
//   } = useContext(TaskContext);

//   const [nameFilter, setNameFilter] = useState('DESC');
//   const [dateFilter, setDateFilter] = useState('ASC');
//   const [statusFilter, setStatusFilter] = useState('ASC');

//   const handleNameFilter = () => {
//     const sortByName = tasks.sort((a, b) => {
//       if (a.status > b.status) return 1;
//       if (a.status < b.status) return -1;
//       return 0;
//     });
//     setTasks([...sortByName]);
//   }

//   return (
//     <>
//       <button
//         className=""
//         onClick={ handleNameFilter }
//       >
//         Nome
//       </button>
//       <button
//         className=""
//         onClick={() => setDateFilter(!dateFilter)}
//       >
//         Data
//       </button>
//       <button
//         className=""
//         onClick={() => setStatusFilter(!statusFilter)}
//       >
//         Status
//       </button>
//     </>
//   )
// }
