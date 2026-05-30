export default function TransferTable({ rows, title }) {
  return (
    <div className="receipt-table-block mb-6">
      {title && (
        <h3 className="text-xs font-bold uppercase tracking-widest text-navy-600 border-b-2 border-navy-900 pb-2 mb-4">
          {title}
        </h3>
      )}
      <table className="w-full border-collapse text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-navy-200">
              <td className="py-2.5 pr-4 font-semibold text-navy-700 w-2/5 align-top">{row.label}</td>
              <td className="py-2.5 text-navy-900 align-top">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
