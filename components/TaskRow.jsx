import { memo } from 'react'
import { Link } from 'react-router-dom'

// Memoizziamo la funzione per far si che il componente non venga rirenderizzato al trigger di uno stato nell'elemento padre. Ottimizziamo cosi le performance e forziamo un rerender solo al cambio delle props del coponente
const TaskRow = memo(({ title, status, createdAt, id }) => {
  return (
    <tr
      className="border"
      key={id}
      style={{ backgroundColor: 'rgba(22, 118, 196, 0.52)', color: 'white' }}
    >
      <td className="border p-3">
        <Link to={`/task/${id}`}>{title}</Link>
      </td>
      <td className={`border p-3 ${setColor(status)}`}>{status}</td>
      <td className="border p-3">{createdAt}</td>
    </tr>
  )
})
export { TaskRow, setColor }

function setColor(status) {
  switch (status) {
    case 'To do':
      return 'bg-danger'
      break
    case 'Doing':
      return 'bg-warning'
      break
    case 'Done':
      return 'bg-success'
      break
    default:
      break
  }
}
