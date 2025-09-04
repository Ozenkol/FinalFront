import { ReactNode } from "react"

interface Props {
    children?: ReactNode
}

export const Table = ({children}: Props) => {
    return (
        // <table className="">
        //     {children}
        // </table>
        <table className="border-collapse border border-gray-400">
  <thead>
    <tr>
      <th className="border border-gray-300">Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>

    )
}