
const Shimmer = () => {
    const shimmerElements = [];
  
    for (let i = 0; i < 10; i++) {
      shimmerElements.push(<div key={i} className="shimmer"></div>);
    }
  
    return <div className="shimmer-wrapper">{shimmerElements}</div>;
  };
  
  export default Shimmer;
  