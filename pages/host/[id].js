import axios from 'axios';
import Layout from '../../components/Layout';
import Head from 'next/head';
import HouseForm from '../../components/HouseForm';

const EditHouse = props => {
  return (
    <Layout
      content={
        <>
          <Head>
            <title>Edit Event</title>
          </Head>

          <HouseForm edit={true} house={props.house} />
        </>
      }
    />
  );
};

EditHouse.getInitialProps = async ({ query }) => {
  const { id } = query;
  const response = await axios.get(`http://localhost:3000/api/houses/${id}`);

  return {
    house: response.data
  };
};

export default EditHouse;
