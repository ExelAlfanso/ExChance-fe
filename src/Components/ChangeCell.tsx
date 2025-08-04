interface ChangeCellProps {
  value: number;
}

const ChangeCell: React.FC<ChangeCellProps> = ({ value }) => (
  <td className={`  ${value >= 0 ? "text-green" : "text-red"}`}>
    <div className="flex flex-row px-6 py-4 ">
      <img
        className="mr-2"
        src={
          value >= 0
            ? "icon-park-solid_up-two.svg"
            : "icon-park-solid_up-one.svg"
        }
        alt=""
      />
      <p>{Math.abs(value).toFixed(2)}%</p>
    </div>
  </td>
);
export default ChangeCell;
