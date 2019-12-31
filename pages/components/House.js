const House = props => {
  console.log(props);
  return (
    <div>
      <img src={props.picture} width='100%' alt='Host Image' />
      <p>{props.title}</p>
      <p>
        {props.rating} ({props.reviewsCount})
      </p>
    </div>
  );
};

export default House;
