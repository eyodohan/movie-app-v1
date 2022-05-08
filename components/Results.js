const Results = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <h1 key={result.id}>{result.title}</h1>
      ))}
    </div>
  );
};

export default Results;
