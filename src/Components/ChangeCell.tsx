interface ChangeCellProps {
  value: number;
}

const ChangeCell: React.FC<ChangeCellProps> = ({ value }) => (
  <td className={`p-6 ${value >= 0 ? "text-green" : "text-red"}`}>
    <div className="flex flex-row mx-auto">
      <img
        src={
          value >= 0
            ? "icon-park-solid_up-two.svg"
            : "icon-park-solid_up-one.svg"
        }
        alt=""
      />
      {Math.abs(value).toFixed(2)}%
    </div>
  </td>
);
export default ChangeCell;
