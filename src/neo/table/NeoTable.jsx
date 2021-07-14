const NeoTable = ({ dataSource, columns }) => {
  const renderHeaders = (item, index) => {
    return item.width ? (
      <th width={item.width} key={item.key + index}>
        {item.title}
      </th>
    ) : (
      <th key={item.key + index}>{item.title}</th>
    );
  };

  columns.forEach((col, index) => {
    console.log(col.dataIndex);
  });

  const renderTableBody = (item) => {
    return (
      <tr key={item.key}>
        {columns.map((col) => {
          return col.render ? (
            <td key={col.key + item.key}>
              {col.render(item[col.dataIndex], item)}
            </td>
          ) : (
            <td key={col.key + item.key}>
              <div dangerouslySetInnerHTML={{ __html: item[col.dataIndex] }} />
            </td>
          );
        })}
      </tr>
    );
  };

  return (
    <table className="neo-table">
      {columns ? (
        <thead>
          <tr>{columns.map(renderHeaders)}</tr>
        </thead>
      ) : null}

      {dataSource ? <tbody>{dataSource.map(renderTableBody)}</tbody> : null}
    </table>
  );
};

export default NeoTable;
